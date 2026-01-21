# 🚀 Portafolio Personal - Desarrollador Full Stack

Portafolio web profesional construido con **React**, **Vite** y **Bootstrap**, diseñado para mostrar proyectos y habilidades como desarrollador Full Stack JavaScript.

## ✨ Características

- ✅ **Diseño Moderno y Responsivo**: Adaptado a desktop, tablet y móvil
- ✅ **Navegación Suave**: Scroll suave entre secciones
- ✅ **Animaciones Profesionales**: Efectos hover y transiciones
- ✅ **Formulario de Contacto Funcional**: Con validación
- ✅ **Secciones Completas**: Hero, Sobre Mí, Proyectos, Habilidades, Contacto
- ✅ **Optimizado para SEO**: Estructura semántica HTML5
- ✅ **Código Limpio**: Componentes React organizados y comentados

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 18** - Librería para interfaces de usuario
- **Vite** - Build tool ultra rápido
- **Bootstrap 5** - Framework CSS (vía CDN)
- **Font Awesome** - Iconos profesionales
- **Google Fonts** - Tipografías Poppins e Inter

### Herramientas

- **Yarn** - Gestor de paquetes
- **ESLint** - Linter para JavaScript
- **Git** - Control de versiones

## 📦 Estructura del Proyecto

```
webportafolio/
│
├── public/              # Archivos estáticos
│   └── vite.svg
│
├── src/                 # Código fuente
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx      # Barra de navegación
│   │   ├── Hero.jsx        # Sección hero/inicio
│   │   ├── About.jsx       # Sobre mí
│   │   ├── Projects.jsx    # Proyectos destacados
│   │   ├── Skills.jsx      # Habilidades técnicas
│   │   ├── Contact.jsx     # Formulario de contacto
│   │   └── Footer.jsx      # Pie de página
│   │
│   ├── assets/          # Imágenes y recursos
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos personalizados
│   ├── index.css        # Estilos globales
│   └── main.jsx         # Punto de entrada
│
├── index.html           # HTML principal
├── package.json         # Dependencias
├── vite.config.js       # Configuración de Vite
├── eslint.config.js     # Configuración de ESLint
└── README.md            # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (v16 o superior)
- Yarn o npm instalado

### Pasos de instalación

1. **Instalar dependencias**

   ```bash
   yarn install
   # o
   npm install
   ```

2. **Iniciar servidor de desarrollo**

   ```bash
   yarn dev
   # o
   npm run dev
   ```

3. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🎨 Personalización

### 1. Información Personal

Edita los siguientes archivos para agregar tu información:

#### Hero.jsx (Sección principal)

```jsx
<h1>Tu Nombre Completo</h1>
<p>Tu descripción profesional...</p>
```

#### About.jsx (Sobre mí)

```jsx
const technologies = [
  // Agrega o modifica tecnologías
];
```

#### Projects.jsx (Proyectos)

```jsx
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción...",
    // ... más campos
  },
];
```

### 2. Colores y Estilos

Modifica las variables CSS en `src/App.css`:

```css
:root {
  --primary-color: #6c63ff; /* Color principal */
  --secondary-color: #4caf50; /* Color secundario */
  --dark-color: #1a1a2e; /* Color oscuro */
}
```

### 3. Enlaces Sociales

Actualiza los links en todos los componentes:

```jsx
<a href="https://github.com/TU_USUARIO">GitHub</a>
<a href="https://linkedin.com/in/TU_USUARIO">LinkedIn</a>
<a href="mailto:TU_EMAIL@ejemplo.com">Email</a>
```

## 📱 Secciones del Portafolio

### 1. **Header / Hero**

- Nombre y rol profesional
- Descripción breve
- Botones de acción
- Enlaces a redes sociales

### 2. **Sobre Mí**

- Resumen profesional
- Tecnologías principales

### 3. **Proyectos**

- Cards con información
- Enlaces a demo y repositorio

### 4. **Habilidades**

- Frontend, Backend y Herramientas
- Barras de progreso

### 5. **Contacto**

- Formulario funcional
- Información de contacto

### 6. **Footer**

- Links y redes sociales
- Copyright

## 🔧 Scripts Disponibles

```bash
# Desarrollo
yarn dev          # Inicia servidor de desarrollo

# Producción
yarn build        # Construye para producción
yarn preview      # Previsualiza build de producción

# Linting
yarn lint         # Ejecuta ESLint
```

## 🌐 Despliegue

### Netlify

1. Crea cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio
3. Build command: `yarn build`
4. Publish directory: `dist`

### Vercel

1. Crea cuenta en [Vercel](https://vercel.com)
2. Importa desde GitHub
3. Deploy automático

## 📝 Mejoras Futuras

- [ ] Modo oscuro
- [ ] Backend para formulario
- [ ] Blog personal
- [ ] Multiidioma
- [ ] Animaciones AOS

## 📄 Licencia

MIT License

---

⭐ Dale una estrella si te fue útil

Hecho con React
