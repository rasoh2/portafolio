# 📝 Guía de Personalización

## Archivos principales a editar

### `Hero.jsx` - Página de inicio

- Nombre y descripción
- Links sociales (GitHub, LinkedIn, email)

### `About.jsx` - Sobre mí

- Foto de perfil: `src="URL_DE_TU_FOTO"`
- Descripción profesional
- Datos personales (ubicación, educación, experiencia)
- CV: Coloca `cv.pdf` en carpeta `public/`

### `Projects.jsx` - Proyectos

```jsx
const projects = [
  {
    id: 1,
    title: "Nombre proyecto",
    description: "Descripción...",
    image: "URL_imagen",
    technologies: ["React", "Node.js"],
    demoUrl: "URL_demo",
    repoUrl: "URL_github",
    featured: true,
  },
];
```

- Imágenes: coloca en `src/assets/` e importa

### `Skills.jsx` - Habilidades

```jsx
const skillsData = {
  frontend: [
    { name: "JavaScript", level: 90, icon: "fab fa-js", color: "#F7DF1E" },
  ],
};
```

### `Contact.jsx` - Contacto

- Email, teléfono, ubicación
- Links sociales
- Formulario: usa [Formspree](https://formspree.io/) para hacerlo funcional

### `Footer.jsx` - Pie de página

- Nombre/marca
- Descripción
- Copyright

### `App.css` - Colores

```css
:root {
  --primary-color: #6c63ff;
  --secondary-color: #4caf50;
  --dark-color: #1a1a2e;
}
```

## Recursos útiles

- **Iconos:** [fontawesome.com/icons](https://fontawesome.com/icons)
- **Gradientes:** [cssgradient.io](https://cssgradient.io/)
- **Favicon:** [favicon.io](https://favicon.io/)
- **Comprimir imágenes:** [tinypng.com](https://tinypng.com/)
