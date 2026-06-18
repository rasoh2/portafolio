import { useState, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

// Importaciones estáticas para los componentes críticos del above-the-fold
// Esto evita retrasos visuales tras ocultarse el preloader.
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Carga perezosa (Lazy Loading) para las secciones por debajo del pliegue (below-the-fold)
// Optimiza el tamaño del bundle inicial y mejora las puntuaciones Lighthouse
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

import "./App.css";

/**
 * Componente principal App
 * Estructura completa del portafolio con transiciones, preloader y code splitting.
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='App'>
      {/* Sistema de Preloader con transición de desvanecimiento suave */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Solo renderizamos el contenido cuando el preloader ha terminado su ciclo */}
      {!isLoading && (
        <>
          {/* Barra de navegación flotante con glassmorphism */}
          <Navbar />

          {/* Contenido principal */}
          <main>
            {/* Sección Hero: Renderizado inmediato */}
            <Hero />

            {/* Secciones secundarias con carga diferida (Suspense) */}
            <Suspense fallback={
              <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "20vh" }}>
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            }>
              {/* Sección Sobre Mí con timeline interactiva */}
              <About />

              {/* Sección de Proyectos con filtrado dinámico en tiempo real */}
              <Projects />

              {/* Sección de Habilidades (sin porcentajes numéricos) */}
              <Skills />

              {/* Sección de Contacto con validación */}
              <Contact />
            </Suspense>
          </main>

          {/* Pie de página */}
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
