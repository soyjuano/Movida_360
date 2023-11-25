import React from "react";
import { arrow } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <>
       <div className="w-full px-20 py-5 flex justify-center items-center bg-primary " >
        
       <p className= "text-center z-20 text-secondary text-[14px]"> 
       Copyright © 2023 Movida 360 - Todos los Derechos Reservados - Politica de Privacidad - Desarrollado por Juano</p>
      <Link
      to='/'
      className='flex items-center gap-2'
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <img src={arrow} alt='logo' className='w-16 h-16 object-contain ml-10 p-1 animate-bounce' />
      
      </Link>
 
       </div>
     </>
    );
  };

export default Footer;