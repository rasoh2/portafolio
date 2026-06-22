# User Flow & Accessibility Specification

This specification outlines the navigational pathways, UI flow steps, design standards, and accessibility requirements implemented to make the portfolio accessible and easy to parse.

## 1. User Flow Diagram (Navigational Stages)

### Entry Point
- User lands from external link (LinkedIn, resume PDF, GitHub).

### Navigation Pathway
```
[1. Adaptive Preloader] (~200ms load)
         │
         ▼
[2. Hero Landing] ───────► (CTA: Ver Proyectos) ──────┐
         │                                            │
         ▼                                            ▼
[3. Bio & Timeline] ─────► (CTA: Descargar CV) ───► [Download PDF]
         │
         ▼
[4. Project Showcase] ───► (Filters / Live Demo / GitHub Code)
         │
         ▼
[5. Skills Grid]
         │
         ▼
[6. Contact Form] ──────► (Real-time Validation) ──► [EmailJS Submit]
```

### Exit Points
- **Success A**: Downloaded PDF CV.
- **Success B**: Contact Form successfully submitted.
- **Success C**: Clicked through to GitHub profile / project repositories.

---

## 2. Core Design Principles

1. **Progressive Disclosure**: Detailed career details on the timeline are hidden by default and expand on demand ("Ver detalles") to keep the initial page load scannable.
2. **Instant Visual Validation**: Checkmarks, loading states on buttons, and validation text provide immediate, reassuring feedback for user actions.
3. **No Decorative Barriers**: Fast load times, responsive flexbox layout, and flat, clean graphics replace slow-loading CDNs and CPU-heavy canvas shadows.

---

## 3. WCAG 2.1 AA Accessibility Checklist

The following accessibility criteria are implemented within the codebase to ensure keyboard and assistive technology compatibility:

### Keyboard Navigation & Focus
- [x] **Focus Ring Visibility**: Implemented high-contrast focus outlines in global styles (`:focus-visible`) for all buttons, inputs, and links.
- [x] **Tab Order Consistency**: All interactive links and form controls follow a natural document structure order (top-to-bottom, left-to-right).
- [x] **Modal & Collapse Controls**: Menu toggles and interactive cards can be focused and activated via the `Enter` or `Space` key.
- [x] **Smooth Anchor Navigation**: Provided `scroll-padding-top: 80px` on root element to ensure keyboard focus target elements are not hidden beneath the fixed sticky Navbar.

### Assistive Technology (Screen Readers)
- [x] **Semantic HTML5 Markup**: Used structural layout elements (`<nav>`, `<main>`, `<section>`, `<footer>`, `<header>`) instead of generic div wrappers.
- [x] **Image Alt Text Attributes**: Added descriptive `alt` tags to all static project thumbnails (e.g., `proyecto1.png`).
- [x] **Aria Labels**: Set descriptive `aria-label` tags for social icon anchors (e.g., `aria-label="GitHub de Sebastian"`).
- [x] **Explicit Form Labels**: Provided associated `htmlFor` attributes on all form inputs in the Contact section to pair them with `<label>` tags.

### Visual & Contrast Criteria
- [x] **Contrast Ratio Minimum**: Main text colors meet the WCAG AA minimum contrast ratio of `4.5:1` against midnight-blue background variables.
- [x] **No Color-Only Cues**: Validation states (errors and success notifications) use icon warnings/checkmarks combined with color to guide color-blind users.
- [x] **Touch Target Sizes**: All buttons, links, and filter inputs meet the minimum target dimension of `44x44px` to ensure mobile tap accuracy.
