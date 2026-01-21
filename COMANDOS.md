# ⚡ Comandos Útiles - Cheat Sheet

Comandos esenciales para trabajar con tu portafolio React + Vite.

---

## 🚀 Desarrollo

### Iniciar servidor de desarrollo

```bash
cd webportafolio
yarn dev
```

- Abre automáticamente en `http://localhost:5173`
- Los cambios se ven instantáneamente (Hot Module Replacement)
- Ctrl + C para detener el servidor

### Ver en móvil (misma red WiFi)

```bash
yarn dev --host
```

- Te mostrará una IP de red (ejemplo: http://192.168.1.10:5173)
- Abre esa URL en tu móvil

---

## 📦 Instalación

### Instalar todas las dependencias

```bash
yarn install
# o
npm install
```

Úsalo cuando:

- Clonas el proyecto por primera vez
- Alguien agregó nuevas dependencias

### Agregar una nueva librería

```bash
yarn add nombre-libreria
# Ejemplo:
yarn add axios  # Cliente HTTP
yarn add react-router-dom  # Enrutamiento
```

### Agregar dependencia de desarrollo

```bash
yarn add -D libreria
# Ejemplo:
yarn add -D sass  # Preprocesador CSS
```

---

## 🏗️ Producción

### Construir para producción

```bash
yarn build
```

- Genera carpeta `dist/` optimizada
- Minifica JavaScript y CSS
- Listo para subir a hosting

### Previsualizar build de producción

```bash
yarn preview
```

- Prueba la versión optimizada localmente
- Abre en `http://localhost:4173`

---

## 🧹 Limpieza

### Limpiar node_modules y reinstalar

```bash
rm -r node_modules
rm yarn.lock
yarn install
```

### Limpiar caché de Vite

```bash
rm -r node_modules/.vite
yarn dev
```

---

## 📝 Git

### Inicializar repositorio

```bash
git init
git add .
git commit -m "Initial commit: Portfolio setup"
```

### Conectar con GitHub

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

### Workflow diario

```bash
# Ver cambios
git status

# Agregar todos los cambios
git add .

# Commit con mensaje
git commit -m "Descripción de cambios"

# Subir a GitHub
git push
```

### Ver historial

```bash
git log --oneline
```

### Deshacer cambios (cuidado!)

```bash
# Deshacer cambios no guardados
git checkout .

# Volver al commit anterior
git reset --hard HEAD~1
```

---

## 🔍 Inspección

### Ver versión de Node

```bash
node --version
# Debe ser v16 o superior
```

### Ver versión de Yarn

```bash
yarn --version
```

### Listar dependencias instaladas

```bash
yarn list --depth=0
```

### Ver tamaño del build

```bash
yarn build
# Revisa el output, muestra tamaño de cada archivo
```

---

## 🐛 Debugging

### Ver errores detallados

```bash
yarn dev --debug
```

### Limpiar caché del navegador

- Chrome: Ctrl + Shift + R
- Firefox: Ctrl + F5

### Ver puerto usado

```bash
# Windows
netstat -ano | findstr :5173

# Si quieres liberar el puerto
taskkill /PID NUMERO_PID /F
```

### Cambiar puerto (si 5173 está ocupado)

Edita `vite.config.js`:

```js
export default {
  server: {
    port: 3000, // Cambia a otro puerto
  },
};
```

---

## 📊 Análisis

### Ver tamaño de dependencias

```bash
yarn why nombre-libreria
```

### Analizar bundle (instalar primero)

```bash
yarn add -D rollup-plugin-visualizer
yarn build
# Se genera un archivo stats.html
```

---

## 🎨 Formateo (opcional)

### Instalar Prettier

```bash
yarn add -D prettier
```

### Formatear todo el código

```bash
npx prettier --write "src/**/*.{js,jsx,css}"
```

---

## 🚀 Despliegue

### Netlify (vía CLI)

```bash
# Instalar CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Vercel (vía CLI)

```bash
# Instalar CLI
npm install -g vercel

# Login y deploy
vercel
```

### GitHub Pages

```bash
# Instalar
yarn add -D gh-pages

# Agregar a package.json
"homepage": "https://USUARIO.github.io/REPO",
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d dist"
}

# Deploy
yarn deploy
```

---

## 🔧 Configuración

### Editar configuración de Vite

Archivo: `vite.config.js`

```js
export default {
  server: {
    port: 3000, // Puerto personalizado
    open: true, // Abre navegador automáticamente
  },
  build: {
    outDir: "build", // Cambiar carpeta de salida
  },
};
```

### Variables de entorno

Crea archivo `.env` en la raíz:

```
VITE_API_URL=https://api.ejemplo.com
VITE_APP_NAME=Mi Portafolio
```

Úsalas en el código:

```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📚 Documentación

### Abrir docs de React

```bash
# Windows
start https://react.dev

# O simplemente busca en Google: "React docs"
```

### Buscar componentes de Bootstrap

```bash
start https://getbootstrap.com/docs/5.3/components/
```

---

## 🎯 Atajos de VS Code

Mientras desarrollas:

- `Ctrl + P` - Buscar archivo
- `Ctrl + Shift + P` - Comando de VS Code
- `Ctrl + B` - Toggle sidebar
- `Ctrl + J` - Toggle terminal
- `Ctrl + K, Ctrl + S` - Atajos de teclado
- `Alt + Z` - Word wrap
- `Ctrl + /` - Comentar línea

---

## 🆘 Solución de Problemas

### Error: "Cannot find module"

```bash
yarn install
```

### Error: "Port 5173 already in use"

```bash
# Mata el proceso
netstat -ano | findstr :5173
taskkill /PID NUMERO_PID /F

# O cambia el puerto en vite.config.js
```

### Error: "ENOENT: no such file or directory"

Verifica que estás en la carpeta correcta:

```bash
cd webportafolio
pwd  # Ver ruta actual
```

### Cambios no se reflejan

1. Guarda el archivo (Ctrl + S)
2. Limpia caché: Ctrl + Shift + R
3. Reinicia el servidor: Ctrl + C y `yarn dev`

---

## ✅ Checklist antes de Deploy

- [ ] `yarn build` funciona sin errores
- [ ] `yarn preview` muestra el sitio correctamente
- [ ] Todas las imágenes cargan
- [ ] Links funcionan
- [ ] Responsive en móvil
- [ ] Formulario de contacto configurado
- [ ] Información personal actualizada
- [ ] CV descargable agregado
- [ ] README.md actualizado
- [ ] .gitignore incluye node_modules y dist

---

## 🔗 Links Rápidos

- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **Bootstrap:** https://getbootstrap.com
- **Font Awesome:** https://fontawesome.com/icons
- **MDN Web Docs:** https://developer.mozilla.org
- **Can I Use:** https://caniuse.com (compatibilidad de navegadores)

---

**Tip:** Guarda este archivo en tus marcadores para tenerlo siempre a mano! 📌
