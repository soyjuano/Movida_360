import React from "react";
import { Tilt }  from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { insta } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-quaternary p-5 rounded-2xl sm:w-[250px] w-full border border-y-teal-600 text-center'
      >
        <div className='relative w-full h-[200px] '>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
           <div className='absolute bottom-0 right-0 flex justify-end m-3 card-img_hover'> {/*  ICONO INSTA */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={insta}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
         </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 justify-center'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
            
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>Nuestros Trabajos</p>
        <h2 className={`${styles.sectionHeadText} text-center `}>Presentaciones</h2>
      </motion.div>

      <div className='w-full flex justify-center items-center '>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          ¡Echa un vistazo a algunas de nuestras presentaciones más destacadas! 
          En cada evento, dejamos a nuestros clientes boquiabiertos con experiencias 
          visuales inigualables. Desde bodas íntimas hasta fiestas corporativas de 
          gran envergadura, hemos creado momentos memorables. Nuestra plataforma 360 
          permite sumergir a los asistentes en un universo de colores y emociones. 
          Las reacciones positivas de nuestros clientes nos impulsan a superar 
          expectativas en cada presentación. ¡Confía en nosotros para transformar 
          tu evento en una experiencia única e inolvidable!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
