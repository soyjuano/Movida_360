import React from "react";
import { arrow } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full px-10 py-5 flex justify-center items-center bg-primary">
        <div className="flex-col justify-center items-center z-20 text-secondary text-[14px] text-center">
          Copyright © 2023 Movida 360 - Todos los Derechos Reservados - Desarrollado por Juano
        
        </div>

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={arrow}
            alt="logo"
            className="w-14 h-14 object-contain mx-6 animate-bounce"
          />
        </Link>
      </div>
    </>
  );
};

export default Footer;