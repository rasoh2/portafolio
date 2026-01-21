/**
 * Componente Hero - Sección principal de bienvenida
 * Primera impresión del portafolio con:
 * - Nombre y rol profesional
 * - Descripción breve
 * - Botones de acción (Ver proyectos y Contactar)
 */
function Hero() {
  return (
    <section id='home' className='hero-section'>
      <div className='container'>
        <div className='row align-items-center min-vh-100'>
          <div className='col-lg-8 mx-auto text-center'>
            {/* Saludo inicial */}
            <h1 className='hero-greeting' data-aos='fade-down'>
              👋 Hola, soy
            </h1>

            {/* Nombre completo */}
            <h1 className='hero-title' data-aos='fade-up'>
              Sebastian Ortega
            </h1>

            {/* Rol profesional */}
            <h2
              className='hero-subtitle'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Desarrollador Full Stack{" "}
              <span className='text-highlight'>JavaScript</span>
            </h2>

            {/* Descripción breve profesional */}
            <p
              className='hero-description'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Desarrollador Full Stack especializado en tecnologías modernas.
              Experiencia en React, Node.js, MongoDB y PostgreSQL. Enfocado en
              crear soluciones escalables y eficientes.
            </p>

            {/* Botones de acción */}
            <div
              className='hero-buttons'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <a href='#projects' className='btn btn-primary btn-lg me-3'>
                <i className='fas fa-rocket me-2'></i>
                Ver Proyectos
              </a>
              <a href='#contact' className='btn btn-outline-primary btn-lg'>
                <i className='fas fa-envelope me-2'></i>
                Contactar
              </a>
            </div>

            {/* Enlaces sociales */}
            <div
              className='hero-social mt-5'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <a
                href='https://github.com/rasoh2'
                target='_blank'
                rel='noopener noreferrer'
                className='social-link'
              >
                <i className='fab fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/ortegaauriol'
                target='_blank'
                rel='noopener noreferrer'
                className='social-link'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              <a
                href='mailto:sebastian.ortega.auriol@gmail.com'
                className='social-link'
              >
                <i className='fas fa-envelope'></i>
              </a>
            </div>

            {/* Indicador de scroll */}
            <div
              className='scroll-indicator'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              <a href='#about'>
                <i className='fas fa-chevron-down'></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className='hero-bg-shapes'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
      </div>
    </section>
  );
}

export default Hero;
