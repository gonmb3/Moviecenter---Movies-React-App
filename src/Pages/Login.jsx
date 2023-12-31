import { AiFillStar } from 'react-icons/ai'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

const Login = () => {
  return (
    <Layout>
        <div className="container mx-auto px-2 my-24 flex-colo">
            <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border">
            <h2 className="text-[16px] xl:text-[20px] font-bold tracking-widest flex items-center mr-2"> <span className="text-subMain flex-rows">
             <AiFillStar size={33} className=" mx-1" /> {" "} MOVIE</span>CENTER
            </h2>

             <Input
              label="Email"
               placeholder="usuario@gmail.com" 
               type="email"
               
                bg={true} 
                />

              <Input
              label="Contraseña"
               placeholder="*********" 
               type="password"
                bg={true} 
                />

              <Link to="#" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
              <FiLogIn /> Entrar
              </Link>

              <p className='text-center text-border'>
                No tienes cuenta? {" "} 
                <Link to="/registrate" className='text-dryGray font-semibold ml-2 '>Registrate</Link>
              </p>
            </div>
            
        </div>
    </Layout>
  )
}

export default Login