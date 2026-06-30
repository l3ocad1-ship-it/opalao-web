/*
 * OPALAO GallerySection — Momentos de Luz
 * Philosophy: Organic warmth, natural light, ceremonial presence
 * Layout: Asymmetric mosaic grid — desktop 3 cols, mobile 2 cols
 * Style: Arena background, gold accents, leaf shadow overlay
 */
import { motion } from "framer-motion";

const GALLERY_PHOTOS = [
  {
    src: "/galeria/ceremonia-flores-cuencos-oaxaca.webp",
    alt: "Ceremonia con flores y cuencos",
    caption: "Ceremonias Holísticas",
    tall: true,
  },
  {
    src: "/galeria/sesion-sanacion-grupal-oaxaca.webp",
    alt: "Sesión de sanación grupal",
    caption: "Círculos de Sanación",
    tall: false,
  },
  {
    src: "/galeria/retiro-espiritual-jassibe-oaxaca.webp",
    alt: "Jassibe en retiro espiritual",
    caption: "Retiros en Oaxaca",
    tall: false,
  },
  {
    src: "/galeria/mandala-flores-sagrado-oaxaca.webp",
    alt: "Mandala de flores sagrado",
    caption: "Rituales Sagrados",
    tall: true,
  },
  {
    src: "/galeria/ceremonia-grupal-rooftop-oaxaca.webp",
    alt: "Ceremonia grupal en rooftop Oaxaca",
    caption: "Ceremonias Grupales",
    tall: false,
  },
  {
    src: "/galeria/circulo-sanacion-jassibe-oaxaca.webp",
    alt: "Círculo de sanación con Jassibe",
    caption: "Espacios de Transformación",
    tall: false,
  },
  {
    src: "/galeria/ceremonia-trascendencia-ritual-oaxaca.webp",
    alt: "Ceremonia de trascendencia en Opalao Oaxaca",
    caption: "Ceremonias de Trascendencia",
    tall: true,
  },
  {
    src: "/galeria/conexion-ancestral-oaxaca.webp",
    alt: "Conexión con los ancestros en ceremonia Oaxaca",
    caption: "Conexión Ancestral",
    tall: false,
  },
  {
    src: "/galeria/liberacion-empoderamiento-circulo-oaxaca.webp",
    alt: "Círculo de liberación y empoderamiento en Oaxaca",
    caption: "Liberación y Empoderamiento",
    tall: true,
  },
  {
    src: "/galeria/liberacion-de-linaje-oaxaca.webp",
    alt: "Ceremonia de liberación de linaje en Oaxaca",
    caption: "Liberación de Linaje",
    tall: true,
  },
  {
    src: "/galeria/ceremonia-trascendencia-velas-oaxaca.webp",
    alt: "Ritual de trascendencia con velas en Oaxaca",
    caption: "Rituales de Luz",
    tall: true,
  },
];

export default function GallerySection() {
  return (
    <section
      id="galeria"
      className="py-20 md:py-28 leaf-shadow-overlay"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="gold-ornament mb-6">
            <span
              className="tracking-[0.3em] uppercase px-4"
              style={{
                fontFamily: "'Jost', sans-serif",
                color: "#F2B84B",
                fontWeight: 500,
                fontSize: "16pt",
              }}
            >
              Momentos de Luz
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#1A3A2E",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Cada encuentro,{" "}
            <em style={{ fontStyle: "italic", color: "#2E7D5A" }}>una historia</em>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#4A5E58",
              fontSize: "15px",
              lineHeight: 1.75,
            }}
          >
            Espacios sagrados, presencia plena y transformación real. Así se vive Opalao.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[130px] sm:auto-rows-[160px] md:auto-rows-[200px] relative z-10">
          {GALLERY_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                photo.tall ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ display: "block" }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,75,62,0.75) 0%, transparent 60%)",
                }}
              >
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    color: "rgba(246,241,231,0.9)",
                    fontWeight: 400,
                    letterSpacing: "0.15em",
                    fontSize: "10px",
                  }}
                >
                  {photo.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className="text-sm mb-4"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#6B8A7A",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
          >
            Síguenos en Instagram para más momentos
          </p>
          <a
            href="https://instagram.com/0palao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "'Jost', sans-serif",
              background: "white",
              color: "#0F4B3E",
              border: "1px solid rgba(15,75,62,0.2)",
              letterSpacing: "0.1em",
              fontSize: "11px",
              boxShadow: "0 2px 12px rgba(15,75,62,0.08)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            @0palao
          </a>
        </div>
      </div>
    </section>
  );
}
