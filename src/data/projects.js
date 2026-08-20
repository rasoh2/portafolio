import proyecto1 from "../assets/proyecto1.png";
import proyecto2 from "../assets/proyecto2.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto4 from "../assets/proyecto4.png";
import proyecto5 from "../assets/proyecto5.png";
import proyecto6 from "../assets/proyecto6.png";

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "AlkeWallet",
    category: "Full-Stack",
    description:
      "Billetera digital full-stack. Desarrollé una API REST con Node.js, Express y PostgreSQL para transacciones seguras, y modernicé el frontend con React y TypeScript para ofrecer una interfaz SPA responsiva, fluida y modular.",
    image: proyecto1,
    technologies: ["React", "TypeScript", "Express", "Sequelize", "PostgreSQL", "Node.js"],
    demoUrl: "https://alke-wallet-front.netlify.app/",
    repoUrl: "https://github.com/rasoh2/alke-wallet",
    featured: true,
  },
  {
    id: 2,
    title: "Contador con Vue.js",
    category: "Vue.js",
    description:
      "Aplicación interactiva para administrar listas. Usé Vue.js para aprovechar su enlace de datos bidireccional y simplificar el manejo de las listas en tiempo real. La interfaz visual está estructurada de forma sencilla con componentes de Bootstrap.",
    image: proyecto2,
    technologies: ["Vue.js", "Bootstrap", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://contador1-vuejs.netlify.app/",
    repoUrl: "https://github.com/rasoh2/first-proyect-vue",
    featured: false,
  },
  {
    id: 3,
    title: "PokéAPI Explorer",
    category: "React",
    description:
      "Buscador de Pokémon que consume la PokéAPI pública. Desarrollado en React organizando la interfaz en componentes independientes y modulares. Esto me permitió controlar de manera limpia los estados de búsqueda y filtros dinámicos.",
    image: proyecto3,
    technologies: ["React", "Bootstrap", "JavaScript", "REST API", "CSS"],
    demoUrl: "https://pokeapih2.netlify.app/",
    repoUrl: "https://github.com/rasoh2/PokeApi",
    featured: true,
  },
  {
    id: 4,
    title: "Web Chile Pro",
    category: "React",
    description:
      "Herramienta web para generar cotizaciones al instante. Elegí React para procesar cálculos matemáticos en vivo y controlar formularios dinámicos a través de estados reactivos. Cuenta con un diseño totalmente responsivo.",
    image: proyecto4,
    technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://webchilepro.netlify.app/",
    repoUrl: "https://github.com/rasoh2/webChilePro",
    featured: true,
  },
  {
    id: 5,
    title: "To-Do List App",
    category: "React",
    description:
      "Organizador de tareas diarias con soporte CRUD (crear, leer, actualizar, borrar). Creado en React con hooks para el manejo de estados locales y almacenamiento persistente directamente en el navegador del usuario a través de localStorage.",
    image: proyecto5,
    technologies: ["React", "Bootstrap", "JavaScript", "CSS", "HTML"],
    demoUrl: "https://to-do-list-pro3.netlify.app/",
    repoUrl: "https://github.com/rasoh2/todolist",
    featured: false,
  },
  {
    id: 6,
    title: "MasterEasy Landing Page",
    category: "React",
    description:
      "Página de aterrizaje institucional para una empresa de servicios industriales. Desarrollada con React dividiendo cada sección del sitio en componentes limpios y reutilizables. Incluye estilos modernos y transiciones fluidas.",
    image: proyecto6,
    technologies: ["HTML", "CSS", "JavaScript", "React", "AOS"],
    demoUrl: "https://mastereasy.netlify.app/",
    repoUrl: "https://github.com/rasoh2",
    featured: true,
  },
];

export const FILTER_CATEGORIES = ["Todos", "React", "Vue.js", "Full-Stack"];
