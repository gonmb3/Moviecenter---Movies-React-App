import { Movies } from "../../Data/MovieData";
import FlexMovieItems from "../FlexMovieItems";

import { Link } from "react-router-dom";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaHeart } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full mt-1 md:mt-8 pt-10 rounded-xl ">
    
      {/* swiper  */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1600}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full  xl:h-[400px] bg-dry lg:h-64 h-48 rounded-xl"
      >
        
        {/* movies data  */}
        {Movies.slice(0, 6).map((movie, index) => (
          <SwiperSlide
            key={index}
            className="relative  rounded-xl overflow-hidden "
          >
            {/* div bg-black /50 opacity */}
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black/50"></div>
            {/* image  */}
            <img
              src={`/images/movies/${movie.titleImage}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute linear-bg  xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 ">
              {/* banner title movie name */}
              <h1 className="xl:text-4xl truncate uppercas font-sans sm:text-2xl text-xl font-bold drop-shadow-md">
                {movie.name}
              </h1>
              {/* MovieItems component (category  year & time) */}
              <div className="flex gap-5 items-center text-dryGray">
                <FlexMovieItems movie={movie} />
              </div>
               {/* watch button & heart favorite icon */}
              <div className="flex gap-5 items-center text-dryGray">
              <Link to={`/peliculas/${movie.name}`} className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                  Mirar
              </Link>
              <button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm  bg-opacity-30">
                <FaHeart  />
              </button>
              </div>
             
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Banner;
