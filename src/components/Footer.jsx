import React from "react";
import { logo } from "../assets";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Footer = () => {
    return (
      <>
       <div className="w-full px-20 py-5 flex justify-center items-center bg-primary " >
       <p className= "text-center z-20 text-secondary text-[14px]"> 
       Copyright © 2023 Movida 360 - Todos los Derechos Reservados - Politica de Privacidad - Desarrollado por Juano</p>
      
       <img src={logo} alt='logo' className='w-16 h-16 object-contain ml-10' />

       </div>
     </>
    );
  };

export default Footer;