# OPALAO — Contexto del Proyecto

Espacio holístico de sanación en Oaxaca, México (fundadora: Jassibe / "Jaz"). Web oficial.
**Dominio de producción: https://opalaohealing.com** (EN VIVO en Hostinger, SSL activo). Email: contact@opalaohealing.com.
Sesión jun-2026: se aplicó tanda grande de feedback del cliente (textos, Hero, galería, footer) + optimización SEO/AEO/GEO completa. El cliente sigue revisando vía capturas; se itera sobre lo que pide.
**Tanda final jun-2026 (todo ya en `main` y desplegado):** Hero rehecho desde master 4K (frames 1920px); fotos nuevas en las 3 categorías de Servicios; +Hipnosis de Sanación, +Tanatología Holística, +Acompañamiento Terapéutico; "Canalización Angelical"→"Canalización de los Ángeles"; **duración eliminada** de tarjetas y modal de servicios; Retiros con badge "Próximamente" (sin duración) y títulos/descrip nuevos; Blog artículos 2 y 3 reescritos; Tienda renombrada (Brumas Áuricas, Ungüentos y Oleatos, Atados y Amuletos); Jassibe → "Facilitadora de Bienestar Integral"; mariposa overlay al 50%; globo de WhatsApp con texto verde; **imágenes de contenido renombradas a nombres SEO** (rename ya hecho, ver más abajo); Schema enriquecido por servicio; nueva meta description.
**Nota de marca:** ya NO se usa la palabra "Centro" (no es un centro) → "Opalao" o "Espacio Holístico". No reintroducir "Centro Opalao"/"Centro Holístico".

## ✅ ESTADO ACTUAL — Deploy a Hostinger (jun-2026, COMPLETADO)

- **Sitio EN VIVO en https://opalaohealing.com** (Hostinger, plan Business, SSL activo). El **correo `contact@opalaohealing.com` YA FUNCIONA** (era retraso de activación del buzón, no el código). `enviar.php` (PHP `mail()`) jala bien.
- **Fix iOS desplegado** (commit `669bd7f`): navbar logo `vh`→`vw` (el `vh` cambiaba con la barra de Safari y movía el logo al scrollear) + campos del form a `16px` (evita el zoom de iOS). **YA en vivo** (verificado por hash del bundle).
- **Fix scroll del formulario (móvil) desplegado:** al enviar, la tarjeta "Gracias" es más corta que el form → la página se encogía y el scroll quedaba en la sección de abajo ("Experiencias reales"). Solución en `BookingSection.tsx`: `useEffect` que hace `scrollIntoView({block:'center'})` sobre la tarjeta de éxito cuando `submitted` pasa a true. **YA en vivo** (bundle `index-Cr3MnunT.js`, verificado HTTP 200).
- **`OPALAO_hostinger.zip`** (raíz del proyecto, gitignored, ~53MB, forward slashes) — se puede borrar, ya no se necesita.
- **Cómo re-desplegar a Hostinger (si hace falta):** `npx vite build` (SIN `DEPLOY_BASE` = base `/`) → salida en `dist/public/` → **quitar `dist/public/__manus__`** → empacar zip con forward slashes → File Manager. **ATAJO cuando solo cambia el código:** normalmente solo cambian `index.html` + `assets/index-*.js` (el hash del JS cambia); subir esos 2 archivos con "Upload" evita todo el baile de Extract/Move. Si se re-sube el zip completo, **vaciar `public_html` primero** o el "Move" choca con las carpetas existentes.

### Gotchas del File Manager de Hostinger ("File Browser" en srv-files.hstgr.io)
1. **ZIP con FORWARD SLASHES obligatorio.** En Windows PowerShell 5.1, `ZipFile.CreateFromDirectory` usa **backslashes** → el File Browser extrae archivos planos `assets\index.js` (rotos). **Solución:** crear el zip entrada-por-entrada con `ZipArchive.CreateEntry` + `.Replace([char]92,[char]47)`, cargando **ambos** ensamblados `System.IO.Compression` y `System.IO.Compression.FileSystem`, y **sin colisión de variables** (`$fs`/`$FS` son la MISMA var en PS, insensible a mayúsculas).
2. **El "Extract" obliga a un nombre de carpeta** → crea `public_html/opalao/`. Hay que **MOVER** el contenido a `public_html`.
3. **El "Move" (CLAVE):** el destino es la carpeta que queda **RESALTADA (azul) en la lista, SIN entrar a ella**. Si ENTRAS a la carpeta, se resalta `..` y entonces mueve al nivel de ARRIBA (error). Para meter en `public_html`: navegar hasta `/files/` (donde se VE `public_html` en la lista), darle **UN clic** (azul), y MOVE.
4. El sitio va en **`/files/public_html/`** (NO en la raíz; hay un `DO_NOT_UPLOAD_HERE`). En la raíz dejar solo `.trash`, `public_html`, `DO_NOT_UPLOAD_HERE`.
5. **Pendiente:** aviso "Conectar dominio" en hPanel (aunque el sitio ya carga). Y verificar la navbar/form en iPhone una vez subido el build con el fix.

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
│   │   ├── manus-storage/         ← SOLO decorativos/branding (texturas de fondo CSS, logos). Fotos de contenido YA migradas a carpetas SEO
│   │   ├── servicios/ galeria/ retiros/ blog/ productos/ sobre-opalao/  ← TODAS las fotos de contenido con nombres SEO
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
- **IMPORTANTE**: cada carpeta nueva en `client/public/` referenciada por ruta absoluta debe agregarse a `PUBLIC_DIRS` en `publicar.mjs` o da 404 en Pages. Ya incluye: manus-storage, frames_hero, mariposas, video_cascada, servicios, galeria, productos, blog, retiros, **sobre-opalao**.

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
- Tamaño: **130px móvil → 310px desktop** (`@media min-width: 1024px`) — reducido al 50% jun-2026 a pedido del cliente.
- Lleva `alt=""` + `aria-hidden` a propósito (decorativa) — NO es un error de accesibilidad, no agregar alt descriptivo.

## Optimizaciones ya aplicadas (NO repetir)

- **Frames Hero**: 217 frames WebP 1920px (q40), extraídos del master 4K (`_origen_hero/hero_completo.mp4`, gitignored) con ffmpeg fps=7. Pesan **~35MB** (el bosque denso comprime mal; piso real a 1920px). Para ~25MB habría que bajar a 1600px. Es la única debilidad de Core Web Vitals. Decodificar el 4K es lento (>2min): correr la extracción en background.
- **Video cascada**: regenerado jun-2026 desde el master 4K (loop sin costura: mid + xfade tail/head con crossfade de 1s; primer frame == último). 1080p, libx264 CRF 24, **~4.3MB**. Poster 1600px desde el propio loop. Se eliminó el `.webm` (no se usaba).
- **Fotos manus-storage**: las grandes reescaladas (hierve_agua 3.8MB→492KB, opalao-retreat 2.5MB→268KB, texturas, hero_ceremonia).
- **Lazy loading**: `loading="lazy" decoding="async"` en GallerySection, BlogSection, ServicesSection, RetreatsSection, ProductsSection, **AboutSection y PainPointsSection** (jun-2026).
- **Recompresión jun-2026** (con ffmpeg, mismo nombre): galería ×6 (~1MB→~110KB c/u), IMG_5740 (1.1MB→637KB), jassibe_face_crop (479→66KB), retiro_atardecer, painpoints. **Texturas leaf_texture_2/_3 PNG→WebP** (1.35MB→13KB; PNGs eliminados, refs actualizadas en FAQ/Testimonials). Ahorro total ~7MB.
- **NO volver a subir fotos sin comprimir.** Si entra una nueva imagen: máximo 1600px de ancho, WebP/JPG calidad ~70-75. ffmpeg está en winget (ver Herramientas).

## SEO / AEO / GEO (aplicado jun-2026, en código)

- `index.html` `<head>` reescrito: title, meta description (~155c), canonical, robots (`max-image-preview:large`), Open Graph completo + Twitter Card, geo, favicons. Se **quitó el script de analytics de Manus** (estaba roto, daba 404).
- **3 bloques JSON-LD** válidos: `LocalBusiness/HealthAndBeautyBusiness` (service-area, sin dirección de calle, con areaServed + GeoCircle + hasOfferCatalog de **20 servicios, cada uno con `description` + `provider` + `areaServed`** para AEO/GEO + sameAs), `WebSite`, y `FAQPage` (de las 6 FAQ de `FAQSection.tsx` — mantener ambas sincronizadas). **Al renombrar/agregar servicios, actualizar también el OfferCatalog.** Validar con `node -e` que el JSON-LD parsee.
- `robots.txt` permite crawlers de IA (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot, Applebot, Bingbot, CCBot) + `Sitemap:`.
- `sitemap.xml`, `.htaccess`, `og-image.jpg` (1200×630, cascada+logo en zona segura central para WhatsApp), favicons (emblema sol-ojo dorado sobre verde).
- **SIN `aggregateRating`** (no hay reseñas reales) y **SIN `openingHoursSpecification`** (falta el horario) → agregar cuando se tengan los datos.
- Verificado: 1 solo `<h1>` (home), todas las imágenes con `alt`, sin scroll horizontal a 430/900px.

## Pendientes (siguientes sesiones)

1. **Parte B SEO en vivo (lo hace el cliente/usuario):** deploy a Hostinger (opalaohealing.com + HTTPS) → Google Search Console (verificar + enviar sitemap) → Bing Webmaster (alimenta a ChatGPT) → Google Business Profile → GA4 (falta el `G-XXXX` para pegarlo en el head) → reseñas reales → directorios NAP.
2. **Datos que faltan del cliente:** horario de atención (para `openingHoursSpecification`) y reseñas (para `aggregateRating`).
3. ~~SEO de nombres de archivo~~ **HECHO (jun-2026):** las 12+ fotos de contenido (galería, sobre-opalao, blog, tienda kit, retiros hero) migradas a carpetas SEO con nombres `tema-descriptivo-oaxaca.webp`; refs actualizadas y originales hash borrados. En `manus-storage` SOLO quedan decorativos (texturas de fondo CSS, logos verde/dorado, logo producto) y `HeroSection.ORIGINAL.bak` sin usar — **eso se deja a propósito** (renombrar texturas/logos no da beneficio SEO).
4. ~~Formulario de contacto~~ **HECHO (jun-2026):** `BookingSection` ahora hace `POST /enviar.php` (script PHP en `client/public/enviar.php`) que envía a `contact@opalaohealing.com` con `mail()` (From=cuenta del dominio, Reply-To=visitante, honeypot anti-spam, asunto UTF-8). **Solo funciona en Hostinger (PHP), NO en el preview de GitHub Pages** (ahí cae al toast de error → WhatsApp). **Requisito:** crear la cuenta de correo `contact@opalaohealing.com` en Hostinger o no llega/sale nada. El dropdown de servicios se actualizó a los 20 actuales. Si `mail()` da problemas de entrega, migrar a SMTP/PHPMailer con las credenciales del buzón.
5. (Opcional) `width/height` explícitos en imágenes para CLS — hoy mitigado con contenedores de altura fija.

## Convenciones / decisiones tomadas

- **Idiomas**: ES (default) + EN, vía `LanguageContext`. Textos en `t.<seccion>.<clave>`.
- **Tema**: light fijo (no switchable por ahora).
- **Rutas de assets**: siempre absolutas desde `/` (ej. `/servicios/...`, `/galeria/...`). El script de GitHub Pages las prefija con `/opalao-web/` (solo las carpetas listadas en `PUBLIC_DIRS`). **Imagen de contenido nueva → nombre SEO `tema-descriptivo-oaxaca.webp` en su carpeta temática + registrar la carpeta en `PUBLIC_DIRS` si es nueva.**
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
