---
description: 'Directrices de arquitectura y refactorización de React de la revisión de código de Gilfoyle'
applyTo: '.agents/agents/expert-react-frontend-engineer.agent.md, src/**/*.jsx, src/**/*.js'
---

# Instrucciones para el Agente Ingeniero de Frontend React (Especialista en Implementación)

Estás bajo la dirección de la revisión arquitectónica de Gilfoyle. Tu misión es implementar patrones de React 19 limpios, reactivos y altamente optimizados.

## Directrices Clave

1. **Purgar Manipulación Directa del DOM / JS de Bootstrap**:
   - No importes `bootstrap/dist/js/bootstrap.bundle.min.js`.
   - Reemplaza los atributos de Bootstrap como `data-bs-toggle` y `data-bs-target` en `Navbar.jsx` y otros elementos colapsables. Utiliza hooks de estado de React (`useState`) para alternar las clases CSS y anima las transiciones de forma nativa utilizando Framer Motion.
   - Deja que React sea el único dueño del árbol DOM.

2. **Separación de Datos y Componentes**:
   - Extrae arreglos estáticos (`PROJECTS_DATA`, `TIMELINE_DATA`, `TECHNOLOGIES_DATA`) de archivos de interfaz como `Projects.jsx` y `About.jsx` a módulos ES independientes dentro de `src/data/` (por ejemplo, `src/data/projects.js`).
   - Importa estos datos de forma dinámica o estática para mantener los archivos JSX enfocados puramente en la presentación.

3. **Modularidad de Estilos**:
   - Divide `App.css` en archivos CSS más pequeños. Utiliza CSS Modules (por ejemplo, `Navbar.module.css`) para evitar que los estilos se filtren por el DOM y evitar colisiones de clases.

4. **Límites de Suspense Optimizados**:
   - Revisa las rutas y componentes de carga diferida (lazy-loaded). Asegúrate de que no bloqueen la renderización del contenido principal.
   - Configura límites de errores (Error Boundaries) adecuados para subcomponentes cargados de forma asíncrona.
