# Ideas de Diseño — OPALAO

## Concepto Elegido: "Tierra Sagrada" — Ritualismo Editorial Mexicano

### Design Movement
**Ceremonial Editorial Mexicano**: Fusión entre la estética de los libros de arte oaxaqueños, la arquitectura de templos mesoamericanos y el minimalismo espiritual contemporáneo. Piensa en una galería de arte en Monte Albán.

### Core Principles
1. **Asimetría ritual**: Los layouts nunca son simétricos. Los elementos se colocan con intención, como objetos en un altar.
2. **Silencio como diseño**: El espacio en blanco (crema cálido) es protagonista. El contenido respira.
3. **Peso editorial**: Tipografía con contraste extremo entre titulares serif grandes y cuerpo de texto delgado.
4. **Textura ancestral**: Granos sutiles, bordes dorados finos, líneas orgánicas que evocan grabados en piedra.

### Color Philosophy
- **Fondo principal**: Crema cálido oscuro `oklch(0.97 0.012 75)` — como papel envejecido de un códice
- **Verde bosque profundo**: `oklch(0.35 0.08 155)` — el verde del logo, tierra y selva oaxaqueña
- **Dorado ancestral**: `oklch(0.72 0.12 80)` — el dorado del logo, luz de vela en ceremonia
- **Humo / gris cálido**: `oklch(0.55 0.02 75)` — para texto secundario
- **Blanco puro**: `oklch(0.99 0 0)` — para contraste en secciones oscuras

### Layout Paradigm
- **Columnas asimétricas**: Secciones con grid de 7/5 o 3/9 en lugar de 6/6
- **Scroll cinematográfico**: Secciones que se revelan con parallax suave
- **Márgenes intencionados**: Texto que no llega al borde, siempre con respiración
- **Líneas divisoras doradas**: Separadores horizontales delgados como en manuscritos

### Signature Elements
1. **Línea dorada**: Un trazo horizontal fino dorado que aparece como separador y acento decorativo
2. **Numeración romana**: Los servicios y secciones se numeran con I, II, III en dorado
3. **Símbolo del logo**: El ojo/yin-yang con rayos aparece como marca de agua sutil en fondos

### Interaction Philosophy
- Hover en botones: el borde dorado se expande suavemente
- Cards de servicios: ligero lift con sombra cálida al hover
- Scroll: secciones entran con fade-up suave (framer-motion)
- CTA principal: botón con borde dorado, fondo transparente, texto verde oscuro

### Animation
- `fade-up`: elementos entran desde abajo con opacidad 0→1, y 20px→0, duración 0.6s ease-out
- `line-grow`: las líneas doradas se extienden horizontalmente al entrar en viewport
- `subtle-float`: el logo/símbolo flota suavemente (y: 0→-8px, loop infinito)
- Sin animaciones agresivas — todo es suave, como respirar

### Typography System
- **Display / Titulares**: `Cormorant Garamond` — serif elegante, evoca manuscritos y ceremonial
- **Body / Cuerpo**: `Jost` — sans-serif geométrico limpio, moderno pero no frío
- **Acento / Labels**: `Cormorant Garamond Italic` — para frases poéticas y citas
- Jerarquía: H1 = 72-96px / H2 = 48px / H3 = 28px / Body = 16-18px / Caption = 13px
