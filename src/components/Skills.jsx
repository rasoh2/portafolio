/**
 * Componente Skills - Sección de habilidades técnicas
 * Organizado por categorías: Frontend, Backend y Herramientas
 */
function Skills() {
  // Habilidades organizadas por categorías - Nivel Junior
  const skillsData = {
    frontend: [
      { name: "HTML5", level: 55, icon: "fab fa-html5", color: "#E34F26" },
      {
        name: "CSS3 / Bootstrap",
        level: 55,
        icon: "fab fa-css3-alt",
        color: "#1572B6",
      },
      {
        name: "JavaScript (ES6+)",
        level: 50,
        icon: "fab fa-js",
        color: "#F7DF1E",
      },
      { name: "React.js", level: 45, icon: "fab fa-react", color: "#61DAFB" },
      { name: "Vue.js", level: 40, icon: "fab fa-vuejs", color: "#4FC08D" },
      {
        name: "Responsive Design",
        level: 50,
        icon: "fas fa-mobile-alt",
        color: "#6C63FF",
      },
    ],
    backend: [
      { name: "Node.js", level: 35, icon: "fab fa-node", color: "#339933" },
      {
        name: "Python",
        level: 35,
        icon: "fab fa-python",
        color: "#3776AB",
      },
      {
        name: "PostgreSQL",
        level: 40,
        icon: "fas fa-database",
        color: "#4479A1",
      },
      {
        name: "Oracle SQL",
        level: 35,
        icon: "fas fa-database",
        color: "#F80000",
      },
      { name: "API REST", level: 45, icon: "fas fa-plug", color: "#FF6C37" },
    ],
    tools: [
      {
        name: "Git / GitHub",
        level: 55,
        icon: "fab fa-git-alt",
        color: "#F05032",
      },
      { name: "VS Code", level: 60, icon: "fas fa-code", color: "#007ACC" },
      { name: "Jira", level: 40, icon: "fab fa-jira", color: "#0052CC" },
      {
        name: "Excel / Office",
        level: 70,
        icon: "fas fa-file-excel",
        color: "#217346",
      },
      {
        name: "Metodologías Ágiles (Scrum)",
        level: 50,
        icon: "fas fa-tasks",
        color: "#6C63FF",
      },
    ],
  };

  return (
    <section id='skills' className='skills-section py-5'>
      <div className='container'>
        {/* Título de la sección */}
        <div className='row'>
          <div className='col-12 text-center mb-5' data-aos='fade-up'>
            <h2 className='section-title'>Habilidades Técnicas</h2>
            <div className='section-divider'></div>
            <p className='section-description mt-3'>
              Tecnologías y herramientas con las que trabajo diariamente
            </p>
          </div>
        </div>

        {/* Frontend Skills */}
        <div className='row mb-5'>
          <div className='col-12' data-aos='fade-up'>
            <div className='skills-category'>
              <h3 className='category-title'>
                <i className='fas fa-palette me-2'></i>
                Frontend Development
              </h3>
              <div className='row g-4'>
                {skillsData.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className='col-lg-6'
                    data-aos='fade-right'
                    data-aos-delay={index * 50}
                  >
                    <div className='skill-item'>
                      <div className='skill-header'>
                        <i
                          className={skill.icon}
                          style={{ color: skill.color }}
                        ></i>
                        <span className='skill-name'>{skill.name}</span>
                        <span className='skill-percentage'>{skill.level}%</span>
                      </div>
                      {/* Barra de progreso */}
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                          aria-valuenow={skill.level}
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className='row mb-5'>
          <div className='col-12' data-aos='fade-up'>
            <div className='skills-category'>
              <h3 className='category-title'>
                <i className='fas fa-server me-2'></i>
                Backend Development
              </h3>
              <div className='row g-4'>
                {skillsData.backend.map((skill, index) => (
                  <div
                    key={index}
                    className='col-lg-6'
                    data-aos='fade-left'
                    data-aos-delay={index * 50}
                  >
                    <div className='skill-item'>
                      <div className='skill-header'>
                        <i
                          className={skill.icon}
                          style={{ color: skill.color }}
                        ></i>
                        <span className='skill-name'>{skill.name}</span>
                        <span className='skill-percentage'>{skill.level}%</span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                          aria-valuenow={skill.level}
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Methodologies */}
        <div className='row'>
          <div className='col-12' data-aos='fade-up'>
            <div className='skills-category'>
              <h3 className='category-title'>
                <i className='fas fa-tools me-2'></i>
                Herramientas y Metodologías
              </h3>
              <div className='row g-4'>
                {skillsData.tools.map((skill, index) => (
                  <div
                    key={index}
                    className='col-lg-6'
                    data-aos='fade-up'
                    data-aos-delay={index * 50}
                  >
                    <div className='skill-item'>
                      <div className='skill-header'>
                        <i
                          className={skill.icon}
                          style={{ color: skill.color }}
                        ></i>
                        <span className='skill-name'>{skill.name}</span>
                        <span className='skill-percentage'>{skill.level}%</span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                          aria-valuenow={skill.level}
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div className='row mt-5'>
          <div className='col-12 text-center mb-4' data-aos='fade-up'>
            <h3 className='section-subtitle'>Habilidades Blandas</h3>
          </div>
          <div className='col-12' data-aos='fade-up'>
            <div className='soft-skills-container'>
              <div className='row g-3 justify-content-center'>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-users-cog'></i>
                    <span>Liderazgo</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-comments'></i>
                    <span>Comunicación efectiva</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-people-arrows'></i>
                    <span>Trabajo en equipo</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-lightbulb'></i>
                    <span>Resolución de problemas</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-sync-alt'></i>
                    <span>Adaptabilidad</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-brain'></i>
                    <span>Pensamiento crítico</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-clock'></i>
                    <span>Gestión del tiempo</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                  <div className='soft-skill-badge'>
                    <i className='fas fa-graduation-cap'></i>
                    <span>Aprendizaje continuo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas adicionales */}
        <div className='row mt-5'>
          <div className='col-md-3 col-6 mb-4' data-aos='zoom-in'>
            <div className='stat-box text-center'>
              <i className='fas fa-project-diagram stat-icon'></i>
              <h4 className='stat-number'>5+</h4>
              <p className='stat-label'>Proyectos Completados</p>
            </div>
          </div>
          <div
            className='col-md-3 col-6 mb-4'
            data-aos='zoom-in'
            data-aos-delay='100'
          >
            <div className='stat-box text-center'>
              <i className='fas fa-code stat-icon'></i>
              <h4 className='stat-number'>15+</h4>
              <p className='stat-label'>Tecnologías</p>
            </div>
          </div>
          <div
            className='col-md-3 col-6 mb-4'
            data-aos='zoom-in'
            data-aos-delay='200'
          >
            <div className='stat-box text-center'>
              <i className='fas fa-users stat-icon'></i>
              <h4 className='stat-number'>19</h4>
              <p className='stat-label'>Años de Experiencia</p>
            </div>
          </div>
          <div
            className='col-md-3 col-6 mb-4'
            data-aos='zoom-in'
            data-aos-delay='300'
          >
            <div className='stat-box text-center'>
              <i className='fas fa-language stat-icon'></i>
              <h4 className='stat-number'>Inglés</h4>
              <p className='stat-label'>Nivel Básico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
