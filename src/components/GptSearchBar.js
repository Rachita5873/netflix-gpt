import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import openai from '../utils/openai';
import { api_options } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          api_options
        );
        const json = await data.json();
        return json.results;
      };

    const handleGptSearchClick = async() => {
        const gptQuery  = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me names of five movies, comma separated like the example result given ahead. Example Result: Gadar, Don, two states, love aaj kal, Golmal";
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          if (!gptResult.choices) {
            // TODO: Write Error Handling
          }
          console.log(gptResult.choices?.[0]?.message?.content);
          const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

          // getMovies gives array of movies like : [Inception, Sholay, Interstellar, Batman Begins, The Dark Knight, Dunkirk.]
          // for each movie i will search the TMDB API
      
          const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
          // [Promise,Promise,Promise,Promise,Promise]
      
          const tmdbResults = await Promise.all(promiseArray);
      
          console.log(tmdbResults);
      
          dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
          );
    }
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar