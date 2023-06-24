import React from "react";
import Titles from "../Titles";

import {PiTelevisionBold} from "react-icons/pi"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { SeriesData } from "../../Data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Stars from "../Stars";

const Series = () => {


  return (
    <div className="my-16 ">
      {/* movies TITLE COMPONENT  */}
      <Titles title={"Series"} Icon={PiTelevisionBold} />
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
         modules={[Navigation, Autoplay]}
        >
          {/* movies data*/ }
            {SeriesData.map((movie, index) => (
              <SwiperSlide key={index}>
              <div className="p-4 h-[510px] md:h-[430px]  border hovered border-border bg-dry hovered rounded-lg overflow-hidden">
                {/* image */}
                 <img src={`/src/images/movies/${movie.titleImage}`} alt={movie.name}  className=" w-full h-full  object-cover rounded-lg  " />

                  <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0    ">
                   {/* favorite heart icon */}
                    <button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-40 text-white">
                      <FaHeart />
                    </button>
                      {/* movie name */}
                    <Link className="font-bold text-xl trancuted line-clamp-2" to={`/peliculas/${movie.name}`}>
                      {movie.name}
                    </Link>
                    <div className="flex gap-2 text-star">
                      {/* Star rating component */}
                    <Stars value={movie.rate} />
                    </div>
                </div>

                  </div>
              </SwiperSlide>
            ))}
        </Swiper>

      
      </div>
    </div>
  );
};

export default Series;
