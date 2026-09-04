import proyecto1 from "../assets/proyecto1.png";
import proyecto2 from "../assets/proyecto2.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto4 from "../assets/proyecto4.png";
import proyecto5 from "../assets/proyecto5.png";

export const PROJECTS_DATA = [
  {
    id: 5,
    title: "Mini CRM con IA Assistant",
    category: "Full-Stack",
    description:
      "Sistema de seguimiento comercial full-stack con asistente de IA integrado (Google Gemini 3.1 Flash Lite) mediante Function Calling y RAG. Cuenta con autenticación JWT, sincronización en tiempo real vía WebSockets (Socket.io), métricas interactivas y convertidor de divisas.",
    image: proyecto5,
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Gemini IA", "Socket.io", "JWT", "Docker"],
    demoUrl: "https://crm-ia-assistant.netlify.app/",
    repoUrl: "https://github.com/rasoh2",
    featured: true,
  },
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
    id: 4,
    title: "Web Chile Pro",
    category: "React",
    description:
      "Herramienta web para generar cotizaciones al instante. Elegí React para procesar cálculos matemáticos en vivo y controlar formularios dinámicos a través de estados reactivos. Cuenta con un diseño totalmente responsivo.",
    image: proyecto4,
    technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://webchilepro.netlify.app/",
    repoUrl: "https://github.com/rasoh2/webChilePro",
    featured: false,
  },
  {
    id: 3,
    title: "PokeAPI Explorer",
    category: "React",
    description:
      "Buscador de Pokémon que consume la PokeAPI pública. Desarrollado en React organizando la interfaz en componentes independientes y modulares. Esto me permitió controlar de manera limpia los estados de búsqueda y filtros dinámicos.",
    image: proyecto3,
    technologies: ["React", "Bootstrap", "JavaScript", "REST API", "CSS"],
    demoUrl: "https://pokeapih2.netlify.app/",
    repoUrl: "https://github.com/rasoh2/PokeApi",
    featured: false,
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
];

export const FILTER_CATEGORIES = ["Todos", "React", "Vue.js", "Full-Stack"];
