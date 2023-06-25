import React from 'react'
import Layout from '../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import {  FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';

const WatchPage = () => {
    //react hook useparams get ID
  const {id} = useParams();
  const movie = Movies.find(movie => movie.name === id);
  // watch video react hook state
  const [play, setPlay] = useState(false)
  return (
    <Layout>
          <div className="container mx-auto bg-main px-2 mb-6  ">
                <div className="flex-btn flex-wrap mb-2 bg-main rounded border border-gray-800 p-4">
                  <Link to={`/pelicula/${movie.name}`}  className="md:text-xl text-sm flex gap-3 py-5 items-center font-bold text-text">
                      <BiArrowBack size={24} /> {movie?.name}
                  </Link>
                  <div className="flex-btn sm:w-auto w-full gap-5">
                    <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
                      <FaHeart />
                    </button>

                    <button className='bg-subMain flex-rows gap-2 hover:text-main transitions font-sans text-white rounded py-3 px-8 text-sm'>
                      <FaCloudDownloadAlt size={20} /> Descargar
                    </button>
                  </div>
                </div>
                {/* watch video */}
                {
                  play ? (
                  <video className='w-full h-[50vh] md:h-[80vh]  rounded p-1 md:p-5  my-5' autoPlay={true} controls={true}>
                          {/* video  */}
                    <source src={"/images/movie.mp4"} type="video/mp4" title={movie?.name}/>
                  </video>) : (

                    <div className="w-full h-[50vh] md:h-screen rounded-lg overflow-hidden relative p-1 md:p-5  my-10 " >
                      <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo ">
                            <button onClick={() => setPlay(true)} className='bg-subMain text-white flex-colo border border-white  rounded-full w-20 h-20 font-medium text-xl '>
                                <FaPlay />
                            </button>
                      </div>
                      {/* image video background */}
                      <img
                      className='w-full h-full object-cover rounded-lg border   border-gray-80'
                       src={movie?.image ?  `/images/movies/${movie.image}` :  "images/user.png "}
                        alt={movie?.name} 
                      />
                    </div>
                  )
                }
          </div>
    </Layout>
  )
}

export default WatchPage