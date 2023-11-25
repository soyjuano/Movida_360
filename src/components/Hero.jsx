import { styles } from "../styles";
import camera360Full from "../assets/camera360Full.mp4";
import camera360 from "../assets/camera360.mp4";
import { isMobile, isTablet } from "react-device-detect";

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
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Dale un <span className='pink-text-gradient' /* 'text-[#915EFF]' */>giro</span> a tu Fiesta!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
            Alquiler de plataforma de video 360 para tu evento
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
