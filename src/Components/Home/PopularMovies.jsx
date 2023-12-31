import React from 'react'
import Titles from '../Titles'

import {BsCollectionFill} from "react-icons/bs"
import { Movies } from '../../Data/MovieData'
//movies data
import Movie from '../Movie'

const PopularMovies = () => {
  return (
    <div className='my-16'>
      {/* movies TITLE COMPONENT  */}
        <Titles title="Peliculas Populares" Icon={BsCollectionFill} />

        <div className="grid sm:mt-12 mt-6  xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
             {/* MOVIE COMPONENT  */}
            {
              Movies.slice(0,8).map((movie,index) => (                
                <Movie key={index} movie={movie} />
              ) )
            }
        </div>
    </div>
  )
}

export default PopularMovies