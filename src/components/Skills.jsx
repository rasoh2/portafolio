import { motion } from "framer-motion";

/**
 * Componente Skills - Sección de habilidades técnicas
 * - Organizado por Frontend, Backend y Herramientas/Metodologías.
 * - Sin porcentajes numéricos de dominio (reemplazados por descriptores cualitativos: Avanzado, Intermedio, Familiarizado).
 * - Animación progresiva de barras al entrar en el viewport con Framer Motion.
 */
function Skills() {
  const skillsData = {
    frontend: [
      { name: "HTML5 / CSS3", level: 75, icon: "fab fa-html5", color: "#E34F26" },
      { name: "Bootstrap / Tailwind", level: 75, icon: "fab fa-css3-alt", color: "#1572B6" },
      { name: "JavaScript (ES6+)", level: 70, icon: "fab fa-js", color: "#F7DF1E" },
      { name: "React.js", level: 65, icon: "fab fa-react", color: "#00f2fe" },
      { name: "Vue.js", level: 50, icon: "fab fa-vuejs", color: "#4FC08D" },
      { name: "Responsive Design", level: 70, icon: "fas fa-mobile-alt", color: "#8a2be2" },
    ],
    backend: [
      { name: "Node.js", level: 60, icon: "fab fa-node", color: "#339933" },
      { name: "Express.js", level: 60, icon: "fas fa-server", color: "#8a2be2" },
      { name: "Python", level: 50, icon: "fab fa-python", color: "#3776AB" },
      { name: "PostgreSQL", level: 65, icon: "fas fa-database", color: "#4479A1" },
      { name: "MongoDB", level: 50, icon: "fas fa-leaf", color: "#47A248" },
      { name: "Oracle SQL / MySQL", level: 60, icon: "fas fa-database", color: "#00758F" },
      { name: "AWS", level: 60, icon: "fab fa-aws", color: "#FF9900" },
      { name: "API RESTful", level: 70, icon: "fas fa-plug", color: "#FF6C37" },
    ],
    tools: [
      { name: "Análisis y Diseño", level: 75, icon: "fas fa-project-diagram", color: "#17A2B8" },
      { name: "Modelamiento DB (UML, DER)", level: 70, icon: "fas fa-database", color: "#FFC107" },
      { name: "Metodologías Ágiles (Scrum)", level: 75, icon: "fas fa-tasks", color: "#6C63FF" },
      { name: "Git / GitHub", level: 75, icon: "fab fa-git-alt", color: "#F05032" },
      { name: "Jira / Confluence", level: 60, icon: "fab fa-jira", color: "#0052CC" },
      { name: "Windows & Linux Server", level: 65, icon: "fab fa-windows", color: "#0078D6" },
      { name: "Prompt Engineering", level: 70, icon: "fas fa-terminal", color: "#10B981" },
      { name: "Google Antigravity", level: 75, icon: "fas fa-robot", color: "#4285F4" },
    ],
  };

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

        {/* Categorías de habilidades */}
        <div className='row g-4'>
          {/* Frontend Column */}
          <div className='col-lg-4 col-md-6'>
            <motion.div 
              className='skills-category'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className='category-title'>
                <i className='fas fa-palette me-2'></i>
                Frontend Dev
              </h3>
              <div className='skills-grid-container'>
                {skillsData.frontend.map((skill, index) => (
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

          {/* Backend Column */}
          <div className='col-lg-4 col-md-6'>
            <motion.div 
              className='skills-category'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className='category-title'>
                <i className='fas fa-server me-2'></i>
                Backend Dev
              </h3>
              <div className='skills-grid-container'>
                {skillsData.backend.map((skill, index) => (
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

          {/* Tools Column */}
          <div className='col-lg-4 col-md-12'>
            <motion.div 
              className='skills-category'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className='category-title'>
                <i className='fas fa-project-diagram me-2'></i>
                Análisis & Herramientas
              </h3>
              <div className='skills-grid-container'>
                {skillsData.tools.map((skill, index) => (
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
            { label: "Proyectos Realizados", num: "6+", icon: "fas fa-project-diagram" },
            { label: "Tecnologías Dominadas", num: "15+", icon: "fas fa-code" },
            { label: "Años en Roles de Alta Exigencia", num: "19", icon: "fas fa-history" },
            { label: "Idioma Inglés", num: "Técnico", icon: "fas fa-language" }
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
                <h4 className='stat-number'>{stat.num}</h4>
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
