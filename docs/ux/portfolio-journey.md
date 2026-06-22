# User Journey Map: Candidate Evaluation

This journey map tracks the cognitive and emotional progression of a Tech Recruiter or Engineering Lead when landing on Sebastian's portfolio to decide whether to contact him for an interview.

## User Persona
- **Who**: Tech Recruiter ("Valeria") / Engineering Lead ("Mauricio")
- **Goal**: Evaluate Sebastian's full-stack skills, unique leadership traits, and contact him/download CV.
- **Context**: Accessing the portfolio via a LinkedIn link or resume URL on a desktop or mobile device.
- **Success Metric**: CV downloaded or contact form submitted in under 45 seconds.

---

## Journey Stages

### Stage 1: Arrival & First Impression (Hero Section)
* **What user is doing**: Clicking the link, waiting for the page to load, and looking at the Hero header.
* **What user is thinking**: 
  - *"Will this site take ages to load?"*
  - *"Is this another generic, laggy template?"*
* **What user is feeling**: 
  - 😰 Impatient (recruiters scan dozens of profiles).
  - 🧐 Skeptical.
* **Pain points**:
  - Legacy preloaders that block the screen for a hardcoded time (resolved: Preloader now loads adaptively in ~200ms).
  - Heavy canvas animations that lag the CPU (resolved: Removed canvas shadows for smooth 60fps renders).
* **Opportunities**:
  - Show a high-contrast title stating full name and professional title instantly.
  - Keep the primary CTAs ("Ver Proyectos" and "Contactar") visible above the fold.

### Stage 2: Background Scrutiny (About & Timeline Section)
* **What user is doing**: Scrolling down to learn about the developer's background and experience.
* **What user is thinking**:
  - *"19 years of military experience? How does that translate to software development?"*
  - *"Is he disciplined and structured in his work?"*
* **What user is feeling**:
  - 🤔 Curious.
  - ⚡ Attracted by the unique "discipline and execution" value proposition.
* **Pain points**:
  - Long paragraphs of text without clear structure.
  - Unclear transition timeline.
* **Opportunities**:
  - Provide an interactive, clean timeline cards design.
  - Highlight soft skills such as "Liderazgo de equipos" and "Trabajo bajo presión" alongside technical achievements.

### Stage 3: Technical Validation (Skills & Projects Section)
* **What user is doing**: Filtering projects by stack (React, Vue, Full-Stack) and looking at tech badges.
* **What user is thinking**:
  - *"Does he actually write clean code? Where is the GitHub link?"*
  - *"Are these projects live, or just code snippets?"*
* **What user is feeling**:
  - 🧐 Evaluative.
  - 😌 Relieved when finding working netlify links.
* **Pain points**:
  - Projects with dead links or missing source code button.
  - Generic skill lists with fake 95% proficiency meters.
* **Opportunities**:
  - Place prominent "Demo en Vivo" and "Código" buttons on each project card.
  - Categorize skills visually into Frontend, Backend, and Analysis/Tools (with custom badges).

### Stage 4: Conversion & Contact (Contact Form & Footer)
* **What user is doing**: Typing their message in the contact form or downloading the CV.
* **What user is feeling**:
  - 😊 Confident and ready to convert.
* **What user is thinking**:
  - *"Is my message actually sending? Will he receive it?"*
  - *"Where is the PDF CV download button?"*
* **Pain points**:
  - Form validation that doesn't explain errors.
  - Form submission that takes too long or gives no feedback.
* **Opportunities**:
  - Implement real-time field validation.
  - Display clear animated checkmarks and success states when EmailJS completes.
  - Provide an obvious, floating "Descargar CV" button.
