import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
    <div className="fixed -z-10">
        <img
          className='max-md:h-screen max-xl:h-screen object-cover '
          src={BG_URL}
          alt="header"
        />
      </div>
    <div className=''>
    <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </div>
  )
}

export default GptSearch;