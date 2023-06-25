import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillStar} from "react-icons/ai"

const Footer = () => {
  const Links = [
    {
      title:"Compañia",
      links:[
        {
          name:"Incio",
          link :"/"
        },

        {
          name:"Nosotros",
          link :"/nosotros"
        },

        {
          name:"Contacto",
          link :"/contacto"
        },
        {
          name:"Películas",
          link:"/peliculas"
        },
        
      ]
    },
    {
      title:"Categorias",
      links:[
        {
          name:"Acción",
          link :"#"
        },

        {
          name:"Romanticas",
          link :"#"
        },

        {
          name:"Drama",
          link :"#"
        },
        {
          name:"Históricas",
          link:"#"
        },
        
      ]
    },
    {
      title:"Mi Cuenta",
      links:[
        {
          name:"Dashboard",
          link :"/dashboard"
        },

        {
          name:"Mis Favoritos",
          link :"/favoritos"
        },

        {
          name:"Perfil",
          link :"/cuenta"
        },
        {
          name:"Cambiar Contraseña",
          link:"/contraseña"
        },
        
      ]
    }
  ]

  return (
    <div className='bg-dry py-4 border-t-2 border-black'>
      <div className="container mx-auto px-2 ">
          <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb.3.5 sm:pb-0'>
                    <h3 className='text-md lg:leading-7 font-medium sm:mb-5 lg:mb-6 pb-0.5 '>{link.title} </h3>
                    <ul className='text-sm flex flex-col space-y-3'>
                      {
                        link.links.map((text, index) => (
                          <div>
                                  <li key={index} className='flex items-baseline '>
                                    <Link to={text.link} className='text-border inline-block w-full hover:text-subMain'>
                                      {text.name}
                                    </Link>
                                  </li>
                          </div>
                        ))
                      }
                    </ul>
            </div>
          ))}

          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 ">
          <Link to="/" >
          <h2 className="text-[16px] xl:text-[20px] font-bold tracking-widest flex items-center mr-2"> <span className="text-subMain flex-rows">
             <AiFillStar size={33} className=" mx-1 hover:rotate-180 duration-500" /> {" "} MOVIE</span>CENTER</h2>
          </Link>
                          <p className='padding leading-7 text-sm text-border mt-3 flex-col'>
                             <span> Lorem ipsum dolor sit amet, </span>  <br />  consectetur adipisiarum ti <br />
                            
                             <span>Telefono: +598 099 555 666</span>
                             <span>Email: moviecenter@gmail.com</span>
                          </p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer