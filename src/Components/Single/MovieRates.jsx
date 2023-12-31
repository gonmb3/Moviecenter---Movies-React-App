//react hook
import React, { useState } from 'react'
//components
import { Message, Select } from '../UsedInputs'
import Titles from '../Titles'
import Stars from '../Stars'
//rect-icons
import { BiSolidBookmarkStar } from 'react-icons/bi'

import { UsersData } from '../../Data/MovieData'


const MovieRates = ({movie}) => {
  // rating state
  const [rating, setRating] = useState(0);
  {/* ratings data for UsedInInputs component - ( Select ) */}
  const Ratings = [
    {
      title:"Puntaje",
    },
    {
      title:"0 - Muy Mala",
      value: 0,
    },
    {
      title:"1 - Mala",
      value: 1,
    },
    {
      title:"2 - Regular",
      value: 2,
    },
    {
      title:"3 - Buena",
      value: 3,
    },
    {
      title:"4 - Muy Buena",
      value: 4,
    },
    {
      title:"5 - Excelente",
      value: 5,
    },
  ]
  

  return (
    <div className='my-12 '>
      {/* Title component */}
        <Titles title="Reseñas" Icon={BiSolidBookmarkStar }  />
         {/* Review */}
        <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
          <div className="xl:col-span-2 w-full flex flex-col gap-8">
            {/* review movie name */}
           <h3 className='text-xl text-text  font-semibold'>Reseña de "{movie?.name}" </h3>

           <div className="text-sm w-full">
            
            <div className="flex flex-col py-5">
              
              <label htmlFor="" className='font-medium'>Nombre</label>
              <input type="text" placeholder='Nombre...'  className='w-full h-5 mt-2 text-white p-6 bg-main border border-border'/>
            </div>
       {/* UsedInInputs component   (Select) */}
             <Select
             placeholder={"Escribe tu reseña..."}
              label={"Seleccionar Puntaje"} 
              options={Ratings} 
              onChange={e => setRating(e.target.value)}
              />
             <div className="flex text-lg gap-2 text-star mt-4">    
             {/* Stars component (RATING) */}           
                  <Stars value={rating} />
              </div>
           </div>
         {/* UsedInInputs component   (Message) */}
         <Message label={"Mensaje"} placeholder={"Escribe tu reseña..."} />
         {/* submit */}    
         <button className="bg-subMain text-white py-3 w-full flex-colo rounded">
              Enviar
         </button>
          </div>

          {/*  REVIWES  */}
          <div className="col-span-3 flex flex-col gap-6">
            <h3 className='text-xl text-text font-semibold'>Reseñas  </h3>
            <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
                {
                  UsersData.map((user,index) => (
                    <div  key={index} className="md:grid flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                          <div className="col-span-2 mx-auto hidden md:block ">
                            {/*image */}
                            <img 
                            src={`/images/${user ? user.image : "user.jpg" }`} 
                            alt={user?.fullName}
                             className='h-16 w-16 object-cover rounded-full' />
                          </div>
                           {/*name */}
                          <div className="col-span-7 flex-col gap-2">
                            <h2>{user?.fullName}</h2>
                             {/*message (review) */}
                            <p className="text-sm leading-6 font-medium text-text">
                              {user?.message}
                            </p>
                          </div>
                           {/*rates  STARS component */}
                           <div className="col-span-3 flex-rows border-l border-border text-sm gap.1 text-star">
                            <Stars value={user?.rate}/>
                           </div>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieRates