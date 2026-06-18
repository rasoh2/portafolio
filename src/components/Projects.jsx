import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importación de las imágenes locales existentes
import proyecto1 from "../assets/proyecto1.png";
import proyecto2 from "../assets/proyecto2.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto4 from "../assets/proyecto4.png";
import proyecto5 from "../assets/proyecto5.png";
import proyecto6 from "../assets/proyecto6.png";

/**
 * Componente Projects - Galería interactiva con filtrado en tiempo real
 * - Filtros dinámicos por tecnología / stack sin recarga de página.
 * - Reorganización animada de grillas con Framer Motion (layout).
 * - Efectos hover responsivos y accesos rápidos a demos/código.
 */
function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Array de proyectos con categorización para el filtrado dinámico
  const projects = [
    {
      id: 1,
      title: "AlkeWallet",
      category: "Full-Stack",
      description:
        "Billetera digital completa. Construí el backend con Node.js y Express usando arquitectura MVC para ordenar la lógica de negocio y las consultas. Para la interfaz usé jQuery y Bootstrap, logrando vistas dinámicas y adaptables a móviles de forma rápida.",
      image: proyecto1,
      technologies: ["jQuery", "Bootstrap", "Express.js", "Node.js", "PostgreSQL"],
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

  // Categorías únicas de filtro
  const filterCategories = ["Todos", "React", "Vue.js", "Full-Stack"];

  // Filtrado de proyectos en tiempo real
  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id='projects' className='projects-section py-5'>
      <div className='container'>
        
        {/* Título de la sección */}
        <div className='row'>
          <div className='col-12 text-center mb-5'>
            <motion.h2 
              className='section-title'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Proyectos Destacados
            </motion.h2>
            <div className='section-divider'></div>
            <p className='section-description mt-3'>
              Algunos de mis trabajos más representativos tanto en frontend como en backend
            </p>
          </div>
        </div>

        {/* Botones de Filtrado Dinámico */}
        <div className='row mb-4'>
          <div className='col-12'>
            <div className='filter-container'>
              {filterCategories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de proyectos animado con Framer Motion (layout) */}
        <motion.div 
          className='row g-4'
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='col-lg-4 col-md-6'
              >
                <div className='project-card h-100 d-flex flex-column'>
                  
                  {/* Badge de destacado */}
                  {project.featured && (
                    <div className='project-badge'>
                      <i className='fas fa-star me-1'></i>
                      Destacado
                    </div>
                  )}

                  {/* Imagen y overlay */}
                  <div className='project-image'>
                    <img
                      src={project.image}
                      alt={`Miniatura del proyecto ${project.title}`}
                      loading="lazy"
                    />
                    <div className='project-overlay'>
                      <div className='project-links'>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-light'
                            title='Ver demo en vivo'
                          >
                            <i className='fas fa-external-link-alt text-dark'></i>
                          </a>
                        )}
                        <a
                          href={project.repoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-light'
                          title='Ver código en GitHub'
                        >
                          <i className='fab fa-github text-dark'></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className='project-content d-flex flex-column flex-grow-1'>
                    <h3 className='project-title'>{project.title}</h3>
                    <p className='project-description flex-grow-1'>{project.description}</p>

                    {/* Tags de tecnologías */}
                    <div className='project-technologies mt-auto'>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className='tech-tag'>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botones inferiores */}
                    <div className='project-actions mt-3 pt-2'>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-primary btn-sm me-2'
                        >
                          <i className='fas fa-eye me-1'></i>
                          Demo en Vivo
                        </a>
                      )}
                      <a
                        href={project.repoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-outline-primary btn-sm'
                      >
                        <i className='fab fa-github me-1'></i>
                        Código
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Botón Call To Action final */}
        <div className='row mt-5 pt-3'>
          <div className='col-12 text-center'>
            <motion.a
              href='https://github.com/rasoh2'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline-primary btn-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className='fab fa-github me-2'></i>
              Ver Todos los Proyectos en GitHub
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
