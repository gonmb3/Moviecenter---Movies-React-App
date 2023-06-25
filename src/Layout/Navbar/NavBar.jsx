import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import {AiFillStar} from "react-icons/ai"

const NavBar = () => {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  return (
    <nav className=" bg-main shadow-md sticky top-0 z-20">
 
      <div className="container mx-auto py-6 px-2 lg:grid  gap-10 grid-cols-7 justify-between items-center">
             {/* logo */}
        <div className="col-span-1 lg:block hidden">
          <Link to="/" >
          <h2 className="text-[16px] xl:text-[20px] font-bold tracking-widest flex items-center mr-2"> <span className="text-subMain flex-rows">
             <AiFillStar size={33} className=" mx-1 hover:rotate-180 duration-500" /> {" "} MOVIE</span>CENTER</h2>
          </Link>
        </div>
        {/* search form */}
        <div className="col-span-3 ml-10">
          <form
            action=""
            className="w-full text-sm bg-dryGray rounded flex-btn gap-4"
          >
            <button
              type="submit"
              className="bg-subMain text-white flex-colo rounded w-12 h-12 "
            >
              <FaSearch size={20} />{" "}
            </button>
            <input
              type="text "
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 px-2 bordr-nonde text-black"
              placeholder="Buscar Pelicula..."
            />
          </form>
        </div>

        {/* menu */}
        <div className="col-span-3 font medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center ">
          <NavLink to="/peliculas" className={Hover}>
          Películas
          </NavLink>

          <NavLink to="/nosotros" className={Hover}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={Hover}>
            Contacto
          </NavLink>

          <div className="flex gap-x-4 items-center">
            <NavLink to="/iniciarsesion" className={Hover}>
              <BiUser className="w-6 h-6" />
            </NavLink>

            <NavLink to="/favoritos" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                2
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
