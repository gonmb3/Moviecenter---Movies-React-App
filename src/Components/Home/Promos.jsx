import {FiUser} from "react-icons/fi"

const Promos = () => {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        {/* left side promo */}
            <div className="flex lg:gap-10 gap-6 flex-col">
              <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed text-white">
                Descarga tus peliculas favoritas <br /> miralas en tu movil!
              </h1>
              <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo obcaecati nostrum nesciunt 
                consequuntur repellendus, labore quos necessitatibus deleniti numquam. Dolorum eveniet velit ipsam
                 corrupti earum placeat temporibus porro, sapiente vitae maiores repudiandae nesciunt debitis illo
                  veritatis officiis explicabo laboriosam ullam voluptate dolore molestias, in, ab molestiae.
              </p>
              <div className="flex gap-4 md:text-lg text-sm">
                <div className="flex-colo bg-black text-subMain px-6 py-3 rounded-md font-bold">
                  HD 4K
                </div>
                <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded-md font-bold">
                  <FiUser /> 2K
                </div>
              </div>
            </div>

            {/* right side promo */}
            <div className="">
              <img src="/src/images/mobile.png" alt="Mobile app" className="w-full object-contain" />
            </div>
      </div>
    </div>
  )
}

export default Promos