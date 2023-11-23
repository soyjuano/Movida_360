import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  luisysofi,
  joseycaro,
  tripguide,
  starwars,
  camiygiorgian,
  graduacion,
  threejs,
  camera_icon,
  video_icon,
  qr_icon,
  edicion_icon,
  tool_icon,
  share_icon,
  working_icon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Quienes Somos",
  },
  {
    id: "work",
    title: "Viví la experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Cámara de última generación",
    icon: camera_icon,
  },
  {
    title: "Videos totalmente personalizados",
    icon: video_icon,
  },
  {
    title: "Ediciones en el momento",
    icon: edicion_icon,
  },
  {
    title: "Código QR para compartir",
    icon: qr_icon,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Armado ",
    company_name: "¿Cómo funciona?",
    icon: tool_icon,
    iconBg: "purple",
    /* date: "March 2020 - April 2021", */
    points: [
      "Colocamos la plataforma 360 y las columnas de iluminación.",
      "Damos la bienvenida a los asistentes y les ofrecemos complementos, pistolas lanzadoras de billetes y efectos de burbujas.",
      "Los invitados se podrán montar en la plataforma giratoria y hacer sus mejores poses.",
      "¡Es el momento perfecto para liberar toda su imaginación!.",
    ],
  },
  {
    title: "Grabación",
    company_name: "Video 360",
    icon: camera_icon,
    iconBg: "purple",
    /* date: "Jan 2021 - Feb 2022", */
    points: [
      "La filmación se realiza mediante una cámara que rota alrededor de la tarima.",
      "Los asistentes disfrutan de la música, lanzan confeti y burbujas en el entorno.",
      "Podrás personalizar el video eligiendo la velocidad, los tramos e incluyendo el logotipo de tu empresa donde quieras.",
      "Videos de alta definición con cámara de última generación.",
      "Luego de grabar el video podrán visualizarlo y enviarlo vía email.",
    ],
  },
  {
    title: "Souvenirs",
    company_name: "Compartir el contenido",
    icon: share_icon,
    iconBg: "purple",
   /*  date: "Jan 2022 - Jan 2023", */
    points: [
      "Una vez que el video se proyecta en la pantalla, se muestra un código QR.",
      "Los asistentes escanean el código y obtienen acceso a un archivo de vídeo, que podrán descargar directamente a sus teléfonos móviles al instante.",
      "¡Desde nuestra pantalla hasta tu correo electrónico! Será sencillo, entretenido y único, para que tu evento permanezca inolvidable.",
      "Al concluir la fiesta, el archivo se entrega al encargado/a del evento.",
    ],
  },
  {
    title: "Movida 360",
    company_name: "¿Por qué con nosotros?",
    icon: working_icon,
    iconBg: "purple",
    /* date: "Jan 2023 - Present", */
    points: [
      "Utilizamos software y equipo de alta calidad que nos permite brindar un excelente servicio.",
      "Aprovechamos al máximo las capacidades de la cámara 360 junto con la magia del efecto Slow Motion para obtener un resultado genial.",
      "Nos esmeramos en cuidar cada detalle y resaltar la estética al máximo, creando así una experiencia única y memorable en cada aspecto.",
      "Realizamos la edición de los videos en tiempo real, permitiendo que tus invitados los descarguen instantáneamente durante el evento para una experiencia aún más inolvidable.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fiesta con Luis y Sofi",
    description:
      "Gracias por elegir nuestro servicio, la fiesta fué muy divertida y salió genial. ¡Felicitaciones!",
    tags: [
      {
        name: "diversión",
        color: "blue-text-gradient",
      },
      {
        name: "360",
        color: "green-text-gradient",
      },
    ],
    image: luisysofi,
    source_code_link: "https://www.instagram.com/reel/Cr_iT9SJMkG/?igshid=NmJiYWZiY2E0Mg==",
  },
  {
    name: "Casamiento: Jose y Caro",
    description:
      "Hace como Jose y Caro. ¡Dale una vuelta divertida a tu fiesta con nuestras plataformas 360!",
    tags: [
      {
        name: "momentos",
        color: "blue-text-gradient",
      },
      {
        name: "amistad",
        color: "green-text-gradient",
      },
    ],
    image: joseycaro,
    source_code_link: "https://www.instagram.com/reel/ClzfOzuprYe/?igshid=NmJiYWZiY2E0Mg==",
  },
  {
    name: "Exhibición Promocional",
    description:
      "En esta ocasión nos acompañaron los personajes de Darth Vader y Stormtroopers!",
    tags: [
      {
        name: "starwars",
        color: "blue-text-gradient",
      },
      {
        name: "marketing",
        color: "green-text-gradient",
      },
    ],
    image: starwars,
    source_code_link: "https://www.instagram.com/reel/Cuiv3ElNzP1/?igshid=NmJiYWZiY2E0Mg==",
  },
  {
    name: "Fiesta de Graduación",
    description:
      "Capturamos cada momento, ¡registrando recuerdos únicos e inolvidables!",
    tags: [
      {
        name: "Fiesta",
        color: "blue-text-gradient",
      },
      {
        name: "recuerdos",
        color: "green-text-gradient",
      },
    ],
    image: graduacion,
    source_code_link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODgxODI2NjYzNzE5MjY2?story_media_id=2988427146774640548_53122987259&igshid=NmJiYWZiY2E0Mg==",
  },
];

export { services, technologies, experiences, testimonials, projects };
