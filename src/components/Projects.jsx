/**
 * Componente Projects - Sección de proyectos destacados
 * Muestra cards con información de cada proyecto
 */
function Projects() {
  // Array de proyectos (puedes agregar más o modificar estos)
  const projects = [
    {
      id: 1,
      title: "AlkeWallet",
      description:
        "Billetera digital con simulación de transferencias, depósitos y gestión de saldo en tiempo real.",
      image:
        "https://via.placeholder.com/600x400/6C63FF/FFFFFF?text=AlkeWallet",
      technologies: ["jQuery", "Bootstrap", "JavaScript", "HTML", "CSS"],
      demoUrl: "https://alkewallet.netlify.app/menu.html",
      repoUrl: "https://github.com/rasoh2/alke-wallet",
      featured: true,
    },
    {
      id: 2,
      title: "Contador con Vue.js",
      description:
        "Aplicación interactiva que almacena en una lista los números seleccionados con contador dinámico.",
      image:
        "https://via.placeholder.com/600x400/42A5F5/FFFFFF?text=Vue+Counter",
      technologies: ["Vue.js", "Bootstrap", "JavaScript", "HTML", "CSS"],
      demoUrl: "https://vuejsdemos.netlify.app/",
      repoUrl: "https://github.com/rasoh2/first-proyect-vue",
      featured: true,
    },
    {
      id: 3,
      title: "PokéAPI Explorer",
      description:
        "Explorador de Pokémon con consumo de API externa, búsqueda y visualización detallada de información.",
      image: "https://via.placeholder.com/600x400/66BB6A/FFFFFF?text=PokeAPI",
      technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
      demoUrl: "https://pokeapih2.netlify.app/",
      repoUrl: "https://github.com/rasoh2/PokeApi",
      featured: true,
    },
    {
      id: 4,
      title: "Web Chile Pro",
      description:
        "Página web profesional para generar presupuestos personalizados de desarrollo de sitios web.",
      image:
        "https://via.placeholder.com/600x400/FFA726/FFFFFF?text=Web+Chile+Pro",
      technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
      demoUrl: "https://app.netlify.com/projects/webchilepro/overview",
      repoUrl: "https://github.com/rasoh2/webChilePro",
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
