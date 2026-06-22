---
goal: 'Refactoring Portfolio Architecture, Performance, Security and Package Lockfiles'
version: 1.0
date_created: '2026-06-21'
owner: 'Sebastian Ortega & Antigravity'
status: 'Completed'
tags: ['refactor', 'architecture', 'performance', 'security', 'cleanup']
---

# Introduction

![Status: Completed](https://img.shields.io/badge/status-Completed-brightgreen)

This implementation plan provides a structured, deterministic approach to refactor the portfolio codebase. It addresses critical architectural flaws, security issues (hardcoded API credentials), performance bottlenecks (CPU-heavy canvas rendering and artificial preloader delay), dependency inconsistencies (lockfile duplication), and HTML layout integration (CDN vs npm package management).

## 1. Requirements & Constraints

- **REQ-001**: Standardize on a single package manager (npm) by removing redundant lockfiles.
- **REQ-002**: Install and bundle styles/libraries locally (Bootstrap, Font Awesome) instead of loading them via external CDNs.
- **REQ-003**: Refactor static arrays and data configurations outside of React component render cycles to prevent unnecessary heap allocations.
- **REQ-004**: Optimize high-frequency render operations (Canvas particle system) to avoid CPU throttle.
- **SEC-001**: Move client-side integration keys and service identifiers to environment variables.
- **CON-001**: Maintain existing design aesthetics, animation transitions, and layout structure intact.
- **GUD-001**: Strictly avoid modifications to UI visual definitions unless optimization is required.
- **PAT-001**: Follow standard React 19 / Vite structure and conventions.

## 2. Implementation Steps

### Implementation Phase 1: Environment & Dependency Cleanup

- GOAL-001: Establish a clean build environment and consolidate dependency management.

| Task     | Description | Completed | Date |
| -------- | ----------- | --------- | ---- |
| TASK-001 | Delete [yarn.lock](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/yarn.lock) from project root to resolve lockfile identity crisis. | ✅        | 2026-06-21 |
| TASK-002 | Install `bootstrap` and `@fortawesome/fontawesome-free` packages locally as npm dependencies: `npm install bootstrap @fortawesome/fontawesome-free`. | ✅        | 2026-06-21 |
| TASK-003 | Create a `.env` template file at root directory `[NEW] .env.example` defining keys `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`. | ✅        | 2026-06-21 |
| TASK-004 | Create the local environment file `[NEW] .env` populated with active EmailJS keys (`service_ajdpxs8`, `template_0uey8lt`, `C8-WrHIIgWEB1FXae`). | ✅        | 2026-06-21 |

### Implementation Phase 2: HTML Integration & Styling Migration

- GOAL-002: Migrate styling assets from CDNs into local bundle dependencies.

| Task     | Description | Completed | Date |
| -------- | ----------- | --------- | ---- |
| TASK-005 | Remove CDN links for Bootstrap CSS/JS and Font Awesome CSS from [index.html](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/index.html#L48-L58) and [index.html:L72-74](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/index.html#L72-L74). | ✅        | 2026-06-21 |
| TASK-006 | Add local stylesheet and script imports in [main.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/main.jsx) to load Bootstrap CSS (`bootstrap/dist/css/bootstrap.min.css`), Bootstrap JS (`bootstrap/dist/js/bootstrap.bundle.min.js`), and Font Awesome (`@fortawesome/fontawesome-free/css/all.min.css`). | ✅        | 2026-06-21 |

### Implementation Phase 3: Component Logic & Performance Refactoring

- GOAL-003: Optimize component render performance and secure secrets.

| Task     | Description | Completed | Date |
| -------- | ----------- | --------- | ---- |
| TASK-007 | Refactor [Contact.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Contact.jsx#L97-L102) to read credentials from environment variables (`import.meta.env.VITE_EMAILJS_SERVICE_ID`, etc.) instead of hardcoded strings. | ✅        | 2026-06-21 |
| TASK-008 | Extract the static `projects` list in [Projects.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Projects.jsx#L22) and place it outside the React functional component definition to prevent constant re-allocation of arrays during renders. | ✅        | 2026-06-21 |
| TASK-009 | Extract the static `skillsData` list in [Skills.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Skills.jsx#L10) and place it outside the component definition. | ✅        | 2026-06-21 |
| TASK-010 | Extract the `timelineData` and `technologies` lists in [About.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/About.jsx#L14) outside the component definition. | ✅        | 2026-06-21 |
| TASK-011 | Optimize [Hero.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Hero.jsx#L182-L190) particle system: remove heavy `ctx.shadowBlur` and `ctx.shadowColor` operations inside the frame loop, replacing them with a small translucent border or flat solid circles to improve rendering speed, especially on mobile/retina devices. | ✅        | 2026-06-21 |
| TASK-012 | Refactor [Preloader.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Preloader.jsx#L24-L44) to base animation transition on actual window loading events (`window.onload`) or significantly shorten the fallback simulator duration to improve Lighthouse score. | ✅        | 2026-06-21 |

## 3. Alternatives

- **ALT-001**: Keep the CDN links for Bootstrap. Discarded because CDNs trigger extra DNS lookups, block loading during network connectivity drops, and decouple version management from the package manager.
- **ALT-002**: Replace the Canvas particle system in `Hero.jsx` entirely with a CSS-based particle background or three.js scene. Discarded because canvas-based interactive spring calculations look excellent and refactoring to a standard solid circle without canvas-shadows achieves the same visual appeal at a fraction of the computation cost.

## 4. Dependencies

- **DEP-001**: `bootstrap@^5.3.2` — required for the responsiveness layout system.
- **DEP-002**: `@fortawesome/fontawesome-free@^6.5.1` — required for section icons.

## 5. Files

- **FILE-001**: [package.json](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/package.json) - to declare local dependency additions.
- **FILE-002**: [yarn.lock](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/yarn.lock) - file to be deleted.
- **FILE-003**: [index.html](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/index.html) - to remove CDN dependencies.
- **FILE-004**: [main.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/main.jsx) - to import local assets.
- **FILE-005**: [About.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/About.jsx) - to optimize constant references.
- **FILE-006**: [Contact.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Contact.jsx) - to apply environment configurations.
- **FILE-007**: [Hero.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Hero.jsx) - to eliminate canvas render bottlenecks.
- **FILE-008**: [Projects.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Projects.jsx) - to optimize static arrays.
- **FILE-009**: [Skills.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Skills.jsx) - to optimize static arrays.

## 6. Testing

- **TEST-001**: Run a local dev server with `npm run dev` to verify the page renders without errors and Bootstrap styles are applied successfully.
- **TEST-002**: Test the Contact Form manually to ensure that EmailJS submits correctly when environment variables are injected.
- **TEST-003**: Run Chrome DevTools Performance Profiler on the Home page to measure CPU load before and after canvas optimizations.
- **TEST-004**: Audit building and bundling by running `npm run build` to verify webpack/vite finishes cleanly without unresolved references.

## 7. Risks & Assumptions

- **RISK-001**: Canvas interaction might look slightly less "glowing" without shadow blur. *Mitigation*: Adjust particle sizes slightly or use radial gradients as particle fills to preserve depth without the performance penalty of native Canvas shadow properties.
- **ASSUMPTION-001**: The user has EmailJS config values handy to put into `.env`. If not, the template `.env.example` will guide them.

## 8. Related Specifications / Further Reading

- [Vite Environment Variables & Modes Documentation](https://vitejs.dev/guide/env-and-mode)
- [MDN Canvas Rendering Performance Tips](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
- [React Static Analysis Guidelines](https://react.dev/reference/react/useMemo)
