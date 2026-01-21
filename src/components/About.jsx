/**
 * Componente About - Sección "Sobre Mí"
 * Muestra información profesional y tecnologías principales
 */
function About() {
  // Lista de tecnologías principales con iconos
  const technologies = [
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Vue.js", icon: "fab fa-vuejs", color: "#4FC08D" },
    { name: "Node.js", icon: "fab fa-node", color: "#339933" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "Oracle SQL", icon: "fas fa-database", color: "#F80000" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
  ];

  return (
    <section id='about' className='about-section py-5'>
      <div className='container'>
        <div className='row'>
          {/* Título de la sección */}
          <div className='col-12 text-center mb-5' data-aos='fade-up'>
            <h2 className='section-title'>Sobre Mí</h2>
            <div className='section-divider'></div>
          </div>
        </div>

        <div className='row align-items-center justify-content-center'>
          {/* Columna única: Información */}
          <div className='col-lg-10' data-aos='fade-up'>
            <div className='about-content'>
              {/* Resumen profesional */}
              <h3 className='mb-4'>
                Desarrollador Full Stack | Analista Programador
              </h3>
              <p className='lead mb-4'>
                Desarrollador Full Stack con experiencia en la creación de
                aplicaciones web modernas utilizando React, Vue.js, Node.js y
                bases de datos PostgreSQL y Oracle. Formado en Desafío Latam y
                cursando 3° semestre de Analista Programador en INACAP.
              </p>

              <p className='mb-4'>
                Con 19 años de experiencia en el ámbito militar, donde fortalecí
                habilidades como liderazgo, disciplina, trabajo en equipo y
                trabajo bajo presión, que hoy aplico en el desarrollo de
                software y en la gestión de proyectos tecnológicos.
              </p>

              {/* Datos destacados */}
              <div className='row mb-4'>
                <div className='col-md-6 mb-3'>
                  <div className='about-info-item'>
                    <i className='fas fa-laptop-code text-primary me-2'></i>
                    <strong>Especialización:</strong> Full Stack
                  </div>
                </div>
                <div className='col-md-6 mb-3'>
                  <div className='about-info-item'>
                    <i className='fas fa-map-marker-alt text-primary me-2'></i>
                    <strong>Ubicación:</strong> Santiago, Chile
                  </div>
                </div>
                <div className='col-md-6 mb-3'>
                  <div className='about-info-item'>
                    <i className='fas fa-graduation-cap text-primary me-2'></i>
                    <strong>Educación:</strong> Analista Programador (INACAP)
                  </div>
                </div>
                <div className='col-md-6 mb-3'>
                  <div className='about-info-item'>
                    <i className='fas fa-briefcase text-primary me-2'></i>
                    <strong>Experiencia:</strong> Full Stack Developer
                  </div>
                </div>
              </div>

              {/* Tecnologías principales */}
              <h4 className='mb-3'>Tecnologías Principales</h4>
              <div className='technologies-grid'>
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className='tech-badge'
                    data-aos='zoom-in'
                    data-aos-delay={index * 50}
                  >
                    <i className={tech.icon} style={{ color: tech.color }}></i>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Botón de descarga CV */}
              <div className='mt-4'>
                <a href='/cv.pdf' className='btn btn-primary' download>
                  <i className='fas fa-download me-2'></i>
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
