import React from "react";
import SideBar from "./SideBar";
import Uploder from "../../Components/Uploder";
import { Input } from "../../Components/UsedInputs";

const Profile = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6 ">
        <h2 className="text-xl font-bold">Perfil</h2>
        <Uploder />
        {/*name input*/}
        <Input label="Nombre" placeholder="Usuario" type={"text"} bg={true} />
        {/*email input*/}
        <Input
          label="Email"
          placeholder="usuario@gmail.com"
          type={"email"}
          bg={true}
        />

        {/*delete account button*/}
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center  my-4">
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Eliminar Cuenta
          </button>
          {/*update account button*/}
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Actualizar Perfil
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Profile;
