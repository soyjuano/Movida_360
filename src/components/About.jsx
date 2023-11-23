import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-quaternary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className={`relative w-full min-h-min mx-auto text-center`}>
      <motion.div variants={textVariant()} >
      <p className= {styles.sectionSubText} >Movida 360</p>
        <h2 className={styles.sectionHeadText} >Creadores de recuerdos</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px] text-center'
      >
        ¡Convertimos tus momentos en recuerdos inolvidables que van más allá de las fotos! 
        Somos especialistas en hacer que tus fiestas sean memorables, ya sea una boda, un cumple, 
        una feria o un corporativo. ¡Nosotros estamos en todas!

        Con nuestra plataforma 360, tu evento se transforma en una experiencia única y súper divertida. 
        Capturamos todos los ángulos, todos los momentos épicos y todos los detalles que hacen que tu 
        celebración sea épica. ¡Te prometemos que tus recuerdos serán la envidia de todos!

        No importa el plan que tengas, estamos listos para convertirlo en algo inolvidable. 
        <span className='pink-text-gradient mb-10' /* 'text-[#915EFF]' */> ¡Dale un giro a tu fiesta con nosotros!</span>
       
        <p className={`${styles.heroSubText} mt-12 text-white-100 text-center`}>
            Por qué Elegirnos?
          </p>

      </motion.p>

       <div className='mt-14 flex flex-wrap gap-5 justify-evenly'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
