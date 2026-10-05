import proyecto1 from "../assets/proyecto1.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto4 from "../assets/proyecto4.png";
import proyecto5 from "../assets/proyecto5.png";

export const PROJECTS_DATA = [
  {
    id: 5,
    title: "CRM Empresarial con IA Dual & Dashboard en Tiempo Real",
    category: "Full-Stack",
    description: "Sistema de seguimiento comercial full-stack con motor de IA Multi-Proveedor de Alta Disponibilidad (Groq Cloud LPU + Google Gemini). Diseñé una arquitectura con Enrutamiento por Intención (Intent Routing) que reduce el consumo de tokens en un 70% e inferencia en tiempo real (<1s). Cuenta con sincronización instantánea vía WebSockets (Socket.io), autenticación JWT, ticker financiero multidivisas en vivo (USD, CLP, EUR, UF, BTC) y diseño Mobile-First 100% responsivo.",
    image: proyecto5,
    technologies: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "IA Dual (Groq + Gemini)",
      "JWT",
      "Docker"
    ],
    highlights: [
      "Arquitectura de IA Dual con failover automático: Groq LPU + Google Gemini Backup",
      "Enrutamiento por intención con 70% de reducción en tokens y RAG con 8 herramientas",
      "Sincronización en tiempo real vía WebSockets (Socket.io) y queries SQL optimizadas con ENUMs",
      "Dashboard ejecutivo de KPIs con ticker multidivisas y exportación de reportes a CSV"
    ],
    demoUrl: "https://crm-ia-assistant.netlify.app/",
    repoUrl: "https://github.com/rasoh2",
    featured: true,
  },
  {
    id: 1,
    title: "AlkeWallet — Billetera Digital & Core Transaccional",
    category: "Full-Stack",
    description:
      "Plataforma financiera web SPA con arquitectura modular y tipado estático estricto en React y TypeScript. API REST en Node.js y Express con persistencia transaccional atómica en PostgreSQL mediante Sequelize ORM, incorporando control estricto de saldo y prevención de descubierto. Autenticación robusta con JWT y hash Bcrypt, agenda de contactos, historial transaccional, migración de infraestructura cloud para alta disponibilidad y pruebas unitarias de validación backend.",
    image: proyecto1,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Testing Unitario"
    ],
    highlights: [
      "Arquitectura modular con tipado estático estricto en React + TypeScript",
      "Transacciones financieras atómicas y persistencia en PostgreSQL con Sequelize",
      "Migración y optimización de infraestructura cloud para alta disponibilidad",
      "Pruebas unitarias de validación para servicios backend y lógica transaccional"
    ],
    demoUrl: "https://alke-wallet-front.netlify.app/",
    repoUrl: "https://github.com/rasoh2/alke-wallet",
    featured: true,
  },
  {
    id: 3,
    title: "PokéDex — Motor de Batalla, Meta Analytics y más",
    category: "Full-Stack",
    description:
      "Sistema Full Stack de analítica y simulación táctica en tiempo real (Node.js + Express + MongoDB). Motor de batalla con cálculo de efectividad y log de combates, Team Builder persistente con matriz táctica para 18 tipos, agregaciones en MongoDB para análisis de Meta (% WinRate y popularidad) y arquitectura resiliente con fallback automático de base de datos.",
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
    highlights: [
      "Motor de batalla y cálculo táctico en tiempo real",
      "Pipeline de agregaciones complejas en MongoDB para Meta Analytics",
      "Resiliencia de base de datos con sistema de fallback automático",
      "Diseño de interfaz fluida con Framer Motion y capacidades PWA"
    ],
    demoUrl: "https://pokeapih2.netlify.app/",
    repoUrl: "https://github.com/rasoh2/PokeApi",
    featured: false,
  },
  {
    id: 4,
    title: "Web Chile Pro — Motor de Cotizaciones Dinámico",
    category: "React",
    description:
      "Herramienta web interactiva para cotizaciones comerciales y cálculo dinámico de presupuestos al instante. Procesamiento reactivo en tiempo real con estado predecible en React, formularios dinámicos y arquitectura responsiva.",
    image: proyecto4,
    technologies: ["React", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Cálculo matemático en tiempo real con renderizado reactivo",
      "Formularios dinámicos controlados por estado",
      "Diseño responsivo optimizado para dispositivos móviles"
    ],
    demoUrl: "https://webchilepro.netlify.app/",
    repoUrl: "https://github.com/rasoh2/webChilePro",
    featured: false,
  },
];


export const FILTER_CATEGORIES = ["Todos", "Full-Stack", "React"];

