import { useState, useEffect } from "react";

/**
 * Componente Navbar - Barra de navegación principal
 * - Responsivo con menú hamburguesa en móvil
 * - Se vuelve opaca al hacer scroll
 * - Links con smooth scroll a cada sección
 */
function Navbar() {
  // Estado para controlar si el navbar tiene fondo (cuando se hace scroll)
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario scrollea más de 50px, activamos el fondo
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento cuando se desmonta el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className='container'>
        {/* Logo / Nombre */}
        <a className='navbar-brand fw-bold' href='#home'>
          <i className='fas fa-code me-2'></i>
          Sebastian Ortega Auriol
        </a>

        {/* Botón hamburguesa para móvil */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Links de navegación */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#home'>
                Inicio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                Sobre Mí
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Proyectos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills'>
                Habilidades
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
