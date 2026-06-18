import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Componente Navbar - Barra de navegación principal
 * - Responsivo con menú hamburguesa en móvil
 * - Glassmorphism avanzado
 * - Animación de entrada fluida con Framer Motion (degradable)
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detecta el desplazamiento para alternar fondos de vidrio
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className='container'>
        {/* Logo / Nombre con microinteracción al pasar el mouse */}
        <motion.a 
          className='navbar-brand fw-bold' 
          href='#home'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <i className='fas fa-code me-2'></i>
          Sebastian Ortega Auriol
        </motion.a>

        {/* Botón hamburguesa para móvil */}
        <button
          className='navbar-toggler'
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Links de navegación */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            {["Inicio", "Sobre Mí", "Proyectos", "Habilidades", "Contacto"].map((tab, idx) => {
              const hrefs = ["#home", "#about", "#projects", "#skills", "#contact"];
              return (
                <motion.li 
                  className='nav-item' 
                  key={tab}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                >
                  <a 
                    className='nav-link text-capitalize' 
                    href={hrefs[idx]}
                    onClick={() => setIsOpen(false)}
                  >
                    {tab}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
