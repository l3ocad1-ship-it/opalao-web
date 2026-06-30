# OPALAO — Contexto del Proyecto

Espacio holístico de sanación en Oaxaca, México (fundadora: Jassibe / "Jaz"). Web oficial.
**Dominio de producción: https://opalaohealing.com** (deploy final a Hostinger, pendiente). Email: contact@opalaohealing.com.
Sesión jun-2026: se aplicó tanda grande de feedback del cliente (textos, Hero, galería, footer) + optimización SEO/AEO/GEO completa. El cliente sigue revisando vía capturas; se itera sobre lo que pide.
**Nota de marca:** ya NO se usa la palabra "Centro" (no es un centro) → "Opalao" o "Espacio Holístico". No reintroducir "Centro Opalao"/"Centro Holístico".

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** + estilos inline para casos especiales
- **Framer Motion** (animaciones por scroll, fades, transformaciones)
- **wouter** (routing ligero)
- Origen: scaffold inicial generado con **Manus AI** (por eso assets en `client/public/manus-storage/`)

## Estructura

```
opalao-web/                        ← raíz del proyecto (abrir aquí en VS Code)
├── client/
│   ├── public/
│   │   ├── frames_hero/           ← 217 frames WebP del Hero (YA OPTIMIZADOS, 1920px)
│   │   ├── video_cascada/         ← video loop mp4 + poster (YA OPTIMIZADO, ~7MB)
│   │   ├── mariposas/sprite/      ← 12 frames de aleteo de mariposa
│   │   ├── manus-storage/         ← fotos, texturas, logos (nombres legacy NO-SEO)
│   │   ├── servicios/ galeria/ retiros/ blog/ productos/  ← fotos con nombres SEO
│   │   ├── og-image.jpg           ← imagen para compartir 1200x630 (cascada+logo)
│   │   ├── favicon.svg favicon-*.png apple-touch-icon.png  ← favicons de marca
│   │   └── robots.txt sitemap.xml .htaccess  ← SEO + canonicalización Apache/Hostinger
│   ├── src/
│   │   ├── components/            ← HeroSection, PageButterflies, Navbar, etc.
│   │   ├── contexts/              ← LanguageContext (ES/EN), ThemeContext
│   │   └── pages/                 ← Home, NotFound
│   └── index.html                 ← <head> con SEO completo + JSON-LD (ver sección SEO)
├── vite.config.ts                 ← base configurable via DEPLOY_BASE
├── publicar.mjs                   ← script de deploy a GitHub Pages
└── package.json
```

## Despliegues (DOS destinos, ambos listos)

### GitHub Pages (preview para el cliente)
```bash
node publicar.mjs
```
- URL: https://l3ocad1-ship-it.github.io/opalao-web/
- El script: hace `vite build` con `DEPLOY_BASE=/opalao-web/`, corrige rutas absolutas de assets, agrega `.nojekyll`, publica en branch `gh-pages`.
- **OJO**: GitHub Pages a veces se queda "building" 10+ min con assets pesados. Si tarda mucho, forzar rebuild: `gh api -X POST repos/l3ocad1-ship-it/opalao-web/pages/builds`.
- `build_type` debe ser `legacy`, NO `workflow` (causó 404 al inicio).
- **IMPORTANTE**: cada carpeta nueva en `client/public/` referenciada por ruta absoluta debe agregarse a `PUBLIC_DIRS` en `publicar.mjs` o da 404 en Pages. Ya incluye: manus-storage, frames_hero, mariposas, video_cascada, servicios, galeria, productos, **blog, retiros**.

### Hostinger (producción final, pendiente)
```bash
npx vite build
```
- Genera `dist/public/` con rutas en `/` (sin subpath).
- Subir TODO el contenido de `dist/public/` (no la carpeta, lo de adentro) a `public_html` del Hostinger via File Manager o FTP. **Incluir el archivo oculto `.htaccess`** (fuerza HTTPS + www→sin-www + fallback SPA).
- Dominio: **opalaohealing.com** (sin www como canónico). Activar SSL/HTTPS.
- Credenciales las tiene el cliente — el deploy a Hostinger lo hace el usuario, no yo.
- Las URLs absolutas del SEO (canonical, OG, JSON-LD, sitemap) ya apuntan a `https://opalaohealing.com`; la imagen OG y la indexación solo funcionan al 100% una vez en este dominio.

## Animaciones clave (NO romper)

### Hero cinematográfico (`HeroSection.tsx`)
- 217 frames WebP (1920px) dibujados en `<canvas>` siguiendo el scroll (`useScroll` + `useTransform`).
- Secuencia: bosque → árbol con puerta (frame ~160) → destello dorado (frame ~190) → cascada (frame 217 = primer cuadro del video, cruce sin costura).
- Sección de 500vh; canvas sticky; easing `Math.pow(p, 1.4)`.
- **Cross-fade canvas→video en scroll 0.86–0.93** (ajustado jun-2026: arranca en el destello de la puerta para que el video empiece de inmediato, sin tramo estático). `canvasOpacity`/`videoOpacity`.
- **Video `objectFit: cover`** (a sangre, sin marcos). El cliente NO quiere `contain`/fondo difuminado (probado y descartado).
- Texto del Hero desvanece en ~72-82% del scroll. **Tamaño del Hero +30% y navbar más grande** (jun-2026, a pedido). Indicador "SCROLL" agrandado y con sombra para que no se pierda.

### Mariposa flotante (`PageButterflies.tsx` + `MariposasOverlay.css`)
- 1 mariposa, sprite de 12 frames en ping-pong (aleteo natural).
- Aparece al final del Hero (REVEAL=4.9), acompaña casi toda la página, fade al final (FADE_START=22).
- Movimiento sinusoidal x/y; en móvil (<700px) amplitud reducida a 0.4 para que no se salga.
- Tamaño: 260px móvil → 620px desktop (`@media min-width: 1024px`).

## Optimizaciones ya aplicadas (NO repetir)

- **Frames Hero**: 217 frames WebP 1920×1080 (q65). **49MB → 15MB**.
- **Video cascada**: mp4 recomprimido a CRF 26. **12MB → 7.1MB**. Se eliminó el `.webm` (no se usaba).
- **Fotos manus-storage**: las grandes reescaladas (hierve_agua 3.8MB→492KB, opalao-retreat 2.5MB→268KB, texturas, hero_ceremonia).
- **Lazy loading**: `loading="lazy" decoding="async"` en GallerySection, BlogSection, ServicesSection, RetreatsSection, ProductsSection, **AboutSection y PainPointsSection** (jun-2026).
- **Recompresión jun-2026** (con ffmpeg, mismo nombre): galería ×6 (~1MB→~110KB c/u), IMG_5740 (1.1MB→637KB), jassibe_face_crop (479→66KB), retiro_atardecer, painpoints. **Texturas leaf_texture_2/_3 PNG→WebP** (1.35MB→13KB; PNGs eliminados, refs actualizadas en FAQ/Testimonials). Ahorro total ~7MB.
- **NO volver a subir fotos sin comprimir.** Si entra una nueva imagen: máximo 1600px de ancho, WebP/JPG calidad ~70-75. ffmpeg está en winget (ver Herramientas).

## SEO / AEO / GEO (aplicado jun-2026, en código)

- `index.html` `<head>` reescrito: title, meta description (~155c), canonical, robots (`max-image-preview:large`), Open Graph completo + Twitter Card, geo, favicons. Se **quitó el script de analytics de Manus** (estaba roto, daba 404).
- **3 bloques JSON-LD** válidos: `LocalBusiness/HealthAndBeautyBusiness` (service-area, sin dirección de calle, con areaServed + GeoCircle + hasOfferCatalog de 17 servicios + sameAs), `WebSite`, y `FAQPage` (de las 6 FAQ de `FAQSection.tsx` — mantener ambas sincronizadas).
- `robots.txt` permite crawlers de IA (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot, Applebot, Bingbot, CCBot) + `Sitemap:`.
- `sitemap.xml`, `.htaccess`, `og-image.jpg` (1200×630, cascada+logo en zona segura central para WhatsApp), favicons (emblema sol-ojo dorado sobre verde).
- **SIN `aggregateRating`** (no hay reseñas reales) y **SIN `openingHoursSpecification`** (falta el horario) → agregar cuando se tengan los datos.
- Verificado: 1 solo `<h1>` (home), todas las imágenes con `alt`, sin scroll horizontal a 430/900px.

## Pendientes (siguientes sesiones)

1. **Parte B SEO en vivo (lo hace el cliente/usuario):** deploy a Hostinger (opalaohealing.com + HTTPS) → Google Search Console (verificar + enviar sitemap) → Bing Webmaster (alimenta a ChatGPT) → Google Business Profile → GA4 (falta el `G-XXXX` para pegarlo en el head) → reseñas reales → directorios NAP.
2. **Datos que faltan del cliente:** horario de atención (para `openingHoursSpecification`) y reseñas (para `aggregateRating`).
3. **SEO de nombres de archivo (no hecho aún):** renombrar legacy de `manus-storage` (`IMG_5740_xxx.webp` → `jassibe-guia-holistica-oaxaca.webp`, etc.) + actualizar refs en componentes Y en `publicar.mjs`. Tarea grande/arriesgada, dejar para una pasada dedicada.
4. Formulario de contacto / email setup real (hoy el form solo simula envío; `contact@opalaohealing.com` ya está en BookingSection y footer).
5. (Opcional) `width/height` explícitos en imágenes para CLS — hoy mitigado con contenedores de altura fija.

## Convenciones / decisiones tomadas

- **Idiomas**: ES (default) + EN, vía `LanguageContext`. Textos en `t.<seccion>.<clave>`.
- **Tema**: light fijo (no switchable por ahora).
- **Rutas de assets**: siempre absolutas desde `/` (ej. `/manus-storage/...`). El script de GitHub Pages las prefija con `/opalao-web/`.
- **Wouter base**: derivada de `import.meta.env.BASE_URL` para que funcione en ambos hostings.

## Preferencias del usuario (Leo, `l3ocad.1@gmail.com`)

- Habla en español, tono directo.
- **NO pedirle que él haga tareas que me tocan a mí** (editar, compilar, etc.). Yo ejecuto, él decide qué cambiar.
- Excepción: subir a Hostinger sí le toca (requiere sus credenciales).
- Le frustran las tareas que tardan mucho — explicar honestamente el porqué cuando pase (ej. builds atascados de GitHub Pages no son evitables).
- Cliente está revisando: cuidado con cambios visuales grandes sin confirmar primero.

## Herramientas locales disponibles

- **ffmpeg** instalado vía winget en `C:\Users\balbe\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_...\` — usar para procesar imágenes/video.
- **Node + npm** funcionando.
- **gh CLI** autenticado (para forzar builds de Pages si hace falta).
