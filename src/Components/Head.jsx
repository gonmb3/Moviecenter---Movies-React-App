import React from 'react'

const Head = ({title}) => {
  return (
    <div className='relative w-full bg-deepGray lg:h-64 h-40 overflow-hidden rounded-md '>
        <img src="/images/head.png" alt="Nosotros-img" className='w-full h-full object-cover ' />

        <div className="absolute lg:top-24 top-16 w-full flex-colo">
          <h1 className='text-2xl lg:text-h1 text-gray-100 text-center font-bold drop-shadow-md'>
            {title && title }
          </h1>

        </div>
    </div>
  )
}

export default Head