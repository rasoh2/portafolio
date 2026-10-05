import { useState } from "react";
import { motion } from "framer-motion";
import { TIMELINE_DATA, TECHNOLOGIES_DATA, CERTIFICATIONS_DATA } from "../data/about";
import "../styles/About.css";

/**
 * Componente About - Sección "Sobre Mí" con Línea de Tiempo Interactiva y Certificaciones
 * - Muestra la biografía del nuevo CV y disponibilidad para práctica profesional (360 hrs).
 * - Línea de tiempo interactiva con hitos académicos y trayectoria en el Ejército de Chile.
 * - Sección de Certificaciones oficiales (Google AI Essentials, Red Hat RH124, SENCE).
 * - Animado con Framer Motion (con viewport triggers).
 */
function About() {
  const [activeTimeline, setActiveTimeline] = useState(null);
  const [showAllTimeline, setShowAllTimeline] = useState(false);

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
              <div className='d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4'>
                <h3 className='text-highlight fw-bold mb-0'>
                  Analista Programador & Perfil Full Stack
                </h3>
                <span className='hero-badge-available mb-0' style={{ margin: 0, fontSize: "0.85rem", padding: "6px 16px" }}>
                  <span className='status-dot'></span>
                  Disponible para Práctica Profesional (360 hrs)
                </span>
              </div>

              <p className='lead mb-4'>
                Analista Programador con perfil Full Stack, especializado en desarrollo de soluciones de software como CRM, dashboards empresariales y aplicaciones web. Trabajo con React, TypeScript, Node.js, Express, PostgreSQL y MongoDB, incluyendo APIs REST, autenticación y despliegue de aplicaciones. Integro metodologías actuales como Spec-Driven Development y orquestación de agentes de IA de forma activa en mi proceso de construcción de soluciones.
              </p>

              {/* Información Destacada */}
              <div className='row mb-5 g-3'>
                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-laptop-code text-info me-2'></i>
                    <strong>Educación:</strong> Analista Programador (INACAP) | FullStack (Desafío Latam)
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-user-check text-info me-2'></i>
                    <strong>Disponibilidad:</strong> Inmediata
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-graduation-cap text-info me-2'></i>
                    <strong>Especialización:</strong> Full Stack (React 19, TS, Node, SQL) & AI-Driven Workflows

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
                    <i className='fas fa-shield-alt text-info me-2'></i>
                    <strong>Trayectoria Previa:</strong> Liderazgo y Gestión Operativa (Entornos de alta exigencia)
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='about-info-item'>
                    <i className='fas fa-language text-info me-2'></i>
                    <strong>Idiomas:</strong> Inglés Técnico (Lectura fluida de documentación)
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
                    href='/cv_sebastian_Ortega.pdf'
                    className='btn btn-primary btn-lg px-4'
                    download='CV_Sebastian_Ortega.pdf'
                  >
                    <i className='fas fa-download me-2'></i>
                    Descargar CV (PDF)
                  </a>
                </motion.div>
            </motion.div>

            {/* Subtítulo: Certificaciones Oficiales */}
            <div className='text-center my-5'>
              <h3 className='section-subtitle text-uppercase font-monospace text-info' style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
                Certificaciones
              </h3>
              <p className='text-muted small mt-2 mb-3'>Credenciales técnicas en Inteligencia Artificial, Linux Enterprise y Metodologías Ágiles</p>
              <motion.a
                href='https://www.credly.com/users/sebastian.ortega'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline-info btn-sm px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className='fas fa-certificate text-warning'></i>
                <span>Ver Insignias Oficiales en Credly</span>
                <i className='fas fa-external-link-alt small'></i>
              </motion.a>
            </div>

            {/* Grid de Certificaciones */}
            <div className='row g-4 mb-5'>
              {CERTIFICATIONS_DATA.map((cert, index) => (
                <div key={cert.id} className='col-lg-4 col-md-6'>
                  <motion.div
                    className='cert-card'
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className='cert-header'>
                      <div className='cert-icon'>
                        <i className={cert.icon} style={{ color: cert.color }}></i>
                      </div>
                      <div>
                        <h4 className='cert-title'>{cert.title}</h4>
                        <span className='cert-year'>{cert.issuer} • {cert.year}</span>
                      </div>
                    </div>
                    <div className='cert-meta'>
                      <span className='cert-badge'>{cert.badge}</span>
                    </div>
                    <p className='cert-desc mb-3'>{cert.description}</p>
                    {cert.verifyUrl && (
                      <div className='mt-auto pt-3 border-top border-secondary-subtle d-flex align-items-center justify-content-between'>
                        <a
                          href={cert.verifyUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='cert-verify-link'
                        >
                          Verificar Credencial <i className='fas fa-arrow-right ms-1' style={{ fontSize: "0.75rem" }}></i>
                        </a>
                        <i className='fas fa-shield-alt text-info opacity-75' title='Credencial Verificada'></i>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>


            {/* Subtítulo: Trayectoria */}
            <div className='text-center my-5'>
              <h3 className='section-subtitle text-uppercase font-monospace text-info' style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
                Trayectoria Profesional & Educación
              </h3>
              <p className='text-muted small mt-2'>Haz clic en las tarjetas de la línea de tiempo para expandir logros clave</p>
            </div>

            {/* Línea de Tiempo Interactiva */}
            <div className='experience-timeline'>
              {(showAllTimeline ? TIMELINE_DATA : TIMELINE_DATA.slice(0, 2)).map((item, index) => (
                <motion.div
                  className='timeline-item'
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {/* Punto en la línea de tiempo */}
                  <div className='timeline-marker'></div>

                  {/* Tarjeta de la línea de tiempo */}
                  <div
                    className={`timeline-card cursor-pointer ${activeTimeline === item.id ? "active-card" : ""}`}
                    onClick={() => toggleTimeline(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className='d-flex align-items-center flex-wrap gap-2 mb-1'>
                      <span className='timeline-date'>{item.date}</span>
                      {item.type && <span className='timeline-type-badge'>{item.type}</span>}
                    </div>
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

            {/* Botón de despliegue para ver más / menos trayectoria */}
            {TIMELINE_DATA.length > 2 && (
              <div className='text-center mt-4 mb-2'>
                <motion.button
                  type='button'
                  onClick={() => setShowAllTimeline(!showAllTimeline)}
                  className='btn btn-outline-info rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2'
                  style={{
                    borderColor: "var(--color-accent-blue)",
                    color: "var(--text-main)",
                    backgroundColor: "rgba(0, 210, 255, 0.05)",
                    fontSize: "0.92rem",
                    fontWeight: 600
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 210, 255, 0.15)",
                    boxShadow: "var(--glow-cyan)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fas ${showAllTimeline ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                  <span>
                    {showAllTimeline
                      ? "Mostrar menos"
                      : `Ver trayectoria completa (${TIMELINE_DATA.length - 2} más)`}
                  </span>
                </motion.button>
              </div>
            )}

            {/* Tecnologías principales integradas */}
            <div className='text-center mt-5 pt-4 mb-4'>
              <h3 className='section-subtitle text-uppercase font-monospace text-info' style={{ fontSize: "1.4rem", letterSpacing: "2px" }}>
                Tecnologías Clave
              </h3>
            </div>

            <div className='technologies-grid justify-content-center'>
              {TECHNOLOGIES_DATA.map((tech, index) => (
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

