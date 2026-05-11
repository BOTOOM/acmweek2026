# ACM Week 2026 — Web Slides

Presentaciones web animadas para la charla de ACM Week 2026.  
Desplegadas automáticamente en GitHub Pages vía GitHub Actions.

## Estructura

```
/
├── index.html                  ← Menú principal con grid de slides
├── slides/
│   ├── 01-intro/index.html     ← Slide de introducción
│   ├── 02-animaciones/index.html ← Demo GSAP + Lottie
│   └── 03-flujos/index.html    ← Flujos animados + Mermaid + HyperFrames
├── assets/
│   ├── css/base.css            ← Estilos compartidos
│   └── js/nav.js               ← Navegación (teclado, swipe, progress bar)
└── .github/workflows/
    └── deploy.yml              ← CI/CD → GitHub Pages
```

## Agregar una nueva slide

1. Crea la carpeta: `slides/04-mi-slide/`
2. Copia `slides/01-intro/index.html` como base
3. Actualiza `current`, `total`, `prev`, `next` en `initSlide()`
4. Añade la card en `index.html`

## Animaciones disponibles

| Herramienta | CDN / Paquete | Uso |
|-------------|--------------|-----|
| **GSAP** | `cdn.jsdelivr.net/npm/gsap@3.12.5` | Timelines, stagger, entrance |
| **Anime.js** | `cdn.jsdelivr.net/npm/animejs@3.2.2` | Animaciones simples |
| **Lottie** | `cdn.jsdelivr.net/npm/@dotlottie/player-component` | JSON animations |
| **Mermaid** | `cdn.jsdelivr.net/npm/mermaid@11` | Diagramas de flujo |
| **HyperFrames** | `npm install hyperframes` | HTML → video embebido |

## Skills instaladas

```bash
# HyperFrames (14 skills oficiales de HeyGen)
npx skills add heygen-com/hyperframes

# GSAP oficiales de GreenSock
npx skills add greensock/gsap-skills@gsap-core
npx skills add greensock/gsap-skills@gsap-timeline
npx skills add greensock/gsap-skills@gsap-scrolltrigger

# Deploy GitHub Pages
npx skills add aviz85/claude-skills-library@gh-pages-deploy
```

## Deploy

1. Crea el repositorio en GitHub
2. Ve a **Settings → Pages → Source**: selecciona `GitHub Actions`
3. Haz push a `main` — el workflow despliega automáticamente

## Navegación

- **← →** o **flechas del teclado**: slide anterior / siguiente
- **ESC / Home**: volver al menú
- **Swipe** en móvil: izquierda / derecha
