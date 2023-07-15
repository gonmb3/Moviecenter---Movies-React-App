import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {

  return (
    <div className="border border-border hover:scale-95 transitions relative rounded overflow-hidden h-[460px] p-5">
      {/* image */}
      <Link to={`/pelicula/${movie?.name}`} className="w-full h-full ">
          <img
            src={`/images/movies/${movie?.image}`}
            alt={movie?.name}
            className="w-full h-full object-cover  rounded"
          />
      </Link>
      <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main  text-white px-4 py-3">
            {/* movie name */}
            <h3 className="font-semibold truncate">{movie?.name} </h3>
            {/* favorite button */}
            <button 

            className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
              <FaHeart />
            </button>
      </div>
    </div>
  );
};

export default Movie;
