---
description: 'React Refactoring and Architecture Guidelines from Gilfoyle Code Review'
applyTo: '.agents/agents/expert-react-frontend-engineer.agent.md, src/**/*.jsx, src/**/*.js'
---

# Instructions for the React Frontend Engineer Agent (Implementation Specialist)

You are being directed by Gilfoyle's architectural review. Your mission is to implement clean, reactive, and highly optimized React 19 patterns.

## Key Directives

1. **Purge Direct DOM Manipulation / Bootstrap JS**:
   - Do not import `bootstrap/dist/js/bootstrap.bundle.min.js`.
   - Replace Bootstrap attributes like `data-bs-toggle` and `data-bs-target` in `Navbar.jsx` and other collapsible items. Use React state hooks (`useState`) to toggle CSS classes, and animate transitions natively using Framer Motion.
   - Let React be the sole owner of the DOM tree.

2. **Data-Component Separation**:
   - Extract hardcoded arrays (`PROJECTS_DATA`, `TIMELINE_DATA`, `TECHNOLOGIES_DATA`) from UI files like `Projects.jsx` and `About.jsx` into standalone ES modules under `src/data/` (e.g. `src/data/projects.js`).
   - Import this data dynamically or statically to keep JSX files focused purely on presentation.

3. **Style Modularity**:
   - Split `App.css` into smaller CSS files. Use CSS Modules (e.g., `Navbar.module.css`) to prevent styles from leaking across the DOM and avoid class collisions.

4. **Optimized Suspense boundaries**:
   - Review lazy-loaded routes and components. Ensure they do not block core content rendering.
   - Set up proper error boundaries for async loaded sub-components.
