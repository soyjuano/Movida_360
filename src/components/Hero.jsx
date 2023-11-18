import { motion } from "framer-motion";

import { styles } from "../styles";
import camera360Full from "../assets/camera360Full.mp4";
import camera360 from "../assets/camera360.mp4";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      {/* Video para pantallas grandes (mayores o iguales a lg) */}
      <video src={camera360Full} autoPlay loop muted className="video-bg hidden lg:block w-full h-full object-cover" />

      {/* Video para pantallas pequeñas (menores a lg) */}
      <video src={camera360} autoPlay loop muted className="video-bg lg:hidden w-full h-full object-cover" />

      <div
        className={`absolute inset-x-0 bottom-[80px] max-w-full mx-auto flex  gap-5 flex-col items-center justify-center`}
      >
       {/* -------BARRA ILUSTRATIVA VERTICAL----------- */}

        {/*  <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Dale un <span className='pink-text-gradient' /* 'text-[#915EFF]' */>giro</span> a tu Fiesta!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
            Plataforma de video 360 para tu evento
          </p>
        </div>
      </div>

      {/*  <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}

    </section>
  );
};

export default Hero;
