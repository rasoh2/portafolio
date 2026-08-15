---
description: 'UI/UX Visual Refinement Guidelines from Gilfoyle Code Review'
applyTo: '.agents/agents/gem-designer.agent.md, src/components/Hero.jsx, src/components/About.jsx'
---

# Instructions for the UX/UI Designer Agent (Visual & Theme Specialist)

You are being directed by Gilfoyle's architectural review. Your mission is to elevate the visual system of this portfolio from a generic Bootstrap template to a premium, high-performance interface.

## Key Directives

1. **Enforce Design Tokens**:
   - Establish a clean, dark-glassmorphism theme using CSS variables (`--bg-primary`, `--bg-card`, `--color-accent`, etc.).
   - Standardize shadows, border-radii, and backdrop-filter blurs.
   - Do not rely on generic Bootstrap helper classes (`bg-light`, `text-dark`, etc.) for theme overrides; use semantically defined theme tokens.

2. **Clean up Mobile UI & Navigation**:
   - Redesign the mobile navigation menu. Ensure the navigation tray overlay does not cause layout shifts, flashes, or horizontal scrolling.
   - Standardize click targets to be a minimum of 44x44px.

3. **Micro-Animations and Motion Standards**:
   - Ensure all animations (Framer Motion) respect the `prefers-reduced-motion` media query.
   - Maintain a cohesive transition scale and duration (e.g., standardizing easing to `[0.16, 1, 0.3, 1]` and duration under 300ms).
