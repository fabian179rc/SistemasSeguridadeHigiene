# ⚡ GUÍA RÁPIDA - Levanta el proyecto en 5 minutos

## Paso 1️⃣: Requisitos
Descarga e instala **Node.js** desde: https://nodejs.org/ (usa la versión LTS)

Verifica la instalación abriendo terminal/CMD y escribiendo:
```bash
node --version
npm --version
```

---

## Paso 2️⃣: Organiza tus carpetas

Crea esta estructura en tu computadora:

```
catalogo-hys/
├── src/
│   ├── main.jsx       (renombra "src-main.jsx")
│   └── App.jsx        (renombra "src-App.jsx")
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

**Resumen fácil:**
1. Crea carpeta `catalogo-hys`
2. Dentro de ella, crea carpeta `src`
3. Extrae todos los archivos ZIP en la carpeta `catalogo-hys`
4. Mueve `src-main.jsx` y `src-App.jsx` DENTRO de la carpeta `src/`
5. Renombralos quitando el "src-" (main.jsx, App.jsx)

---

## Paso 3️⃣: Abre Visual Studio Code

1. Descarga VS Code: https://code.visualstudio.com/
2. Abre VS Code
3. Click en `File` → `Open Folder`
4. Selecciona la carpeta `catalogo-hys`

---

## Paso 4️⃣: Abre la Terminal en VS Code

En VS Code, presiona: `Ctrl + Ñ` (Windows) o `Cmd + Ñ` (Mac)

O ve a: `Terminal` → `New Terminal`

Verás una terminal negra en la parte inferior.

---

## Paso 5️⃣: Instala las dependencias

En la terminal, escribe y presiona Enter:

```bash
npm install
```

⏳ Esto puede tardar 30-60 segundos. Espera hasta que termine.

---

## Paso 6️⃣: ¡Inicia el servidor!

En la terminal, escribe:

```bash
npm run dev
```

Verás algo como:
```
  VITE v4.3.9  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

---

## Paso 7️⃣: Abre en navegador

Copia la URL `http://localhost:3000/` en tu navegador.

**¡Tu catálogo está corriendo! 🎉**

---

## 🔄 Ahora puedes...

### Editar productos
- Abre `src/App.jsx`
- Busca: `const products = [`
- Edita títulos, descripciones, colores, etc.
- ¡Los cambios se actualizan automáticamente en el navegador!

### Cambiar colores
Busca en `src/App.jsx`:
- `#0d7fbf` (azul)
- `#667eea` (púrpura)
- `#f093fb` (rosa)

Y cámbialos por los que quieras.

### Detener el servidor
En la terminal: `Ctrl + C`

### Reiniciar el servidor
En la terminal: `npm run dev`

---

## 🚀 Cuando esté listo para subir a Internet

Ejecuta en la terminal:
```bash
npm run build
```

Esto crea una carpeta `dist/`.

Sube esa carpeta a:
- **Vercel** (gratis): https://vercel.com/
- **Netlify** (gratis): https://www.netlify.com/
- Tu propio hosting

---

## ⚠️ Errores comunes y soluciones

### "Command not found: npm"
→ Reinstala Node.js desde https://nodejs.org/

### "Port 3000 already in use"
→ Déjalo, Vite usará automáticamente 3001 u otro puerto

### "module not found"
→ En la terminal: `npm install`

### Los cambios no se actualizan
→ Recarga el navegador (F5 o Ctrl+R)

### Necesito volver a la pantalla de catálogo
→ Editando: Presiona `Ctrl + C` en terminal y luego `npm run dev`

---

## 📞 ¿Necesitas ayuda?

Revisa estos archivos:
- `README.md` - Documentación completa
- `ESTRUCTURA.txt` - Explicación de carpetas

---

## ✅ Checklist Final

- [ ] Node.js instalado
- [ ] Carpeta `catalogo-hys` creada
- [ ] Archivos organizados en sus carpetas
- [ ] `npm install` completado
- [ ] `npm run dev` ejecutándose
- [ ] Navegador abierto en `http://localhost:3000`

**¡Éxito! 🚀**
