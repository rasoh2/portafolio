import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Componente About - Sección "Sobre Mí" con Línea de Tiempo Interactiva
 * - Muestra la biografía y una línea de tiempo interactiva (expandible al hacer clic).
 * - Resalta la transición de Sebastian de las Fuerzas Armadas (19 años de servicio) al desarrollo de software.
 * - Animado con Framer Motion (con viewport triggers).
 */
function About() {
  const [activeTimeline, setActiveTimeline] = useState(null);

  // Lista de hitos de la línea de tiempo interactiva
  const timelineData = [
    {
      id: 1,
      date: "2004 - 2023",
      title: "Trayectoria en Fuerzas Armadas",
      subtitle: "Liderazgo, Gestión de Equipos y Operaciones Críticas",
      description: "19 años de servicio activo en entornos de alta exigencia, forjando resiliencia, disciplina y toma de decisiones en situaciones críticas.",
      details: [
        "Liderazgo de personal bajo ambientes de alta presión.",
        "Planificación estratégica, gestión logística y administración de prioridades.",
        "Automatización de procesos en Excel para el inventario de bodega de pesticidas.",
        "Valores de lealtad, adaptabilidad inmediata y estricta integridad de procesos."
      ]
    },
    {
      id: 2,
      date: "2023",
      title: "Transición Estratégica a la Tecnología",
      subtitle: "Bootcamp Full Stack JavaScript - Desafío Latam",
      description: "Formación intensiva de más de 600 horas enfocada en el desarrollo ágil de aplicaciones utilizando el ecosistema moderno de JavaScript.",
      details: [
        "Arquitectura frontend reactiva utilizando React.js y Bootstrap.",
        "Modelamiento de bases de datos relacionales PostgreSQL y NoSQL MongoDB.",
        "Construcción de APIs RESTful con Node.js y Express.js aplicando principios MVC."
      ]
    },
    {
      id: 3,
      date: "2024 - Presente",
      title: "Consolidación Académica e Ingeniería",
      subtitle: "Analista Programador - INACAP",
      description: "Profundización formal de conocimientos en ingeniería de software, arquitectura de sistemas y optimización algorítmica.",
      details: [
        "Modelado de procesos con metodologías ágiles (Scrum) y DevOps.",
        "Diseño e implementación de patrones de arquitectura (MVC, Clean Architecture).",
        "Optimización de código enfocado en rendimiento, escalabilidad y buenas prácticas."
      ]
    },
    {
      id: 4,
      date: "Presente",
      title: "Desarrollador Full Stack",
      subtitle: "Construcción de Soluciones Web de Alto Rendimiento",
      description: "Desarrollo independiente de plataformas web y SaaS locales, integrando interfaces inmersivas y arquitecturas robustas.",
      details: [
        "Optimización web enfocada en métricas Lighthouse (Rendimiento y Accesibilidad >90%).",
        "Maquetación premium utilizando animaciones fluidas y microinteracciones de interfaz.",
        "Compromiso de entrega de código modular, testeado y mantenible."
      ]
    }
  ];

  // Tecnologías que se muestran en tarjetas hover de About
  const technologies = [
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "React", icon: "fab fa-react", color: "#00f2fe" },
    { name: "Vue.js", icon: "fab fa-vuejs", color: "#4FC08D" },
    { name: "Node.js", icon: "fab fa-node", color: "#339933" },
    { name: "Express", icon: "fas fa-server", color: "#8a2be2" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
    { name: "Oracle / MySQL", icon: "fas fa-database", color: "#00758F" },
    { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
    { name: "Google Antigravity", icon: "fas fa-robot", color: "#4285F4" },
    { name: "Git / GitHub", icon: "fab fa-git-alt", color: "#F05032" }
  ];

  // Alterna la visualización de los detalles expandidos de cada hito
  const toggleTimeline = (id) => {
    if (activeTimeline === id) {
      setActiveTimeline(null);
    } else {
      setActiveTimeline(id);
    }
  };

  return (
    <section id='about' className='about-section py-5'>
      <div className='container'>
        <div className='row'>
          {/* Título de sección */}
          <div className='col-12 text-center mb-5'>
            <motion.h2 
              className='section-title'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Sobre Mí
            </motion.h2>
            <div className='section-divider'></div>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            {/* Card Biografía Principal */}
            <motion.div 
              className='about-content mb-5'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className='mb-4 text-highlight fw-bold'>Desarrollador Full Stack | Analista Programador</h3>
              <p className='lead mb-4'>
                Desarrollador Full Stack con una trayectoria única. Cuento con <strong>19 años de experiencia</strong> en entornos 
                de alta exigencia en las Fuerzas Armadas, lo que me ha provisto de disciplina intachable, capacidad resolutiva 
                y ejecución impecable bajo presión extrema.
              </p>
              <p className='mb-4'>
                En el 2023, consolidé mi transición hacia la industria del software. Me especializo en estructurar 
                arquitecturas web escalables y modulares. Aplico metodologías de ingeniería limpias y eficientes 
                para asegurar la mantenibilidad a largo plazo del código.
              </p>

              {/* Información Destacada */}
              <div className='row mb-5 g-3'>
                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-laptop-code text-info me-2'></i>
                    <strong>Especialización:</strong> Full Stack (React / Node / Python)
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-map-marker-alt text-info me-2'></i>
                    <strong>Ubicación:</strong> Santiago, Chile (Disponible Remoto / Híbrido)
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-graduation-cap text-info me-2'></i>
                    <strong>Educación:</strong> Analista Programador (INACAP)
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-medal text-info me-2'></i>
                    <strong>Background:</strong> 19 años FFAA (Resiliencia & Ejecución)
                  </div>
                </div>
              </div>

              {/* Botón de descarga de CV */}
              <motion.div 
                className='text-center text-md-start'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href='/cv_sebastian_ortega.pdf'
                  className='btn btn-primary btn-lg px-4'
                  download='CV_Sebastian_Ortega.pdf'
                >
                  <i className='fas fa-download me-2'></i>
                  Descargar CV Profesional (PDF)
                </a>
              </motion.div>
            </motion.div>

            {/* Subtítulo: Trayectoria */}
            <div className='text-center my-5'>
              <h3 className='section-subtitle text-uppercase font-monospace text-info' style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
                Trayectoria Profesional
              </h3>
              <p className='text-muted small mt-2'>Haz clic en las tarjetas de la línea de tiempo para expandir logros clave</p>
            </div>

            {/* Línea de Tiempo Interactiva */}
            <div className='experience-timeline'>
              {timelineData.map((item, index) => (
                <motion.div 
                  className='timeline-item' 
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Punto en la línea de tiempo */}
                  <div className='timeline-marker'></div>

                  {/* Tarjeta de la línea de tiempo */}
                  <div 
                    className={`timeline-card cursor-pointer ${activeTimeline === item.id ? "active-card" : ""}`}
                    onClick={() => toggleTimeline(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className='timeline-date'>{item.date}</span>
                    <h4 className='timeline-title'>{item.title}</h4>
                    <h5 className='timeline-subtitle'>{item.subtitle}</h5>
                    <p className='timeline-desc'>{item.description}</p>

                    {/* Contenido Expandible Animado con Framer Motion */}
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ 
                        height: activeTimeline === item.id ? "auto" : 0, 
                        opacity: activeTimeline === item.id ? 1 : 0,
                        marginTop: activeTimeline === item.id ? 15 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul className='timeline-details-list list-unstyled ps-0 mb-0 border-top border-secondary pt-3'>
                        {item.details.map((detail, idx) => (
                          <li key={idx} className='mb-2 text-muted d-flex align-items-start'>
                            <i className='fas fa-check-circle text-info me-2 mt-1' style={{ fontSize: "0.85rem" }}></i>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Indicador de expandir */}
                    <div className='text-end mt-2 text-muted small'>
                      <i className={`fas ${activeTimeline === item.id ? "fa-chevron-up" : "fa-chevron-down"} me-1`}></i>
                      {activeTimeline === item.id ? "Ver menos" : "Ver detalles"}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tecnologías principales integradas */}
            <div className='text-center mt-5 pt-4 mb-4'>
              <h3 className='section-subtitle text-uppercase font-monospace text-info' style={{ fontSize: "1.4rem", letterSpacing: "2px" }}>
                Tecnologías Clave
              </h3>
            </div>

            <div className='technologies-grid justify-content-center'>
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className='tech-badge'
                  whileHover={{ y: -8, boxShadow: "var(--glow-cyan)", borderColor: "var(--color-accent-blue)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  style={{ border: "1px solid rgba(255,255,255,0.03)" }}
                >
                  <i className={tech.icon} style={{ color: tech.color }}></i>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
