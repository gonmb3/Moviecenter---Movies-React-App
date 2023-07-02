import React from 'react'
import SideBar from './SideBar'
import { Input } from "../../Components/UsedInputs";

const Password = () => {
  return (
    <SideBar>
    <div className="flex flex-col gap-6 ">
      <h2 className="text-xl font-bold">Perfil</h2>

    {/*old password*/}
      <Input
        label="Antigua Contraseña "
        placeholder="********"
        type={"password"}
        bg={true}
      />

      {/*new password*/}
      <Input
        label="Nueva Contraseña "
        placeholder="********"
        type={"password"}
        bg={true}
      />
          {/*confirm password*/}
      <Input
        label="Confirmar Contraseña "
        placeholder="********"
        type={"password"}
        bg={true}
      />

      {/*update password*/}
      <div className="flex justify-end items-center my-4">
        {/*update password button*/}
        <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
          Cambiar Contraseña
        </button>
      </div>
    </div>
  </SideBar>
  )
}

export default Password