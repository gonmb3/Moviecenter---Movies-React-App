// components
import Layout from "../Layout/Layout";
import Head from "../Components/Head";

const AboutUs = () => {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        {/* Head component (title section) */}
        <Head title="Nosotros" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center ">
            {/* left side */}
            <div className="">
            <h2 className="text-[18px] xl:text-2xl font-bold tracking-widest">Bienvenidos a <span className="text-subMain ">MOVIE</span>CENTER!</h2>

              <div className="mt-3 text-sm leading-8 text-white text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident nemo harum quo cupiditate amet autem quam, facere
                  atque, assumenda, beatae numquam! Totam corrupti fugit
                  voluptas maiores? Quos, vitae! Nobis, necessitatibus eum! Cum
                  dolorum officia ea placeat illum ducimus deleniti labore
                  voluptatem, commodi sed, quis nisi repellendus dolorem vero
                  provident ipsum repudiandae itaque? Enim quam adipisci
                  deleniti libero laborum quo, perspiciatis facere totam atque
                  voluptatum exercitationem porro impedit, eveniet commodi
                  quidem voluptas esse ipsa nostrum repudiandae ducimus ratione
                  doloribus illum. Hic explicabo quia recusandae minus
                  provident!
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident nemo harum quo cupiditate amet autem quam, facere
                  atque, assumenda, beatae numquam! Totam corrupti fugit
                  voluptas maiores? Quos, vitae! Nobis, necessitatibus eum! Cum
                  dolorum officia ea placeat illum ducimus deleniti labore
                  voluptatem, commodi sed, quis nisi repellendus dolorem vero
                  provident ipsum repudiandae itaque? Enim quam adipisci.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6  my-8">
                <div className=" p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold mt-6 text-subMain">
                    10K{" "}
                  </span>
                  <h4 className="text-lg font-bold mb-1">
                    Peliculas Listadas{" "}
                  </h4>
                  <p className="mb-0 text-text  leading-7 text-sm">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold mt-6 text-subMain">
                    8K{" "}
                  </span>
                  <h4 className="text-lg font-bold mb-1">
                    Usuarios{" "}
                  </h4>
                  <p className="mb-0 text-text  leading-7 text-sm">
                    {" "}
                    Lorem ipsum dolor sit amet cons adipisicing.
                  </p>
                </div>
              </div>

            </div>

            {/* right side */}
            <div className="mt-10 lg:mt-0">
              <img src="/images/about2.jpg" alt="Nosotros-img" className="w-full xl:block hidden h-[750px] rounded-lg object-cover bg-bottom" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
