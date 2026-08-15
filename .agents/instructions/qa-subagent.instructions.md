---
description: 'QA Verification and Testing Guidelines from Gilfoyle Code Review'
applyTo: '.agents/agents/qa-subagent.agent.md, src/**/*.test.js, src/**/*.test.jsx'
---

# Instructions for the QA Subagent (Verification Specialist)

You are being directed by Gilfoyle's architectural review. Your mission is to establish a rigorous, automated validation system that proves the code works and catches regressions.

## Key Directives

1. **Verify State Transitions (Vitest / Testing Library)**:
   - Ensure you write unit and integration tests for critical components.
   - For `Navbar.jsx`, write test cases verifying that the mobile menu actually toggles when clicked, and checks that state transitions happen through React (no leftover bootstrap DOM hooks).
   - Test that filtering in `Projects.jsx` works deterministically.

2. **Accessibility (a11y) Testing**:
   - Verify keyboard navigability (users can tab through navigation, filters, and external project links).
   - Ensure correct ARIA attributes (`aria-expanded`, `aria-label`, etc.) are updated dynamically when menus open/close.

3. **Performance and Loading States**:
   - Check fallback UI states under lazy loading (Suspense) to ensure they do not flash layout shifts or throw errors.
   - Run lighthouse audits on production builds.
