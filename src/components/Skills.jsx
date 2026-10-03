import { motion } from "framer-motion";
import { SKILLS_DATA } from "../data/skills";
import "../styles/Skills.css";

/**
 * Componente Skills - Sección de habilidades técnicas
 * - Organizado por Frontend, Backend y Herramientas/Metodologías.
 * - Sin porcentajes numéricos de dominio (reemplazados por descriptores cualitativos: Avanzado, Intermedio, Familiarizado).
 * - Animación progresiva de barras al entrar en el viewport con Framer Motion.
 */
function Skills() {

  // Dominio técnico de herramientas y frameworks sin porcentajes o etiquetas restrictivas

  return (
    <section id='skills' className='skills-section py-5'>
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
              Habilidades Técnicas
            </motion.h2>
            <div className='section-divider'></div>
            <p className='section-description mt-3'>
              Tecnologías y herramientas que utilizo para desarrollar aplicaciones web estables y eficientes
            </p>
          </div>
        </div>

        {/* Categorías de habilidades (4 columnas / 2x2 grid) */}
        <div className='row g-4'>
          {/* IA & AI-Driven Dev */}
          <div className='col-lg-6 col-12'>
            <motion.div 
              className='skills-category'
              style={{ borderLeft: "3px solid #00ff88" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className='category-title'>
                <i className='fas fa-brain me-2' style={{ color: "#00ff88" }}></i>
                IA & AI-Driven Dev
              </h3>
              <div className='skills-grid-container'>
                {SKILLS_DATA.ai.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className='skill-badge-card'
                    whileHover={{ y: -5, boxShadow: "0 0 15px rgba(0, 255, 136, 0.4)", borderColor: "#00ff88" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{ border: "1px solid rgba(0, 255, 136, 0.15)" }}
                  >
                    <i className={`${skill.icon}`} style={{ color: skill.color }}></i>
                    <span className='skill-name'>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Frontend & Lenguajes */}
          <div className='col-lg-6 col-12'>
            <motion.div 
              className='skills-category'
              style={{ borderLeft: "3px solid #00f2fe" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className='category-title'>
                <i className='fas fa-code me-2' style={{ color: "#00f2fe" }}></i>
                Frontend & Lenguajes
              </h3>
              <div className='skills-grid-container'>
                {SKILLS_DATA.frontend.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className='skill-badge-card'
                    whileHover={{ y: -5, boxShadow: "var(--glow-cyan)", borderColor: "var(--color-accent-blue)" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{ border: "1px solid rgba(255,255,255,0.03)" }}
                  >
                    <i className={`${skill.icon}`} style={{ color: skill.color }}></i>
                    <span className='skill-name'>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Backend & Bases de Datos */}
          <div className='col-lg-6 col-12'>
            <motion.div 
              className='skills-category'
              style={{ borderLeft: "3px solid #8a2be2" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className='category-title'>
                <i className='fas fa-server me-2' style={{ color: "#8a2be2" }}></i>
                Backend & Bases de Datos
              </h3>
              <div className='skills-grid-container'>
                {SKILLS_DATA.backend.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className='skill-badge-card'
                    whileHover={{ y: -5, boxShadow: "var(--glow-purple)", borderColor: "var(--color-accent-purple)" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{ border: "1px solid rgba(255,255,255,0.03)" }}
                  >
                    <i className={`${skill.icon}`} style={{ color: skill.color }}></i>
                    <span className='skill-name'>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Herramientas & Metodologías */}
          <div className='col-lg-6 col-12'>
            <motion.div 
              className='skills-category'
              style={{ borderLeft: "3px solid #ff007f" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className='category-title'>
                <i className='fas fa-tasks me-2' style={{ color: "#ff007f" }}></i>
                Herramientas & Metodologías
              </h3>
              <div className='skills-grid-container'>
                {SKILLS_DATA.tools.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className='skill-badge-card'
                    whileHover={{ y: -5, boxShadow: "0 0 15px rgba(255, 0, 127, 0.4)", borderColor: "#ff007f" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{ border: "1px solid rgba(255,255,255,0.03)" }}
                  >
                    <i className={`${skill.icon}`} style={{ color: skill.color }}></i>
                    <span className='skill-name'>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Habilidades Blandas / Metodología de Liderazgo */}
        <div className='row mt-5 pt-4'>
          <div className='col-12 text-center mb-4'>
            <h3 className='section-subtitle text-uppercase font-monospace text-info' style={{ fontSize: "1.4rem", letterSpacing: "2px" }}>
              Competencias Clave
            </h3>
          </div>
          <div className='col-12'>
            <div className='row g-3 justify-content-center'>
              {[
                { name: "Liderazgo y Gestión", icon: "fas fa-users-cog" },
                { name: "Resolución de Problemas", icon: "fas fa-lightbulb" },
                { name: "Ejecución Bajo Presión", icon: "fas fa-shield-alt" },
                { name: "Comunicación Efectiva", icon: "fas fa-comments" },
                { name: "Trabajo en Equipo", icon: "fas fa-people-arrows" },
                { name: "Adaptabilidad Rápida", icon: "fas fa-sync-alt" },
              ].map((skill, index) => (
                <div key={index} className='col-lg-2 col-md-4 col-6'>
                  <motion.div 
                    className='soft-skill-badge'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cifras de Impacto */}
        <div className='row mt-5 pt-4 g-4'>
          {[
            { label: "Práctica Profesional", num: "360h", icon: "fas fa-user-clock" },
            { label: "Trayectoria de Alta Exigencia", num: "19 Años", icon: "fas fa-history" },
            { label: "Flujos IA & SDD", num: "Multi-Agente", icon: "fas fa-robot" },
            { label: "Lectura Técnica", num: "Inglés Básico", icon: "fas fa-language" }
          ].map((stat, index) => (
            <div key={index} className='col-md-3 col-6'>
              <motion.div 
                className='stat-box text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <i className={`${stat.icon} stat-icon`}></i>
                <h4 className='stat-number' style={{ fontSize: stat.num.length > 5 ? "1.9rem" : "2.6rem" }}>{stat.num}</h4>
                <p className='stat-label'>{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;

