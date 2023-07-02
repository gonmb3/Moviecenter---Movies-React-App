import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaHeart, FaListAlt, FaUsers } from 'react-icons/fa'
import {RiLockPasswordLine, RiMovie2Fill} from "react-icons/ri"
import {HiViewGridAdd} from "react-icons/hi"
import { FiSettings } from 'react-icons/fi'
import Layout from '../../Layout/Layout'
import { NavLink } from 'react-router-dom'

const SideBar = ({children}) => {

  // sidebar links
  const sideBarLinks = [
    {
      name: "Panel",
      link: "/panel",
      icon: BsFillGridFill
    },
    {
      name: "Mi Lista",
      link: "/mi-lista",
      icon: FaListAlt
    },
    {
      name: "Agregar Película",
      link: "/agregar-pelicula",
      icon: RiMovie2Fill
    },
    {
      name: "Categorias",
      link: "/categorias",
      icon: HiViewGridAdd
    },
    {
      name: "Usuarios",
      link: "/usuarios",
      icon: FaUsers
    },
    {
      name: "Actualizar Perfil",
      link: "/perfil",
      icon: FiSettings
    },
    {
      name: "Favoritos",
      link: "/favoritos",
      icon: FaHeart
    },
    {
      name: "Cambiar Contraseña",
      link: "/contraseña",
      icon: RiLockPasswordLine
    },
  ]

  // active links
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4"
  const Hover = ({isActive}) =>  isActive ? `${active} ${inActive}` :` ${inActive}  ${hover}`
  

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">

          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
                {
                   //sidebar links
                   sideBarLinks.map((link, index) => (
                    <NavLink to={link.link} key={index} className={Hover}>
                        <link.icon/> <p>{link.name}</p>
                    </NavLink>
                   ))
                }
          </div>
          {/* profile drag and drop container - aos animation */}
          <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="10"
          data-aos-offset="200"
          className="col-span-6 rounded-md bg-dry border border-gray-800 p-8"
          >
                {children}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SideBar