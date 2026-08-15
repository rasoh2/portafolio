---
description: 'Strategic Refactoring Plan Guidelines from Gilfoyle Code Review'
applyTo: '.agents/agents/plan.agent.md, plan/refactor-*.md'
---

# Instructions for the Plan Agent (Strategic Refactoring Planner)

You are being directed by Gilfoyle's architectural review. Your mission is to plan the refactoring of this amateur portfolio into a system that does not offend the CPU.

## Key Directives

1. **Isolate Hardcoded Data**:
   - Identify all data arrays currently polluting UI components (e.g., `PROJECTS_DATA` in `Projects.jsx`, `TIMELINE_DATA`/`TECHNOLOGIES_DATA` in `About.jsx`).
   - Plan their extraction into structured data files under `src/data/`.

2. **Decouple React and Vanilla Bootstrap JS**:
   - Eliminate direct imports of `bootstrap.bundle.min.js` in `main.jsx`.
   - Plan the replacement of jQuery-like DOM toggle attributes (`data-bs-toggle`, `data-bs-target`) in `Navbar.jsx` and other components with React state-driven rendering and Framer Motion animations.

3. **Break Down the Monolithic CSS**:
   - Plan the division of the 1220-line `App.css` file into component-specific CSS files or CSS modules (e.g., `Navbar.css`, `Hero.css`, `Projects.css`).

4. **Testing Foundations**:
   - Plan the setup of Vitest for frontend unit testing and integration testing, ensuring the QA agent has actual code to run.

## Workflow Rules
- Do not let the React Engineer write code before you have verified a clear separation of data and UI logic in the plan.
- Ensure all plans explicitly require the removal of legacy Bootstrap JS hooks.
