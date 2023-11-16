import { useDispatch } from "react-redux";
import { addTopMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/constant";
import { useEffect } from "react";



const useTopMovies = () => {
    const dispatch = useDispatch();
    const getTopMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', api_options);
        const json = await data.json();
        console.log(json);
        dispatch(addTopMovies(json.results))
    }
 
    useEffect(()=>{
 getTopMovies();
    }, [])
}

export default useTopMovies;