import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='' src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCart