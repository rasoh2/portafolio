---
goal: 'Final Codebase Refinements and UX Research/Accessibility Documentation'
version: 2.0
date_created: '2026-06-21'
owner: 'Sebastian Ortega, Gilfoyle & UX Designer Agent'
status: 'Completed'
tags: ['refactor', 'ux', 'accessibility', 'optimization']
---

# Introduction

![Status: Completed](https://img.shields.io/badge/status-Completed-brightgreen)

This implementation plan merges the remaining technical cleanups from Gilfoyle's review (redundant data allocations in navigation elements and render-time date calculations) with the UX/UI Designer Agent guidelines (formalizing Jobs-to-be-Done, Recruiter Journey Maps, and Accessibility Checklists).

## 1. Requirements & Constraints

- **REQ-001**: Remove heap allocation overhead in [Navbar.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Navbar.jsx) by extracting navigation static arrays outside the component's functional scope.
- **REQ-002**: Avoid recreation of `Date` instances in [Footer.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Footer.jsx) during functional component renders.
- **REQ-003**: Formalize target UX profile (recruiter vs tech lead) and pain points in `docs/ux/portfolio-jtbd.md`.
- **REQ-004**: Map the user decision funnel stages in `docs/ux/portfolio-journey.md`.
- **REQ-005**: Document structural flow and WCAG accessibility criteria in `docs/ux/portfolio-flow.md`.
- **CON-001**: Preserve existing visual elements and page layouts.
- **GUD-001**: Align UX documents with the established template formats.

## 2. Implementation Steps

### Implementation Phase 1: Codebase Refinements (Gilfoyle's Feedback)

- GOAL-001: Resolve final static array re-allocations and date calculation issues in layout elements.

| Task     | Description | Completed | Date |
| -------- | ----------- | --------- | ---- |
| TASK-001 | Extract navigation menu text and anchor target arrays outside of the component functional scope in [Navbar.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Navbar.jsx#L59) to prevent garbage collection spikes. | ✅        | 2026-06-21 |
| TASK-002 | Extract current year extraction logic outside the component functional scope in [Footer.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Footer.jsx#L6) or memoize it to prevent new date instantiation on render. | ✅        | 2026-06-21 |

### Implementation Phase 2: UX Research & Accessibility Documentation (UX Designer Feedback)

- GOAL-002: Author and compile Figma-ready UX guidelines, user journey maps, and accessibility requirements.

| Task     | Description | Completed | Date |
| -------- | ----------- | --------- | ---- |
| TASK-003 | Create `[NEW] docs/ux/portfolio-jtbd.md` defining Job Statements for Recruiter and Tech Lead profiles, plus current market pain points. | ✅        | 2026-06-21 |
| TASK-004 | Create `[NEW] docs/ux/portfolio-journey.md` specifying stages (Awareness, Exploration, Action, Outcome), user thoughts, and emotions. | ✅        | 2026-06-21 |
| TASK-005 | Create `[NEW] docs/ux/portfolio-flow.md` defining user flow stages, design principles, and a detailed WCAG checklist (contrast, keyboard navigation, labels). | ✅        | 2026-06-21 |

## 3. Alternatives

- **ALT-001**: Retain `new Date().getFullYear()` inside `Footer.jsx`. Discarded because even minor execution overhead on layout elements is technically suboptimal and simple extraction to module level resolves it permanently.

## 4. Dependencies

- None.

## 5. Files

- **FILE-001**: [Navbar.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Navbar.jsx) - to extract static arrays.
- **FILE-002**: [Footer.jsx](file:///c:/Users/Sebastian/Desktop/Programacion/proyectos/webPortafolio/src/components/Footer.jsx) - to optimize current year evaluation.
- **FILE-003**: `docs/ux/portfolio-jtbd.md` - new UX JTBD file.
- **FILE-004**: `docs/ux/portfolio-journey.md` - new user journey file.
- **FILE-005**: `docs/ux/portfolio-flow.md` - new flow and accessibility file.

## 6. Testing

- **TEST-001**: Run `npm run build` to confirm compilation is successful with the new Navbar/Footer configurations.
- **TEST-002**: Run `npm run lint` to verify that code formatting and references are sound.
- **TEST-003**: Check file system structure to verify `docs/ux/` contains all three required documents.

## 7. Risks & Assumptions

- **ASSUMPTION-001**: Creating documentation under `docs/ux/` does not break any hot-reload or routing paths in the Vite configuration.
