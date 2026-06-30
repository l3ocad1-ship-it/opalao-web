/*
 * OPALAO Blog Section — Tierra Sagrada design
 * Reflexiones y Sabiduría — with article expanded view modal
 * Download + Share icons per article
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share2, Facebook, Instagram, Link2, Clock, Tag } from "lucide-react";
import { toast } from "sonner";

const BLOG_IMAGE_1 = "/blog/ceremonia-holistica-cuencos-oaxaca.webp";
const BLOG_IMAGE_2 = "/blog/enraizamiento-mujer-bosque-oaxaca.webp";
const BLOG_IMAGE_3 = "/blog/retorno-solar-atardecer-oaxaca.webp";

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
      "En Opalao, cada ceremonia es diseñada con elementos que activan los sentidos y crean un puente entre el mundo visible y el invisible. Los cuencos de cuarzo, el sahumerio, las flores, la música y la intención colectiva forman un tejido de energía que sostiene a cada participante.",
      "Los beneficios de participar en una ceremonia holística incluyen: liberación de cargas emocionales acumuladas, reconexión con la intuición y el cuerpo, activación del sistema nervioso parasimpático (estado de calma profunda), y apertura a nuevas perspectivas sobre situaciones de vida.",
      "Lo más poderoso de una ceremonia es que no requiere ninguna creencia previa. Solo se necesita apertura, disposición y el deseo genuino de conectar con uno mismo. El resto lo hace el espacio sagrado.",
    ],
  },
  {
    category: "Bienestar",
    title: "Enraizamiento: sanando cuerpo y mente a través de la naturaleza",
    excerpt: "Cuando el cuerpo se resiente, el alma también guarda ese dolor. Descubre cómo enraizarte en la tierra reduce la ansiedad y despierta una sanación profunda...",
    readTime: "5 min",
    image: BLOG_IMAGE_2,
    content: [
      "Desde tiempos ancestrales, hemos sabido que cuando el cuerpo se resiente, no solo es una dolencia física, sino que el alma también guarda ese dolor. La conexión con la naturaleza, avalada por la ciencia, demuestra que al enraizarnos, activamos un puente entre nuestro pasado y nuestro presente.",
      "Cuando permitimos que nuestro cuerpo descargue el estrés, al apoyarnos en la tierra, al respirar en armonía con la naturaleza, se reduce la ansiedad, se equilibra nuestro sistema nervioso y se despierta una sanación profunda. Así, al honrar nuestras raíces, no solo descargamos energía, sino que abrimos un camino de equilibrio, conectando con nuestro propósito, donde cuerpo, mente y emoción encuentran su centro y su paz.",
      "El enraizamiento puede practicarse de muchas formas: caminar descalza sobre la tierra, sentarse bajo un árbol, respirar conscientemente en un espacio natural, o simplemente llevar la atención a los pies y visualizar raíces que nos conectan con el centro de la tierra. Cada una de estas prácticas activa el sistema nervioso parasimpático, invitando al cuerpo a soltar la tensión acumulada.",
      "En Opalao integramos el enraizamiento como parte fundamental de nuestras ceremonias y acompañamientos. Creemos que sanar desde la raíz es sanar desde el amor, y que la naturaleza siempre ha sido nuestra maestra más sabia.",
    ],
  },
  {
    category: "Ceremonias",
    title: "El poder del retorno solar",
    excerpt: "La ceremonia del retorno solar es un portal de manifestación: al sincronizarte con el regreso del sol a tu posición natal, amplificas tus intenciones y siembras deseos con fuerza...",
    readTime: "4 min",
    image: BLOG_IMAGE_3,
    content: [
      "La ceremonia del retorno solar es un portal de manifestación extraordinario. Al sincronizarnos con el regreso del sol a nuestra posición natal, activamos una vibración que amplifica nuestras intenciones. Es un momento donde, al canalizar la energía cósmica, podemos sembrar deseos con fuerza.",
      "Cada paso en esta ceremonia es un acto de fe, donde el sol nos impulsa a crear, a atraer lo que anhelamos y a transformar nuestra realidad desde un lugar de autenticidad y poder.",
      "El retorno solar nos recuerda que somos seres cósmicos, que nuestros ciclos personales están entrelazados con los ritmos del universo. Honrar este momento es honrarnos a nosotras mismas, reconocer el camino recorrido y abrirnos con gratitud a lo que está por venir.",
      "En Opalao acompañamos este portal con cuencos de cuarzo, meditación guiada, limpieza energética y rituales de intención. Cada ceremonia es única, diseñada para quien la vive, en el momento exacto en que la necesita. Si deseas vivir tu próximo retorno solar en un espacio sagrado, escríbenos y con gusto te acompañamos.",
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
    const content = `${post.title}\n\n${post.content.join("\n\n")}\n\n— Opalao | opalao.mx`;
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
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                    Opalao
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
