import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const statusMessages = [
  "Initializing system...",
  "Loading portfolio assets...",
  "Compiling experience data...",
  "Rendering tech stack...",
  "Optimizing layout...",
  "System ready."
];

/**
 * Componente Preloader - Pantalla de carga animada
 * - Muestra un contador numérico estético (0-100%)
 * - Muestra logs estilo consola simulando inicialización
 * - Animaciones fluidas que respetan la accesibilidad (reduce-motion)
 */
function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  // Simulación del progreso de carga con aceleración al terminar la carga real de recursos
  useEffect(() => {
    let isLoaded = document.readyState === "complete";

    const handleLoad = () => {
      isLoaded = true;
    };

    if (!isLoaded) {
      window.addEventListener("load", handleLoad);
    }

    const intervalTime = 25;
    let currentProgress = 0;

    const timer = setInterval(() => {
      // Si la página ya cargó, avanzamos rápido (12% por tick) para no penalizar la UX.
      // Si no ha terminado, subimos a ritmo constante (2% por tick) como fallback visual.
      const step = isLoaded ? 12 : 2;
      currentProgress = Math.min(currentProgress + step, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 150); // Pausa reducida para transicionar antes
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [onComplete]);

  // Derivamos el messageIndex directamente en tiempo de renderizado para evitar efectos de renderizado en cascada
  const totalMessages = statusMessages.length;
  const messageIndex = Math.min(
    Math.floor((progress / 100) * totalMessages),
    totalMessages - 1
  );

  return (
    <motion.div
      className="preloader-container"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" }
      }}
    >
      <div className="preloader-content text-center">
        {/* SVG Animado (Logotipo de Código) */}
        <motion.div
          className="preloader-logo mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Círculo exterior con dasharray */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#preloader-grad)"
              strokeWidth="2"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
            {/* Icono de llaves de código </ > */}
            <path
              d="M38 35L23 50L38 65M62 35L77 50L62 65M45 70L55 30"
              stroke="url(#preloader-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="100%" stopColor="#8a2be2" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Nombre / Firma */}
        <motion.h2
          className="preloader-name text-uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Sebastian Ortega
        </motion.h2>

        {/* Porcentaje de carga */}
        <div className="preloader-percentage-wrapper my-3">
          <span className="preloader-percentage">{progress}</span>
          <span className="preloader-percentage-symbol">%</span>
        </div>

        {/* Barra de progreso visual */}
        <div className="preloader-bar-bg mx-auto">
          <div 
            className="preloader-bar-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Logs de sistema */}
        <div className="preloader-status-console mt-4 px-3">
          <div className="terminal-prefix font-monospace text-muted">
            $ <span className="text-info">{statusMessages[messageIndex]}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
