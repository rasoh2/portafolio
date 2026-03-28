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
    { name: "Express", icon: "fas fa-server", color: "#000000" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
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
                Desarrollador Full Stack especializado en arquitectura de
                aplicaciones escalables. Con 19 años de experiencia en entornos
                de alta exigencia (Fuerzas Armadas), aporto disciplina,
                resolución de problemas críticos y trabajo bajo presión.
                Actualizado en React, Vue.js, Node.js/Express y bases de datos
                relacionales (PostgreSQL) y NoSQL (MongoDB).
              </p>

              <p className='mb-4'>
                Desde 2023, transición profesional planificada hacia desarrollo
                de software con formación en Desafío Latam e INACAP (Analista
                Programador). Mi background militar me permite gestionar
                jerarquías de prioridades, liderar equipos bajo presión y
                garantizar integridad de procesos. Aplico principios de
                arquitectura limpia, escalabilidad y eficiencia en cada
                proyecto.
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
                    <i className='fas fa-medal text-primary me-2'></i>
                    <strong>Trayectoria:</strong> 19 años Fuerzas Armadas + Full
                    Stack Dev
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
                <a
                  href='/cv_sebastian_ortega.pdf'
                  className='btn btn-primary'
                  download
                >
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
