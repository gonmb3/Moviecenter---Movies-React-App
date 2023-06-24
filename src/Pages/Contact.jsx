// components
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import { FiMapPin, FiPhoneCall, FiVoicemail } from "react-icons/fi";

const Contact = () => {

  const contactData = [
    {
      id: 1,
      title:"Email",
      info: " Provident nemo harum quo cupiditate am, facere atque, assumenda, beatae numqu.",
      icon : FiVoicemail,
      contact : "moviescenter@gmail.com"
    },
    {
      id: 2,
      title:"Telefono",
      info: " Provident nemo harum quo cupiditate amfacere atq.",
      icon : FiPhoneCall,
      contact : "+598 099 888 777"
    },
    {
      id: 2,
      title:"Ubicación",
      info: "Lorem cupiditat, Beatae  No. 1888 ",
      icon : FiMapPin,
      contact : ""
    },
  ]


  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        {/* Head component (title section) */}
        <Head title="Contacto" />
        <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
            {
              contactData.map(item => (
                <div key={item.id} className="border border-border flex-colo bg-dry p-10 rounded-lg text-center">
                      <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                        <item.icon />
                      </span>
                      <h5 className="text-xl font-semibold mb-2">{item.title} </h5>
                      <p className="mb-0 text-sm text-text leading-7">
                        <a href={`mailto:{item.contact}`} className="text-blue-600">{item.contact} </a> <br />
                        {item.info}
                      </p>
                </div>
              ))
            }
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
