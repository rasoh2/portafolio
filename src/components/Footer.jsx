/**
 * Componente Footer - Pie de página del portafolio
 * Incluye links de navegación, redes sociales y copyright
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer py-5'>
      <div className='container'>
        <div className='row'>
          {/* Columna 1: Información */}
          <div className='col-lg-4 col-md-6 mb-4 mb-lg-0'>
            <h5 className='footer-title'>
              <i className='fas fa-code me-2'></i>
              Sebastian Ortega Auriol
            </h5>
            <p className='footer-description'>
              Desarrollador Full Stack JavaScript especializado en crear
              soluciones web escalables y eficientes.
            </p>
            <div className='footer-social'>
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
          </div>

          {/* Columna 2: Links rápidos */}
          <div className='col-lg-2 col-md-6 mb-4 mb-lg-0'>
            <h5 className='footer-title'>Navegación</h5>
            <ul className='footer-links'>
              <li>
                <a href='#home'>Inicio</a>
              </li>
              <li>
                <a href='#about'>Sobre Mí</a>
              </li>
              <li>
                <a href='#projects'>Proyectos</a>
              </li>
              <li>
                <a href='#skills'>Habilidades</a>
              </li>
              <li>
                <a href='#contact'>Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
            <h5 className='footer-title'>Servicios</h5>
            <ul className='footer-links'>
              <li>Desarrollo Web</li>
              <li>Aplicaciones React</li>
              <li>API REST</li>
              <li>Diseño Responsivo</li>
              <li>Consultoría Técnica</li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className='col-lg-3 col-md-6'>
            <h5 className='footer-title'>Contacto</h5>
            <ul className='footer-contact'>
              <li>
                <i className='fas fa-envelope me-2'></i>
                <a href='mailto:sebastian.ortega.auriol@gmail.com'>
                  sebastian.ortega.auriol@gmail.com
                </a>
              </li>
              <li>
                <i className='fas fa-phone me-2'></i>
                <a href='tel:+573186746513'>+57 318 674 6513</a>
              </li>
              <li>
                <i className='fas fa-map-marker-alt me-2'></i>
                Santiago, Chile
              </li>
            </ul>
          </div>
        </div>

        {/* Línea separadora */}
        <hr className='footer-divider my-4' />

        {/* Copyright */}
        <div className='row'>
          <div className='col-12'>
            <div className='footer-bottom text-center'>
              <p className='mb-0'>
                &copy; {currentYear} <strong>Sebastian Ortega Auriol</strong>.
                Todos los los derechos reservados.
              </p>
              <p className='mb-0 mt-2'>
                Hecho con <i className='fas fa-heart text-danger'></i> y{" "}
                <i className='fab fa-react text-info'></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para volver arriba */}
      <a href='#home' className='back-to-top'>
        <i className='fas fa-arrow-up'></i>
      </a>
    </footer>
  );
}

export default Footer;
