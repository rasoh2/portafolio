# 🎓 Conceptos de React - Guía Educativa

Esta guía explica los conceptos de React usados en el portafolio.

---

## 📦 ¿Qué es un Componente?

Un **componente** es como una pieza de LEGO reutilizable. En React, todo es un componente.

**Ejemplo del proyecto:**

```jsx
// Navbar.jsx es un componente
function Navbar() {
  return (
    <nav>...</nav> // Devuelve JSX (HTML en JavaScript)
  );
}

export default Navbar; // Lo exportamos para usarlo en otros archivos
```

**Para usarlo en otro archivo:**

```jsx
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar /> {/* Así usamos el componente */}
    </div>
  );
}
```

---

## 🎣 Hooks de React

Los **hooks** son funciones especiales que añaden superpoderes a los componentes.

### 1. useState - Para guardar y cambiar datos

**¿Qué hace?** Guarda información que puede cambiar (estado).

**Ejemplo del proyecto (Contact.jsx):**

```jsx
import { useState } from "react";

function Contact() {
  // Creamos una variable 'formData' y una función 'setFormData' para cambiarla
  const [formData, setFormData] = useState({
    name: "", // Valor inicial: vacío
    email: "",
    message: "",
  });

  // Función que se ejecuta cuando escribes en un input
  const handleChange = (e) => {
    const { name, value } = e.target; // Obtenemos qué input cambió

    setFormData({
      ...formData, // Copiamos los valores anteriores
      [name]: value, // Actualizamos solo el campo que cambió
    });
  };

  return (
    <input
      name='email'
      value={formData.email} // El valor viene del estado
      onChange={handleChange} // Se ejecuta al escribir
    />
  );
}
```

**Analogía:** Es como una caja donde guardas algo. useState te da:

- La caja (formData)
- Una función para cambiar lo que hay en la caja (setFormData)

---

### 2. useEffect - Para hacer cosas cuando el componente se monta

**¿Qué hace?** Ejecuta código cuando el componente aparece en pantalla o cuando algo cambia.

**Ejemplo del proyecto (Navbar.jsx):**

```jsx
import { useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta

    const handleScroll = () => {
      // Detecta si scrolleaste más de 50px
      setScrolled(window.scrollY > 50);
    };

    // Escucha el evento scroll
    window.addEventListener("scroll", handleScroll);

    // CLEANUP: Se ejecuta cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // [] = solo se ejecuta una vez al montar

  return <nav className={scrolled ? "scrolled" : ""}>...</nav>;
}
```

**Analogía:** Es como decir "cuando entres a tu casa (componente se monta), enciende la luz (ejecuta código)".

**Dependencias:**

```jsx
useEffect(() => {
  // código
}, []); // Array vacío = ejecuta solo al montar

useEffect(() => {
  // código
}, [count]); // Se ejecuta cuando 'count' cambia

useEffect(() => {
  // código
}); // Sin array = se ejecuta en cada render (¡cuidado!)
```

---

## 📝 JSX - JavaScript + HTML

**JSX** permite escribir HTML dentro de JavaScript.

**Reglas importantes:**

1. **Un solo elemento padre:**

```jsx
// ❌ MAL
return (
  <h1>Título</h1>
  <p>Párrafo</p>
);

// ✅ BIEN
return (
  <div>
    <h1>Título</h1>
    <p>Párrafo</p>
  </div>
);
```

2. **className en vez de class:**

```jsx
// ❌ MAL (class es palabra reservada en JS)
<div class="container">

// ✅ BIEN
<div className="container">
```

3. **Cerrar todas las etiquetas:**

```jsx
// ❌ MAL
<img src="...">
<input type="text">

// ✅ BIEN
<img src="..." />
<input type="text" />
```

4. **Expresiones JavaScript con llaves `{}`:**

```jsx
const name = "Juan";
const age = 25;

return (
  <div>
    <h1>Hola, {name}</h1> {/* Muestra: Hola, Juan */}
    <p>Edad: {age * 2}</p> {/* Puedes hacer operaciones */}
    <p>{age > 18 ? "Mayor" : "Menor"}</p> {/* Condicionales */}
  </div>
);
```

---

## 🔄 Renderizado Condicional

Mostrar u ocultar elementos según condiciones.

**Ejemplo del proyecto (Projects.jsx):**

```jsx
const project = {
  demoUrl: "https://demo.com", // Puede ser null
  featured: true,
};

return (
  <div>
    {/* Solo muestra el badge si featured es true */}
    {project.featured && <div className='badge'>Destacado</div>}

    {/* Solo muestra el botón si demoUrl existe */}
    {project.demoUrl && <a href={project.demoUrl}>Ver Demo</a>}

    {/* Operador ternario: if/else en una línea */}
    {project.featured ? (
      <span>⭐ Destacado</span>
    ) : (
      <span>Proyecto Regular</span>
    )}
  </div>
);
```

**Explicación:**

- `condición &&` = Si condición es true, muestra lo que sigue
- `condición ? A : B` = Si es true muestra A, sino muestra B

---

## 🔁 Listas y map()

Repetir elementos a partir de un array.

**Ejemplo del proyecto (Projects.jsx):**

```jsx
const projects = [
  { id: 1, title: "Proyecto 1" },
  { id: 2, title: "Proyecto 2" },
  { id: 3, title: "Proyecto 3" },
];

return (
  <div>
    {projects.map((project) => (
      <div key={project.id}>
        {" "}
        {/* key es OBLIGATORIO */}
        <h3>{project.title}</h3>
      </div>
    ))}
  </div>
);
```

**Resultado en HTML:**

```html
<div>
  <div><h3>Proyecto 1</h3></div>
  <div><h3>Proyecto 2</h3></div>
  <div><h3>Proyecto 3</h3></div>
</div>
```

**¿Por qué `key`?** React necesita identificar cada elemento para actualizar eficientemente.

---

## 📤 Props - Pasar datos entre componentes

Los **props** son como parámetros de funciones.

**Ejemplo:**

```jsx
// Componente hijo que recibe props
function Card({ title, description, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Componente padre que pasa props
function App() {
  return (
    <div>
      <Card title='React' description='Librería de UI' color='blue' />
      <Card title='Node.js' description='Backend JavaScript' color='green' />
    </div>
  );
}
```

**Analogía:** Es como pasar argumentos a una función.

---

## 🎯 Eventos

Reaccionar a acciones del usuario.

**Eventos comunes:**

```jsx
function Example() {
  const handleClick = () => {
    alert("¡Hiciste click!");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    console.log("Formulario enviado");
  };

  const handleChange = (e) => {
    console.log(e.target.value); // El valor del input
  };

  return (
    <div>
      {/* Click */}
      <button onClick={handleClick}>Haz click</button>

      {/* Submit */}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange} // Change
          placeholder='Escribe algo'
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
```

**Nota:** Los nombres de eventos son camelCase: `onClick`, `onChange`, `onSubmit`

---

## 🎨 Estilos en React

### Opción 1: CSS externo (usado en el proyecto)

```jsx
import "./App.css"; // Importar CSS

function App() {
  return <div className='container'>...</div>;
}
```

### Opción 2: Estilos inline

```jsx
function Example() {
  const style = {
    backgroundColor: "blue", // camelCase, no kebab-case
    fontSize: "20px",
    padding: "10px",
  };

  return <div style={style}>Texto</div>;
}
```

### Opción 3: Clases dinámicas

```jsx
function Example() {
  const isActive = true;

  return <div className={isActive ? "active" : "inactive"}>Contenido</div>;
}
```

---

## 🔗 Import/Export

### Export Default (un componente por archivo)

```jsx
// Navbar.jsx
function Navbar() {
  return <nav>...</nav>;
}

export default Navbar; // Solo uno por archivo

// App.jsx
import Navbar from "./Navbar"; // Nombre puede ser cualquiera
import Nav from "./Navbar"; // También funciona
```

### Export Named (múltiples exports)

```jsx
// utils.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// App.jsx
import { sumar, restar } from "./utils"; // Nombres exactos
```

---

## 📂 Estructura de Archivos del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Navbar.jsx   # Cada componente en su archivo
│   ├── Hero.jsx
│   └── ...
├── assets/          # Imágenes, fuentes, etc.
├── App.jsx          # Componente principal
├── App.css          # Estilos del App
├── index.css        # Estilos globales
└── main.jsx         # Punto de entrada (monta App en el DOM)
```

---

## 🚀 Flujo de una App React

1. **main.jsx** - Punto de entrada

```jsx
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
```

2. **App.jsx** - Componente raíz

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
```

3. **Navbar.jsx** - Componente individual

```jsx
function Navbar() {
  return <nav>...</nav>;
}
```

**Resultado:** React construye todo y lo inyecta en `<div id="root"></div>` del HTML.

---

## 💡 Mejores Prácticas

1. **Un componente = Un archivo**
2. **Nombres de componentes en PascalCase:** `Navbar.jsx`, `Hero.jsx`
3. **Nombres de funciones en camelCase:** `handleClick`, `fetchData`
4. **Constantes en UPPER_CASE:** `API_URL`, `MAX_ITEMS`
5. **Comentar código complejo**
6. **Componentes pequeños y reutilizables**
7. **Mantener lógica separada de UI**

---

## 🔍 Herramientas Útiles

### React DevTools (Extensión de Chrome)

- Inspecciona componentes
- Ve props y estado
- Mide rendimiento

### Vite DevServer

- Hot Module Replacement (HMR) = cambios en vivo sin recargar
- Súper rápido
- Mensajes de error claros

---

## 📚 Recursos para Aprender Más

- **Documentación oficial:** [react.dev](https://react.dev/)
- **Tutorial interactivo:** [react.dev/learn](https://react.dev/learn)
- **Vite:** [vitejs.dev](https://vitejs.dev/)
- **MDN Web Docs:** [developer.mozilla.org](https://developer.mozilla.org/)

---

## 🎯 Siguiente Paso

Ahora que entiendes los conceptos, intenta:

1. **Crear un nuevo componente** (ejemplo: `Experience.jsx`)
2. **Agregar un nuevo estado** con `useState`
3. **Modificar los proyectos** en el array
4. **Cambiar estilos** y ver los cambios en vivo

**¡Experimenta y aprende haciendo! 🚀**

---

**¿Dudas?** Lee este archivo junto con el código de cada componente. Todo tiene comentarios explicativos.
