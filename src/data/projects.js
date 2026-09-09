import proyecto1 from "../assets/proyecto1.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto4 from "../assets/proyecto4.png";
import proyecto5 from "../assets/proyecto5.png";

export const PROJECTS_DATA = [
  {
    id: 5,
    title: "Mini CRM con IA Assistant",
    category: "Full-Stack",
    description:
      "Sistema de seguimiento comercial full-stack con motor de IA Multi-Proveedor de Alta Disponibilidad (Groq Cloud LPU + Google Gemini). Diseñé una arquitectura con Enrutamiento por Intención (Intent Routing) que reduce el consumo de tokens en un 70% e inferencia en tiempo real (<1s). Cuenta con sincronización instantánea vía WebSockets (Socket.io), autenticación JWT, ticker financiero multidivisas en vivo (USD, CLP, EUR, UF, BTC) y diseño Mobile-First 100% responsivo.",
    image: proyecto5,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Groq IA",
      "Gemini IA",
      "Socket.io",
      "JWT",
      "Docker"
    ],
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
    id: 3,
    title: "PokéDex con Arena de Batalla & Analytics",
    category: "Full-Stack",
    description:
      "Aplicación Fullstack profesional (Node.js + Express + MongoDB). Incluye Arena de Batalla táctica en tiempo real con motor de tipos y log de combates, Team Builder persistente con matriz táctica (18 tipos), Meta Analytics mediante agregaciones MongoDB (% WinRate, popularidad), Poké-Quiz con leaderboard en DB, Framer Motion, PWA y resiliencia de DB con fallback automático.",
    image: proyecto3,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Vite",
      "Framer Motion",
      "PWA"
    ],
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
    featured: false,
  },
];

export const FILTER_CATEGORIES = ["Todos", "React", "Full-Stack"];
