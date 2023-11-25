import { styles } from "../styles";
import camera360Full from "../assets/camera360Full.mp4";
import camera360 from "../assets/camera360.mp4";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {isMobileOrTablet ? (
        <video src={camera360} autoPlay loop muted className="video-bg w-full h-full object-cover" />
      ) : (
        <video src={camera360Full} autoPlay loop muted className="video-bg w-full h-full object-cover" />
      )}

      <div
        className={`absolute inset-x-0 bottom-[80px] max-w-full mx-auto flex gap-5 flex-col items-center justify-center`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Dale un <span className="pink-text-gradient">giro</span> a tu Fiesta!
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