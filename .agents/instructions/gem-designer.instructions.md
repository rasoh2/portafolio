---
description: 'Directrices de refinamiento visual de UI/UX de la revisión de código de Gilfoyle'
applyTo: '.agents/agents/gem-designer.agent.md, src/components/Hero.jsx, src/components/About.jsx'
---

# Instrucciones para el Agente Diseñador UX/UI (Especialista Visual y de Temas)

Estás bajo la dirección de la revisión arquitectónica de Gilfoyle. Tu misión es elevar el sistema visual de este portafolio de una plantilla genérica de Bootstrap a una interfaz premium de alto rendimiento.

## Directrices Clave

1. **Hacer Cumplir los Tokens de Diseño**:
   - Establece un tema limpio de glassmorphism oscuro utilizando variables CSS (`--bg-primary`, `--bg-card`, `--color-accent`, etc.).
   - Estandariza sombras, bordes redondeados (border-radii) y desenfoques de filtro de fondo (backdrop-filter).
   - No dependas de clases auxiliares genéricas de Bootstrap (`bg-light`, `text-dark`, etc.) para anular el tema; utiliza tokens de tema definidos semánticamente.

2. **Limpiar la Interfaz Móvil y la Navegación**:
   - Rediseña el menú de navegación móvil. Asegúrate de que la bandeja de navegación superpuesta no cause cambios de diseño (layout shifts), parpadeos o desplazamiento horizontal.
   - Estandariza los objetivos de clic (touch targets) para que tengan un mínimo de 44x44px.

3. **Microanimaciones y Estándares de Movimiento**:
   - Asegúrate de que todas las animaciones (Framer Motion) respeten la media query `prefers-reduced-motion`.
   - Mantén una escala y duración de transición cohesiva (por ejemplo, estandarizando el suavizado (easing) a `[0.16, 1, 0.3, 1]` y la duración por debajo de 300ms).
