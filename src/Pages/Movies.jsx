//react hooks
import { useState } from "react";
// components
import Movie from "../Components/Movie";
import Filters from "../Components/Filters";
import Layout from "../Layout/Layout";
//movies data
import { Movies as MovieData } from "../Data/MovieData";
//react-icons
import {CgSpinner} from "react-icons/cg"

const Movies = () => {

  const maxPage = 10;
  const [page, setPage] = useState(maxPage);

  const handleLoadingMore = () => {
    setPage(page + maxPage)
  }

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        {/* Filters component */}
        <Filters />
        {/* length movies found */}
        <p className="text-lg font-medium my6">
          Total{" "}
          <span className="font-bold text-subMain">
            {MovieData?.length} Peliculas Encontradas{" "}
          </span>
        </p>
        {/* Movies DATA */}
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* movies DATA  & Movie component */}
          {MovieData.slice(0,page)?.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
         
        </div>
         {/* loading more movies */}
         <div 
         onClick={handleLoadingMore}
         className="w-full flex-colo md:my-20 my-10">
            <button className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain">
                 Ver Más <CgSpinner className="animate-spin" />
            </button>
          </div>
      </div>
    </Layout>
  );
};

export default Movies;
