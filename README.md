# Elvis Codev — Portafolio Personal

Sitio web de portafolio profesional construido con Node.js y Express. Presenta mis proyectos, habilidades y formas de contacto.

![Portafolio Preview](public/images/portada-portafolio.png)

🔗 **Demo en vivo:** [portafolio.vercel.app](https://portafolio-proyectos-gamma.vercel.app)

---

## Proyectos que presenta

- **Gestión de Tareas** — App Full Stack con autenticación JWT y PostgreSQL
- **Buscador de Recetas** — SPA con consumo de API y efecto flip en tarjetas
- **Portafolio Personal** — Este mismo sitio

---

## Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Instalación y uso

### Requisitos previos
- Node.js v18 o superior
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/portafolio-elvis/Portafolio_Proyectos.git

# 2. Entrar a la carpeta
cd Portafolio_Proyectos

# 3. Instalar dependencias
npm install

# 4. Iniciar en desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:3000
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor en producción |
| `npm run dev` | Inicia el servidor con nodemon (recarga automática) |

---

## Estructura del proyecto

```
Portafolio_Proyectos/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── images/
├── server.js
├── package.json
└── vercel.json
```

---

## Despliegue en Vercel

El proyecto está configurado para desplegarse en Vercel con el archivo `vercel.json` incluido.

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

---

© 2026 Elvis Andrade
