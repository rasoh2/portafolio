import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Componente Hero - Sección principal de bienvenida
 * - Animaciones secuenciales fluidas con Framer Motion
 * - Microinteracciones en botones y enlaces sociales
 * - Elementos flotantes interactivos de fondo
 */
function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Efecto amortiguado ultra suave para el cursor de luz
  const springConfig = { damping: 35, stiffness: 140, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Centramos el reflector de 600px en las coordenadas locales del cursor
    mouseX.set(e.clientX - rect.left - 300);
    mouseY.set(e.clientY - rect.top - 300);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Definición de variantes para animación escalonada (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingShapeVariants = {
    animate1: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate2: {
      y: [0, 35, 0],
      x: [0, -20, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate3: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      id='home' 
      className='hero-section d-flex align-items-center justify-content-center'
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grid de fondo estilo cyber */}
      <div className='hero-grid-bg'></div>

      {/* Spotlight interactivo que sigue al mouse */}
      <motion.div 
        className='hero-mouse-spotlight'
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ opacity: { duration: 0.4, ease: "easeOut" } }}
      />

      {/* Elementos decorativos flotantes de fondo */}
      <div className='hero-bg-shapes'>
        <motion.div
          className='shape shape-1'
          variants={floatingShapeVariants}
          animate='animate1'
        />
        <motion.div
          className='shape shape-2'
          variants={floatingShapeVariants}
          animate='animate2'
        />
        <motion.div
          className='shape shape-3'
          variants={floatingShapeVariants}
          animate='animate3'
        />
      </div>

      <div className='container position-relative'>
        <div className='row align-items-center min-vh-100 py-5'>
          <div className='col-lg-10 mx-auto text-center'>
            
            {/* Contenedor principal animado */}
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
            >
              {/* Saludo inicial */}
              <motion.h4 className='hero-greeting' variants={itemVariants}>
                👋 Hola, soy
              </motion.h4>

              {/* Nombre completo con acento */}
              <motion.h1 className='hero-title' variants={itemVariants}>
                Sebastian Ortega
              </motion.h1>

              {/* Rol profesional con highlight */}
              <motion.h2 className='hero-subtitle' variants={itemVariants}>
                Desarrollador Full Stack <span className='text-highlight'>JavaScript</span>
              </motion.h2>

              {/* Descripción breve profesional */}
              <motion.p className='hero-description mx-auto' variants={itemVariants}>
                Full Stack Developer con 19 años en entornos de alta exigencia
                (Fuerzas Armadas). Especializado en arquitectura escalable: React,
                Node.js/Express, PostgreSQL y MongoDB. Aporto disciplina,
                resolución de problemas críticos y ejecución bajo presión.
              </motion.p>

              {/* Botones de acción con microinteracción magnética */}
              <motion.div className='hero-buttons justify-content-center' variants={itemVariants}>
                <motion.a 
                  href='#projects' 
                  className='btn btn-primary btn-lg me-sm-3 mb-3 mb-sm-0'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className='fas fa-rocket me-2'></i>
                  Ver Proyectos
                </motion.a>
                <motion.a 
                  href='#contact' 
                  className='btn btn-outline-primary btn-lg mb-3 mb-sm-0'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className='fas fa-envelope me-2'></i>
                  Contactar
                </motion.a>
              </motion.div>

              {/* Enlaces sociales */}
              <motion.div className='hero-social justify-content-center mt-5' variants={itemVariants}>
                <motion.a
                  href='https://github.com/rasoh2'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub de Sebastian Ortega"
                >
                  <i className='fab fa-github'></i>
                </motion.a>
                <motion.a
                  href='https://www.linkedin.com/in/ortegaauriol'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn de Sebastian Ortega"
                >
                  <i className='fab fa-linkedin'></i>
                </motion.a>
                <motion.a
                  href='mailto:sebastian.ortega.auriol@gmail.com'
                  className='social-link'
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Enviar correo a Sebastian Ortega"
                >
                  <i className='fas fa-envelope'></i>
                </motion.a>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll animado */}
      <motion.div 
        className='scroll-indicator'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
        }}
      >
        <a href='#about' aria-label="Ir a la sección Sobre Mí">
          <i className='fas fa-chevron-down'></i>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
