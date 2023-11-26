import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { insta } from "../assets";
import { whatsapp } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       'service_vi3amoy',
        'template_y2l29tg',
        {
          from_name: form.name,
          to_name: "Movida 360",
          from_email: form.email,
          to_email: "",
          message: form.message,
        },
        'GbUbqfawogJQMMRcQ',
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Gracias. Te responderemos a la brevedad.", {
            className: 'bg-black-100 text-white',
            position: toast.POSITION.BOTTOM_RIGHT,
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Ahh, algo salió mal 😢. Por favor intenta nuevamente.", {
            className: 'bg-red-500 text-white',
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Esperamos tu consulta</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>
        <div className='flex items-center pt-2'>
  <a
    href='tel:+59897475211'
    target='_blank'
    rel='noopener noreferrer'
    className='w-8 h-8 object-contain'
  >
    <img
      src={whatsapp}
      alt='whatsapp'
      className='w-8 h-8 object-contain'
    />
  </a>
  <p className={`${styles.sectionSubText} ml-4 self-center`}>598 97475211</p>
</div>
        
        <div className='flex items-center pt-6'>
        <a
            href='https://www.instagram.com/movida.360/'
            target='_blank'
            rel='noopener noreferrer'
            className='w-7 h-7 object-contain'
          >
            <img
              src={insta}
              alt='instagram'
              className='w-7 h-7 object-contain'
            />
          </a>
      <p className={`${styles.sectionSubText} ml-4 self-center`}>@movida.360</p>
    </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              required
              onChange={handleChange}
              placeholder="Escribí tu nombre"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-y-teal-600 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Cual es tu email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-y-teal-600 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mensaje</span>
            <textarea
              rows={7}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='Escribí tu mensaje'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-y-teal-600 font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-quaternary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar 🚀"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
