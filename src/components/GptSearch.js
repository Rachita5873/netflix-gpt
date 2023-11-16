import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
    const Browse = React.lazy(() => import('./Browse'));
  return (
    <div>
         <div className='absolute -z-10'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' />
       </div>
       <GptSearchBar />
       <GptMovieSuggestion /> 
    </div>
  )
}

export default GptSearch