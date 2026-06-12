/*
 * OPALAO Blog Section — Tierra Sagrada design
 * Reflexiones y Sabiduría — with article expanded view modal
 * Download + Share icons per article
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share2, Facebook, Instagram, Link2, Clock, Tag } from "lucide-react";
import { toast } from "sonner";

const BLOG_IMAGE_1 = "/manus-storage/jaz_cuencos_montana_81539b4f.webp";
const BLOG_IMAGE_2 = "/manus-storage/cuencos_tarot_64c04e2d.webp";
const BLOG_IMAGE_3 = "/manus-storage/retiro_atardecer_0a3d2c71.webp";

const GOLD   = "oklch(0.78 0.135 78)";
const FOREST = "oklch(0.22 0.05 162)";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  content: string[];
}

const posts: BlogPost[] = [
  {
    category: "Ceremonias",
    title: "¿Qué es una ceremonia holística y cómo puede transformarte?",
    excerpt: "Descubre el significado profundo detrás de cada elemento ritual y cómo el espacio sagrado facilita la sanación...",
    readTime: "5 min",
    image: BLOG_IMAGE_1,
    content: [
      "Una ceremonia holística es un espacio sagrado e intencional donde el cuerpo, la mente y el alma se alinean para facilitar procesos de sanación, liberación y transformación. A diferencia de una clase o taller convencional, la ceremonia trabaja con la energía sutil del ser humano y del entorno.",
      "En el Centro Opalao, cada ceremonia es diseñada con elementos que activan los sentidos y crean un puente entre el mundo visible y el invisible. Los cuencos de cuarzo, el sahumerio, las flores, la música y la intención colectiva forman un tejido de energía que sostiene a cada participante.",
      "Los beneficios de participar en una ceremonia holística incluyen: liberación de cargas emocionales acumuladas, reconexión con la intuición y el cuerpo, activación del sistema nervioso parasimpático (estado de calma profunda), y apertura a nuevas perspectivas sobre situaciones de vida.",
      "Lo más poderoso de una ceremonia es que no requiere ninguna creencia previa. Solo se necesita apertura, disposición y el deseo genuino de conectar con uno mismo. El resto lo hace el espacio sagrado.",
    ],
  },
  {
    category: "Bienestar",
    title: "5 prácticas de limpieza energética que puedes hacer en casa",
    excerpt: "Herramientas simples y accesibles para mantener tu espacio y tu campo energético en equilibrio...",
    readTime: "4 min",
    image: BLOG_IMAGE_2,
    content: [
      "Nuestro campo energético absorbe constantemente las emociones, pensamientos y energías del entorno. Así como limpiamos nuestro cuerpo físico, es importante mantener también la higiene energética de nuestro espacio y ser.",
      "1. **Sahumerio con copal o salvia**: Enciende la resina o hierba y recorre tu espacio con la intención de purificar. El humo actúa como un limpiador vibracional que disuelve energías densas.",
      "2. **Sonido con cuenco o campana**: El sonido de alta frecuencia rompe patrones energéticos estancados. Puedes usar un cuenco tibetano, una campana o incluso música de 432 Hz.",
      "3. **Baño de sal con intención**: Agrega sal de mar o sal del Himalaya a tu baño con la intención de disolver lo que ya no te pertenece. Visualiza cómo el agua lleva consigo todo lo que quieres soltar.",
      "4. **Respiración consciente**: Tres respiraciones profundas con la intención de soltar lo que ya no necesitas son suficientes para comenzar a limpiar tu campo. La respiración es la herramienta más accesible que tenemos.",
      "5. **Decreto de cierre energético**: Al final del día, di en voz alta o mentalmente: 'Cierro mi campo energético. Regreso a mí todo lo que es mío. Devuelvo con amor lo que no me pertenece.' Simple y poderoso.",
    ],
  },
  {
    category: "Retiros",
    title: "Retiro de Luna Llena en la Costa — Próximas Fechas 2026",
    excerpt: "Únete a nuestra próxima experiencia de retiro en Mazunte. Cupos limitados para una vivencia íntima y profunda...",
    readTime: "3 min",
    image: BLOG_IMAGE_3,
    content: [
      "La Luna Llena es uno de los momentos más poderosos del ciclo lunar para la liberación, la gratitud y la celebración. En el Centro Opalao, aprovechamos esta energía para crear ceremonias de fuego, meditaciones bajo las estrellas y rituales de cierre en la costa oaxaqueña.",
      "Nuestro próximo Retiro de Luna Llena se realizará en Mazunte, Oaxaca — uno de los lugares más mágicos y energéticamente activos de México. El retiro incluye: ceremonia de apertura con cuencos de cuarzo, meditación al amanecer frente al mar, círculo de sanación del niño interior, ritual de fuego bajo la luna llena, y ceremonia de cierre con cacao.",
      "Los cupos son limitados (máximo 12 personas) para garantizar una experiencia íntima y de alta calidad. El retiro es para personas de todos los niveles de experiencia — no se requiere conocimiento previo.",
      "Para conocer las próximas fechas disponibles y reservar tu lugar, contáctanos a través del formulario o escríbenos por WhatsApp. Nuestro equipo te enviará toda la información de logística, inversión e incluidos.",
    ],
  },
];

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showShare, setShowShare] = useState<number | null>(null);

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("¡Enlace copiado al portapapeles!");
    }
  };

  const handleDownload = (post: BlogPost) => {
    const content = `${post.title}\n\n${post.content.join("\n\n")}\n\n— Centro Opalao | opalao.mx`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${post.title.slice(0, 40).replace(/[^a-zA-Z0-9]/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Artículo descargado");
  };

  return (
    <>
      <section id="blog" className="py-28" style={{ background: "oklch(0.95 0.018 78)" }}>
        <div className="container">

          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="section-label">Comunidad & Contenido</span>
              <div className="gold-line flex-1 max-w-24" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                color: FOREST,
                lineHeight: 1.1,
              }}
            >
              Reflexiones y<br />
              <em style={{ fontStyle: "italic", color: GOLD }}>Sabiduría</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 max-w-2xl"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "oklch(0.50 0.03 155)",
                lineHeight: 1.75,
              }}
            >
              Artículos, anuncios de retiros y contenido de bienestar para acompañarte en tu camino.
            </motion.p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group"
                style={{ cursor: "default" }}
              >
                {/* Image — clickable */}
                <div
                  className="overflow-hidden mb-5 cursor-pointer relative"
                  style={{ height: "220px" }}
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Read overlay — bottom gradient only, does not cover face */}
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4"
                    style={{ background: "linear-gradient(to top, rgba(15,75,62,0.75) 0%, rgba(15,75,62,0.0) 100%)", height: "60%" }}
                  >
                    <span
                      className="px-4 py-2 text-xs tracking-widest uppercase"
                      style={{
                        background: "white",
                        color: FOREST,
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 600,
                        borderRadius: "4px",
                      }}
                    >
                      Leer Artículo
                    </span>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.62rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: GOLD,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1" style={{ color: "oklch(0.60 0.02 155)", fontSize: "11px", fontFamily: "'Jost', sans-serif" }}>
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  {/* Action icons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDownload(post)}
                      className="p-1.5 rounded-full transition-colors duration-200 hover:bg-[oklch(0.88_0.04_78)]"
                      title="Descargar artículo"
                      style={{ color: "oklch(0.55 0.04 155)" }}
                    >
                      <Download size={14} />
                    </button>
                    <button
                      onClick={() => handleShare(post)}
                      className="p-1.5 rounded-full transition-colors duration-200 hover:bg-[oklch(0.88_0.04_78)]"
                      title="Compartir artículo"
                      style={{ color: "oklch(0.55 0.04 155)" }}
                    >
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="mb-3 leading-snug cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedPost(post)}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: "1.3rem",
                    color: FOREST,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="mb-5"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.87rem",
                    color: "oklch(0.48 0.03 155)",
                    lineHeight: 1.75,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* CTA */}
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-[0.7rem] tracking-[0.15em] uppercase border-b pb-0.5 transition-colors duration-200 hover:border-[oklch(0.70_0.12_78)] hover:text-[oklch(0.70_0.12_78)]"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 500,
                    color: "oklch(0.35 0.04 155)",
                    borderColor: "oklch(0.35 0.04 155)",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid oklch(0.35 0.04 155)",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Leer más →
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto py-8 px-4"
            style={{ background: "rgba(8,28,20,0.85)", backdropFilter: "blur(6px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedPost(null); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-2xl overflow-hidden"
              style={{
                background: "#FDFAF5",
                borderRadius: "16px",
                boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
              }}
            >
              {/* Hero image */}
              <div className="relative overflow-hidden" style={{ height: "280px" }}>
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(8,28,20,0.7) 100%)" }}
                />
                {/* Close button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.9)", color: "#0F4B3E" }}
                >
                  <X size={18} />
                </button>
                {/* Category overlay */}
                <div className="absolute bottom-4 left-6">
                  <span
                    className="px-3 py-1 text-[10px] font-semibold tracking-widest uppercase"
                    style={{ background: GOLD, color: "white", borderRadius: "4px", fontFamily: "'Jost', sans-serif" }}
                  >
                    {selectedPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    color: FOREST,
                    lineHeight: 1.2,
                  }}
                >
                  {selectedPost.title}
                </h2>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid oklch(0.88 0.02 78)" }}>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "oklch(0.55 0.03 155)", fontFamily: "'Jost', sans-serif" }}>
                    <Clock size={12} />
                    {selectedPost.readTime} de lectura
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "oklch(0.55 0.03 155)", fontFamily: "'Jost', sans-serif" }}>
                    <Tag size={12} />
                    Centro Opalao
                  </span>
                </div>

                {/* Body */}
                <div className="space-y-4 mb-8">
                  {selectedPost.content.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.95rem",
                        color: "oklch(0.38 0.03 155)",
                        lineHeight: 1.85,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2 pt-6" style={{ borderTop: "1px solid oklch(0.88 0.02 78)" }}>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "oklch(0.55 0.03 155)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Compartir:
                  </span>
                  <button
                    onClick={() => handleDownload(selectedPost)}
                    className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-colors duration-200"
                    style={{
                      background: "oklch(0.92 0.02 78)",
                      color: FOREST,
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Download size={13} />
                    Descargar
                  </button>
                  <button
                    onClick={() => handleShare(selectedPost)}
                    className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-colors duration-200"
                    style={{
                      background: "oklch(0.92 0.02 78)",
                      color: FOREST,
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Link2 size={13} />
                    Copiar enlace
                  </button>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-colors duration-200"
                    style={{
                      background: "#1877F2",
                      color: "white",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    <Facebook size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
