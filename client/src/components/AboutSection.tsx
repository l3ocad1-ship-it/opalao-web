/*
 * OPALAO About Section — Tierra Sagrada design
 * Asymmetric layout: image left (3/5), text right (2/5)
 * Dark green background → cream text
 * Structure: Quiénes Somos (Opalao) → divider → Conoce a Nuestra Fundadora (Jassibe)
 */
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ABOUT_IMAGE = "/sobre-opalao/jassibe-guia-holistica-opalao-oaxaca.webp";
const JAZ_IMAGE = "/sobre-opalao/jassibe-fundadora-opalao.webp";


export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="conoce-opalao"
      className="relative overflow-hidden"
      style={{ background: "oklch(0.22 0.05 162)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-3 relative overflow-hidden"
          style={{ minHeight: "60vh" }}
        >
          <img
            src={ABOUT_IMAGE}
            alt="Jassibe — Guía Holística de Opalao"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: "60vh" }}
          />
          {/* Gradient overlay on image */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 60%, oklch(0.22 0.05 162) 100%)",
            }}
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: "linear-gradient(to top, oklch(0.22 0.05 162) 20%, transparent 60%)",
            }}
          />
        </motion.div>

        {/* Text Column */}
        <div ref={ref} className="lg:col-span-2 flex flex-col justify-center px-8 lg:px-12 py-24">

          {/* ── Quiénes Somos ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px" style={{ background: "oklch(0.78 0.135 78)" }} />
            <span className="section-label" style={{ color: "oklch(0.78 0.135 78)" }}>
              Quiénes Somos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              color: "oklch(0.96 0.016 78)",
              lineHeight: 1.1,
            }}
          >
            Conoce Opalao
          </motion.h2>

          <div className="gold-line-left w-20 mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 leading-relaxed"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "0.95rem",
              color: "oklch(0.80 0.01 75)",
              lineHeight: 1.8,
            }}
          >
            Opalao es una propuesta de acompañamiento holístico dedicado a acompañar procesos de sanación, reconexión y transformación interior. Integramos prácticas energéticas, ceremoniales y conscientes para crear experiencias personalizadas que ayudan a equilibrar cuerpo, mente, alma y energía. Nuestro propósito es ofrecer un ambiente seguro, cálido y lleno de intención donde cada persona pueda soltar, renovar y volver a conectar con su esencia.
          </motion.p>

          {/* Divider */}
          <div className="h-px mb-10" style={{ background: "oklch(0.70 0.12 78 / 0.25)" }} />

          {/* ── Conoce a Nuestra Fundadora ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px" style={{ background: "oklch(0.78 0.135 78)" }} />
            <span className="section-label" style={{ color: "oklch(0.78 0.135 78)" }}>
              Conoce a Nuestra Fundadora
            </span>
          </motion.div>

          {/* Jassibe portrait inset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex items-center gap-4 mb-5"
          >
            <div
              className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: '2px solid oklch(0.78 0.135 78 / 0.5)' }}
            >
              <img src={JAZ_IMAGE} alt="Jassibe, fundadora de Opalao" loading="lazy" decoding="async" className="w-full h-full object-cover" style={{ objectPosition: 'center 15%' }} />
            </div>
            <div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(0.78 0.135 78)', marginBottom: '2px' }}>Fundadora</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'oklch(0.96 0.016 78)', fontWeight: 300, lineHeight: 1 }}>Jassibe</p>
            </div>
          </motion.div>



          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mb-6 text-display text-lg"
            style={{ color: "oklch(0.78 0.135 78)", fontStyle: "italic" }}
          >
            Guía Holística | Facilitadora de Bienestar Integral
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-5 leading-relaxed"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "0.95rem",
              color: "oklch(0.80 0.01 75)",
              lineHeight: 1.8,
            }}
          >
            Opalao nace desde un llamado interno, un momento de transformación personal donde el dolor y la búsqueda de sentido se convirtieron en puerta hacia la sanación. Mi bisabuela, reconocida en su comunidad como mujer medicina, transmitió un legado energético que hoy se honra desde una visión contemporánea.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mb-10 leading-relaxed"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "0.95rem",
              color: "oklch(0.80 0.01 75)",
              lineHeight: 1.8,
            }}
          >
            Cada herramienta que forma parte de Opalao fue integrada desde la experiencia, la práctica y la vivencia real. No soy solo una facilitadora; soy alguien que ha transitado el camino que acompaño.
          </motion.p>


        </div>
      </div>
    </section>
  );
}
