import React from 'react'
import Titles from '../Titles'
import { FaUserFriends } from 'react-icons/fa'
import {  Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { UsersData } from '../../Data/MovieData'


const MovieCasts = () => {
  return (
    <div>
      {/* Title Component */}
        <Titles title="Elenco" Icon={FaUserFriends} />
        <div className="my-10">
             {/* swiper */}
        <Swiper
        breakpoints={{
          200:{
            slidesPerView:1,
          },
          639:{
            slidesPerView:2,
          },
          1024:{
            slidesPerView:3,
          },
          1440:{
            slidesPerView:5,
          },
        }}

          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
          speed={1500}
          loop={true}
         modules={[ Autoplay]}
        >
          {/* movies data*/ }
            {UsersData.map((user, index) => (
              <SwiperSlide key={index}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800">
                {/* image */}
                <img src={`/images/${user.image}`} alt={user.name} className='w-full h-64 object-cover rounded mb-4' />
                <p>{user?.fullName} </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        </div>
        
    </div>
  )
}

export default MovieCasts