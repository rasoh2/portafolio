// Importamos todos los componentes que creamos
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

/**
 * Componente principal App
 * Estructura completa del portafolio con todas las secciones
 */
function App() {
  return (
    <div className='App'>
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Contenido principal */}
      <main>
        {/* Sección Hero/Inicio */}
        <Hero />

        {/* Sección Sobre Mí */}
        <About />

        {/* Sección de Proyectos */}
        <Projects />

        {/* Sección de Habilidades */}
        <Skills />

        {/* Sección de Contacto */}
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
