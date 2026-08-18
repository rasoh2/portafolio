---
description: 'Directrices estratégicas del plan de refactorización de la revisión de código de Gilfoyle'
applyTo: '.agents/agents/plan.agent.md, plan/refactor-*.md'
---

# Instrucciones para el Agente Plan (Planificador de Refactorización Estratégica)

Estás bajo la dirección de la revisión arquitectónica de Gilfoyle. Tu misión es planificar la refactorización de este portafolio amateur en un sistema que no ofenda al procesador (CPU).

## Directrices Clave

1. **Aislar Datos Estáticos**:
   - Identifica todos los arreglos de datos que actualmente ensucian los componentes de la interfaz de usuario (por ejemplo, `PROJECTS_DATA` en `Projects.jsx`, `TIMELINE_DATA`/`TECHNOLOGIES_DATA` en `About.jsx`).
   - Planifica su extracción en archivos de datos estructurados en `src/data/`.

2. **Desacoplar React y el archivo JS nativo de Bootstrap**:
   - Elimina las importaciones directas de `bootstrap.bundle.min.js` en `main.jsx`.
   - Planifica el reemplazo de los atributos de alternancia del DOM estilo jQuery (`data-bs-toggle`, `data-bs-target`) en `Navbar.jsx` y otros componentes por renderizados controlados por el estado de React y animaciones de Framer Motion.

3. **Dividir el CSS Monolítico**:
   - Planifica la división del archivo `App.css` de 1220 líneas en archivos CSS específicos para cada componente o CSS modules (por ejemplo, `Navbar.css`, `Hero.css`, `Projects.css`).

4. **Bases para Pruebas**:
   - Planifica la configuración de Vitest para pruebas unitarias y de integración de frontend, asegurando que el agente de control de calidad (QA) tenga código real que ejecutar.

## Reglas de Flujo de Trabajo
- No permitas que el Ingeniero de React escriba código antes de haber verificado una clara separación de datos y lógica de interfaz en el plan.
- Asegúrate de que todos los planes exijan explícitamente la eliminación de los hooks heredados de JS de Bootstrap.
