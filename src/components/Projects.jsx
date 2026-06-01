/**
 * Componente Projects - Sección de proyectos destacados
 * Muestra cards con información de cada proyecto
 */

import proyecto1 from "../assets/proyecto1.png";
import proyecto2 from "../assets/proyecto2.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto4 from "../assets/proyecto4.png";
import proyecto5 from "../assets/proyecto5.png";
import proyecto6 from "../assets/proyecto6.png";

function Projects() {
  // Array de proyectos (puedes agregar más o modificar estos)
  const projects = [
    {
      id: 1,
      title: "AlkeWallet",
      description:
        "Billetera digital full-stack. Desarrollada con Express.js bajo el patrón MVC asegurando una arquitectura backend escalable. En el frontend se utilizó jQuery y Bootstrap para agilizar la manipulación directa del DOM y maquetar interfaces responsivas, priorizando la robustez de las operaciones financieras.",
      image: proyecto1,
      technologies: [
        "jQuery",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "CSS",
        "Express",
      ],
      demoUrl: "https://alke-wallet-front.netlify.app/",
      repoUrl: "https://github.com/rasoh2/alke-wallet",
      featured: true,
    },
    {
      id: 2,
      title: "Contador con Vue.js",
      description:
        "Sistema reactivo para gestión de listas. Implementado con Vue.js para aprovechar su sistema de reactividad profunda (two-way binding), lo que simplificó la lógica de manipulación dinámica de arrays. Se integró Bootstrap para componer la UI de manera ágil sin escribir CSS extenso.",
      image: proyecto2,
      technologies: ["Vue.js", "Bootstrap", "JavaScript", "HTML", "CSS"],
      demoUrl: "https://contador1-vuejs.netlify.app/",
      repoUrl: "https://github.com/rasoh2/first-proyect-vue",
      featured: true,
    },
    {
      id: 3,
      title: "PokéAPI Explorer",
      description:
        "Explorador interactivo multivariables que consume una API RESTful. Se construyó en React para manejar el complejo estado de las búsquedas y filtros dinámicos mediante una arquitectura orientada a componentes modulares, ofreciendo una experiencia veloz sin recargas de página.",
      image: proyecto3,
      technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
      demoUrl: "https://pokeapih2.netlify.app/",
      repoUrl: "https://github.com/rasoh2/PokeApi",
      featured: true,
    },
    {
      id: 4,
      title: "Web Chile Pro",
      description:
        "Plataforma SaaS para cotizaciones dinámicas. Se decidió por React para resolver la necesidad de cálculos automáticos en tiempo real y manejo de formularios enriquecidos mediante estados complejos. La capa de presentación se confió a Bootstrap para garantizar un comportamiento 100% responsive.",
      image: proyecto4,
      technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
      demoUrl: "https://webchilepro.netlify.app/",
      repoUrl: "https://github.com/rasoh2/webChilePro",
      featured: true,
    },
    {
      id: 5,
      title: "To-Do List App",
      description:
        "Gestor de tareas avanzado con funcionalidades CRUD. Desarrollado con React haciendo uso intensivo de Hooks para manejar el ciclo de vida, estado global temporal y persistencia de datos. React demostró ser ideal para optimizar el re-renderizado en filtrados y ordenamiento de la lista.",
      image: proyecto5,
      technologies: ["React", "Bootstrap", "JavaScript", "CSS", "HTML"],
      demoUrl: "https://to-do-list-pro3.netlify.app/",
      repoUrl: "https://github.com/rasoh2/todolist",
      featured: false,
    },
    {
      id: 6,
      title: "MasterEasy Landing Page",
      description:
        "Landing page corporativa orientada a la conversión de leads (servicios industriales). Arquitecturada con React para abstraer secciones de la página como componentes independientes. Se aplicaron estilos modernos y estrategias responsivas para lograr una interfaz confiable que transmite profesionalismo.",
      image: proyecto6,
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      demoUrl: "https://mastereasy.netlify.app/",
      repoUrl: "https://github.com/rasoh2", // Cambiar por el link a tu repo
      featured: true,
    },
  ];

  return (
    <section id='projects' className='projects-section py-5'>
      <div className='container'>
        {/* Título de la sección */}
        <div className='row'>
          <div className='col-12 text-center mb-5' data-aos='fade-up'>
            <h2 className='section-title'>Proyectos Destacados</h2>
            <div className='section-divider'></div>
            <p className='section-description mt-3'>
              Una selección de mis trabajos más recientes y proyectos en los que
              he trabajado
            </p>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className='row g-4'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div className='project-card h-100'>
                {/* Etiqueta de destacado */}
                {project.featured && (
                  <div className='project-badge'>
                    <i className='fas fa-star me-1'></i>
                    Destacado
                  </div>
                )}

                {/* Imagen del proyecto */}
                <div className='project-image'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='img-fluid'
                  />
                  <div className='project-overlay'>
                    <div className='project-links'>
                      {/* Botón de demo (solo si existe URL) */}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='btn btn-light btn-sm me-2'
                          title='Ver demo en vivo'
                        >
                          <i className='fas fa-external-link-alt'></i>
                        </a>
                      )}
                      {/* Botón de repositorio */}
                      <a
                        href={project.repoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-light btn-sm'
                        title='Ver código en GitHub'
                      >
                        <i className='fab fa-github'></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contenido de la card */}
                <div className='project-content'>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-description'>{project.description}</p>

                  {/* Tecnologías utilizadas */}
                  <div className='project-technologies'>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className='tech-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className='project-actions mt-3'>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-sm me-2'
                      >
                        <i className='fas fa-eye me-1'></i>
                        Ver Demo
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-outline-primary btn-sm'
                    >
                      <i className='fab fa-github me-1'></i>
                      Repositorio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más proyectos */}
        <div className='row mt-5'>
          <div className='col-12 text-center' data-aos='fade-up'>
            <a
              href='https://github.com/rasoh2'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline-primary btn-lg'
            >
              <i className='fab fa-github me-2'></i>
              Ver Todos los Proyectos en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
