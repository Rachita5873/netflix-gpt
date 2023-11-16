import React from 'react'

const VideoTitle = ({name, moreInfo}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{name}</h1>
        <p className='py-6 text-lg w-1/4'>{moreInfo}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶Play</button>
            <button className='bg-white text-black mx-2 p-4 px-10 text-xl rounded-lg hover:bg-opacity-80'>ⓘMore Info</button>
        </div>
    </div>
  )
}

export default VideoTitle