import { useState, useRef, useEffect } from "react";
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
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    // Detección móvil para ajustar la escala del efecto (Galaxia ensanchada al doble/triple)
    let isMobile = window.innerWidth < 768;
    let minRadius = isMobile ? 80 : 150;
    let maxRadius = isMobile ? 240 : 550;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      isMobile = window.innerWidth < 768;

      const newMinRadius = isMobile ? 80 : 150;
      const newMaxRadius = isMobile ? 240 : 550;

      // Recalcular el radio de órbita para cada partícula
      particles.forEach((p) => {
        p.orbitRadius =
          newMinRadius + p.radialPercentage * (newMaxRadius - newMinRadius);
      });
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      active: false,
    };

    // Centro dinámico y persistente de la galaxia (sigue al cursor con inercia/amortiguación)
    const galaxyCenter = {
      x: width / 2,
      y: height / 2,
    };

    const handleMouseMoveGlobal = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseEnterGlobal = () => {
      mouse.active = true;
    };

    const handleMouseLeaveGlobal = () => {
      mouse.active = false;
    };

    const parent = canvas.parentElement;
    parent.addEventListener("mousemove", handleMouseMoveGlobal);
    parent.addEventListener("mouseenter", handleMouseEnterGlobal);
    parent.addEventListener("mouseleave", handleMouseLeaveGlobal);

    // Paleta de colores cibernética del portafolio
    const colors = ["#00f2fe", "#8a2be2", "#ff007f", "#00d2ff", "#b927fc"];

    // Aumentamos cantidad a 350 para llenar el espacio de la galaxia ensanchada
    const particles = [];
    const numParticles = isMobile ? 150 : 350;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radialPercentage = Math.random();
      const orbitRadius =
        minRadius + radialPercentage * (maxRadius - minRadius);

      particles.push({
        angle,
        radialPercentage,
        orbitRadius,
        // Nacen en el centro para dar un efecto de "explosión/liftoff" inicial al cargar
        x: centerX,
        y: centerY,
        vx: 0,
        vy: 0,
        size: 1.1 + Math.random() * 2.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        // Resortes más suaves para mayor movimiento y fluidez
        springStrength: 0.003 + Math.random() * 0.004,
        // Menos fricción (deslizan más lejos como hielo)
        friction: 0.91 + Math.random() * 0.03,
        glow: 4 + Math.random() * 5,
      });
    }

    const render = () => {
      // Limpiamos el canvas por completo para conservar la transparencia y que se vean los gradientes CSS de fondo
      ctx.clearRect(0, 0, width, height);

      // El centro de la galaxia sigue al cursor muy lentamente (inercia flotante)
      const targetCenterX = mouse.active ? mouse.x : width / 2;
      const targetCenterY = mouse.active ? mouse.y : height / 2;

      galaxyCenter.x += (targetCenterX - galaxyCenter.x) * 0.006; // Inercia mucho más lenta para el arrastre majestuoso
      galaxyCenter.y += (targetCenterY - galaxyCenter.y) * 0.006;

      particles.forEach((p) => {
        // 1. Interacción local con el Mouse: Repulsión (deformación) en tiempo real
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Radio de repulsión reducido a la mitad (90px) para que los puntos se acerquen más al cursor
          const repulsionRadius = isMobile ? 50 : 90;

          if (dist < repulsionRadius) {
            // Fuerza de repulsión proporcional (empuja los puntos que toca el cursor)
            const force = (repulsionRadius - dist) / repulsionRadius;
            const angle = Math.atan2(dy, dx);
            const push = force * (isMobile ? 3.0 : 5.5); // Empuje suave proporcional al tamaño

            p.vx += Math.cos(angle) * push;
            p.vy += Math.sin(angle) * push;
          }
        }

        // 2. Efecto de oscilación natural (amplitud triplicada a 16px para mayor dinamismo)
        const waveX = Math.sin(Date.now() * 0.0012 + p.angle * 3) * 16;
        const waveY = Math.cos(Date.now() * 0.001 + p.angle * 2.5) * 16;

        // 3. Su posición de destino ahora se calcula relativa al centro móvil de la galaxia
        const targetX =
          galaxyCenter.x + Math.cos(p.angle) * p.orbitRadius + waveX;
        const targetY =
          galaxyCenter.y + Math.sin(p.angle) * p.orbitRadius + waveY;

        // 4. Atracción de resorte hacia su posición dinámica
        const homeDx = targetX - p.x;
        const homeDy = targetY - p.y;
        p.vx += homeDx * p.springStrength;
        p.vy += homeDy * p.springStrength;

        // 5. Integración de velocidad y posición
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.x += p.vx;
        p.y += p.vy;

        // 6. Dibujar punto definido con brillo de alta fidelidad
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;

        ctx.shadowBlur = p.glow;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      // Resetear shadowBlur para optimizar llamadas del navegador
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener("mousemove", handleMouseMoveGlobal);
      parent.removeEventListener("mouseenter", handleMouseEnterGlobal);
      parent.removeEventListener("mouseleave", handleMouseLeaveGlobal);
    };
  }, []);

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
      {/* Canvas para el efecto Galaxia de estrellas */}
      <canvas ref={canvasRef} className='hero-galaxy-canvas' />

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
              {/* Nombre completo con acento */}
              <motion.h1 className='hero-title' variants={itemVariants}>
                Sebastian Ortega
              </motion.h1>

              {/* Rol profesional con highlight */}
              <motion.h2 className='hero-subtitle' variants={itemVariants}>
                Analista Programador | Perfil{" "}
                <span className='text-highlight'>Full Stack</span>
              </motion.h2>

              {/* Descripción breve profesional */}
              <motion.p
                className='hero-description mx-auto'
                variants={itemVariants}
              >
                Me enfoco en el diseño de arquitecturas de sistemas, modelado de bases
                de datos y el desarrollo de aplicaciones web veloces. Aporto rigor analítico,
                disciplina y un enfoque práctico para resolver desafíos complejos.
              </motion.p>

              {/* Botones de acción con microinteracción magnética */}
              <motion.div
                className='hero-buttons justify-content-center'
                variants={itemVariants}
              >
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
              <motion.div
                className='hero-social justify-content-center mt-5'
                variants={itemVariants}
              >
                <motion.a
                  href='https://github.com/rasoh2'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label='GitHub de Sebastian Ortega'
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
                  aria-label='LinkedIn de Sebastian Ortega'
                >
                  <i className='fab fa-linkedin'></i>
                </motion.a>
                <motion.a
                  href='mailto:sebastian.ortega.auriol@gmail.com'
                  className='social-link'
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label='Enviar correo a Sebastian Ortega'
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
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
      >
        <a href='#about' aria-label='Ir a la sección Sobre Mí'>
          <i className='fas fa-chevron-down'></i>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
