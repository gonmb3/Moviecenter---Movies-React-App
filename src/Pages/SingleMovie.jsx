import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'

import { Movies } from '../Data/MovieData';

import MovieInfo from '../Components/Single/MovieInfo';
import MovieCasts from '../Components/Single/MovieCasts';
import MovieRates from '../Components/Single/MovieRates';

import Titles from '../Components/Titles';
import { BiSolidCollection } from 'react-icons/bi';
import Movie from '../Components/Movie';

const SingleMovie = () => {
  const {id} = useParams();
  const movie = Movies.find(movie => movie.name === id);

  const  relatedMoviesData = Movies.filter(m => m.category === movie.category)

  return (
    <Layout>
      {/* Movieinfo component */}
      <MovieInfo  movie={movie} />

      <div className="container mx-auto min-h-screen px-2 py-6">
          <MovieCasts />
              {/*rate */}
          <MovieRates movie={movie} />
              {/*related */}
          <div className="my-16">
            {/* Titles component */}
            <Titles  title="Peliculas Relacionadas" Icon={BiSolidCollection} />
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* movies DATA  & Movie component */}
          {relatedMoviesData.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
         
        </div>
          </div>
      </div>
    </Layout>
  )
}

export default SingleMovie