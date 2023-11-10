import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
  return (
    <div>
<VideoTitle name={mainMovie.original_title} moreInfo={mainMovie.overview} movieId={mainMovie.id}/>
<VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer;