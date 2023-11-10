import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
        api_options
      );
      const json = await data.json();
      console.log(json);

      if (json.results) {
        const filterData = json.results.filter((video) => 
          video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      } else {
        console.error('No results found in the API response.');
      }
    } catch (error) {
      console.error('Error fetching movie video:', error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, [movieId, dispatch]); // Include dispatch as a dependency

  return null; // or return something else if needed
};

export default useMovieTrailer;
