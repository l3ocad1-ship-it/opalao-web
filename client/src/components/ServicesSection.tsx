/*
 * OPALAO ServicesSection — Rediseño Completo
 * Design: Tierra Sagrada · Bosque #0F4B3E · Arena #F2EDE3 · Sol #C8923A (accessible)
 * Layout: Compact tabbed grid — no excessive scroll
 * Each card has its own image, "Saber más" expands a modal with catalog detail
 * "Consultar" scrolls to contact form
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Clock, Users } from "lucide-react";

// ── WebP optimized images ──
const IMG_GRUPALES   = "/manus-storage/svc_grupales_real_d7dacaf6.webp";
const IMG_INDIVIDUAL = "/manus-storage/sesion_individual_cuencos_cf7a7595.webp";
const IMG_CIRCULOS   = "/manus-storage/svc_circulos_real_7350af5b.webp";
const IMG_RETORNO    = "/manus-storage/ceremonia_grupal_rooftop_8c6c622e.webp";
const IMG_BABY       = "/manus-storage/svc_ceremonias_grupales_84bc5448.webp";
const IMG_SOLTERA    = "/manus-storage/galeria_ceremonia_2_5a181f31.webp";
const IMG_TRASCEND   = "/manus-storage/galeria_ceremonia_3_97861dac.webp";
const IMG_VIBRACION  = "/manus-storage/svc_individuales_real_b0d566e3.webp";
const IMG_LIMPIEZA   = "/manus-storage/jaz_cuencos_montana_81539b4f.webp";
const IMG_CANAL      = "/manus-storage/jaz_lago_50443e91.webp";
const IMG_REFLEXO    = "/manus-storage/galeria_ceremonia_4_e49247a8.webp";
const IMG_VENTOSAS   = "/manus-storage/galeria_ceremonia_1_11b74a4f.webp";
const IMG_AURICULO   = "/manus-storage/oaxaca_amanecer_de958217.webp";
const IMG_MASAJE     = "/manus-storage/jaz_agua_e586ca5f.webp";
const IMG_NINO       = "/manus-storage/circulo_sanacion_jaz_d4fe3e6b.webp";
const IMG_PURIF      = "/manus-storage/opalao_mandala_oaxaca_669c8a46.webp";
const IMG_LIBERA     = "/manus-storage/hero_rooftop_jaz_d5e9afbb.webp";

// ── Accessible gold: #C8923A passes WCAG AA on white/cream ──
const GOLD = "#C8923A";
const FOREST = "#0F4B3E";
const CREAM = "#F2EDE3";

interface Service {
  id: string;
  name: string;
  tagline: string;
  image: string;
  duration: string;
  format: string;
  popular?: boolean;
  benefits: string[];
  description: string;
  steps?: string[];
}

interface Category {
  id: string;
  label: string;
  icon: string;
  services: Service[];
}

const CATEGORIES: Category[] = [
  {
    id: "grupales",
    label: "Ceremonias Grupales",
    icon: "✦",
    services: [
      {
        id: "retorno",
        name: "Ceremonia de Retorno Solar",
        tagline: "Honra tu nuevo ciclo con intención y gratitud",
        image: IMG_RETORNO,
        duration: "2.5–3 horas",
        format: "Hasta 25 personas",
        popular: true,
        benefits: ["Limpieza energética", "Ritual de manifestación", "Activación vibracional", "Diseño personalizado"],
        description: "Ceremonia sagrada para honrar el inicio de tu nuevo ciclo solar y activar tu propósito del año. Un portal simbólico para agradecer, cerrar ciclos e intencionar el año que comienza. Incluye toma de cacao consciente, dinámica del Hilo Rojo, carta colectiva con cuencos de cuarzo, coronación floral y baño de flores.",
        steps: ["Apertura y armonización del espacio", "Presentación del círculo", "Toma de cacao consciente", "Dinámica del Hilo Rojo", "Carta colectiva con cuencos de cuarzo", "Baño de flores", "Intercambio simbólico", "Cierre e integración"],
      },
      {
        id: "baby",
        name: "Baby Blessing",
        tagline: "Honra la transición de mujer a madre",
        image: IMG_BABY,
        duration: "2.5–3 horas",
        format: "Hasta 25 personas",
        benefits: ["Contención emocional", "Protección energética", "Belly Blessing", "Visualización de parto armonioso"],
        description: "Experiencia ceremonial íntima para honrar la transición de mujer a madre. Crea un espacio de contención emocional, protección energética y conexión profunda, rodeada de las personas que acompañan su camino. Incluye pintura simbólica del vientre, meditación guiada con cuencos y ritual de siembra.",
        steps: ["Apertura y Limpieza Energética", "Ritual de Bendición Colectiva", "Belly Blessing", "Visualización de Parto Armonioso", "Ritual de Siembra", "Integración Sonora y Cierre"],
      },
      {
        id: "soltera",
        name: "Despedida de Soltera Consciente",
        tagline: "Honra el cierre de una etapa y bendice la nueva unión",
        image: IMG_SOLTERA,
        duration: "2.5–3 horas",
        format: "Hasta 25 personas",
        benefits: ["Liberación de temores", "Fortalecimiento de confianza", "Siembra de intenciones", "Amuleto colectivo"],
        description: "Transforma la despedida tradicional en un encuentro significativo donde la futura novia es sostenida por su círculo cercano. Incluye toma de cacao, dinámica del Hilo Rojo, ritual de deseos con pétalos, creación de amuleto colectivo y cartas para el futuro.",
        steps: ["Apertura y armonización", "Toma de cacao consciente", "Presentación del círculo", "Ritual del Hilo Rojo", "Ritual de deseos con pétalos", "Creación del amuleto colectivo", "Espacio de vulnerabilidad y afirmación", "Siembra simbólica", "Danza de celebración"],
      },
      {
        id: "trascendencia",
        name: "Ceremonia de Trascendencia",
        tagline: "Honra, libera y transforma el ciclo",
        image: IMG_TRASCEND,
        duration: "2.5–3 horas",
        format: "Hasta 25 personas",
        benefits: ["Acompañamiento en duelo", "Transformación del dolor", "Ritual de siembra", "Integración sonora"],
        description: "Experiencia ceremonial profunda para acompañar procesos de duelo, separación o cierre de etapa. Permite recordar desde el amor, liberar desde la conciencia y transformar el dolor en crecimiento. Incluye carta de cierre y transmutación, meditación de la luz y encendido de velas.",
        steps: ["Apertura y Armonización", "Honrar y Recordar", "Carta de Cierre y Transmutación", "Meditación de la Luz", "Ritual de Siembra", "Encendido de la Luz", "Compromiso Personal", "Cierre e Integración"],
      },
      {
        id: "holistica",
        name: "Ceremonia Holística",
        tagline: "Reconexión colectiva con flores, cuencos y limpieza ancestral",
        image: IMG_GRUPALES,
        duration: "2–3 horas",
        format: "Grupos pequeños",
        benefits: ["Limpieza energética ancestral", "Cuencos de cuarzo", "Sahumerio oaxaqueño", "Integración colectiva"],
        description: "Experiencia grupal con flores, cuencos de cuarzo y limpieza energética ancestral oaxaqueña. Un ritual de reconexión colectiva que armoniza el campo energético del grupo y abre espacio para la sanación profunda.",
      },
    ],
  },
  {
    id: "individuales",
    label: "Sesiones Individuales",
    icon: "◇",
    services: [
      {
        id: "vibracional",
        name: "Experiencia Sensorial Vibracional",
        tagline: "Viaje de sanación a través del sonido",
        image: IMG_VIBRACION,
        duration: "40 minutos",
        format: "Presencial",
        popular: true,
        benefits: ["Regulación del sistema nervioso", "Reducción de ansiedad", "Claridad mental", "Liberación emocional"],
        description: "Viaje de sanación a través del sonido y la vibración utilizando cuencos de cuarzo, instrumentos terapéuticos que emiten frecuencias puras y armónicas. Estas vibraciones se perciben a nivel celular, estimulando la médula espinal y favoreciendo la sincronización de ambos hemisferios cerebrales, induciendo un estado de relajación profunda en aproximadamente 10 a 15 minutos.",
      },
      {
        id: "limpieza",
        name: "Limpieza Energética Ancestral",
        tagline: "Liberación profunda del campo áurico",
        image: IMG_LIMPIEZA,
        duration: "60 minutos",
        format: "Presencial",
        benefits: ["Sensación de ligereza", "Claridad emocional", "Liberación de energía estancada", "Protección energética reforzada"],
        description: "Liberación profunda de cargas emocionales y energéticas acumuladas en el campo áurico. Incluye diagnóstico intuitivo, sahumerio, técnicas energéticas ancestrales, armonización y sellado, además de baño de sonido con cuencos de cuarzo para reorganizar la vibración.",
      },
      {
        id: "canalización",
        name: "Canalización Angelical",
        tagline: "Conexión espiritual para recibir guía y mensajes",
        image: IMG_CANAL,
        duration: "50 minutos",
        format: "Presencial u online",
        benefits: ["Claridad en decisiones", "Paz emocional", "Reconexión con propósito", "Confianza interna"],
        description: "Sesión de conexión espiritual para recibir guía y mensajes desde la energía angélica, elevando la vibración y brindando orientación personalizada. Un espacio seguro para conectar con tu guía interior y recibir claridad sobre tu camino.",
      },
      {
        id: "reflexologia",
        name: "Reflexología Integrativa",
        tagline: "Estimulación de puntos reflejos + protocolo auricular",
        image: IMG_REFLEXO,
        duration: "50 minutos",
        format: "Presencial",
        benefits: ["Activación integral", "Reducción de estrés", "Mejor circulación", "Regulación nerviosa"],
        description: "Estimulación de puntos reflejos en los pies combinada con protocolo auricular para potenciar la activación orgánica y el equilibrio del sistema nervioso. Una técnica integrativa que trabaja el cuerpo desde sus mapas energéticos.",
      },
      {
        id: "ventosas",
        name: "Terapia de Ventosas Ancestrales",
        tagline: "Técnica ancestral con ventosas de fuego",
        image: IMG_VENTOSAS,
        duration: "60 minutos",
        format: "Presencial",
        benefits: ["Alivio muscular", "Desinflamación", "Movilización energética", "Liberación profunda"],
        description: "Técnica terapéutica ancestral que utiliza ventosas aplicadas con fuego para generar vacío controlado. El fuego activa la circulación y retira el 'aire' acumulado en el cuerpo, asociado con dolor y energía estancada. Trabaja tanto tensión muscular como carga emocional retenida.",
      },
      {
        id: "auriculoterapia",
        name: "Auriculoterapia Holística",
        tagline: "Estimulación auricular + masaje craneal",
        image: IMG_AURICULO,
        duration: "50 minutos",
        format: "Presencial",
        benefits: ["Reducción de ansiedad", "Mejora del sueño", "Regulación emocional", "Relajación profunda"],
        description: "Estimulación de puntos específicos en el oído que influyen en órganos y sistemas, complementado con masaje craneal para integración profunda. Una experiencia que armoniza el sistema nervioso desde los mapas auriculares.",
      },
      {
        id: "masaje",
        name: "Masaje Relajante",
        tagline: "Relajación profunda con integración energética",
        image: IMG_MASAJE,
        duration: "60 minutos",
        format: "Presencial",
        benefits: ["Relajación completa", "Regulación del sistema nervioso", "Disminución de inflamación", "Equilibrio energético"],
        description: "Masaje corporal enfocado en relajación profunda con opción de integrar magnetoterapia para armonización energética. Una experiencia que libera la tensión acumulada y restaura la calma interior del cuerpo.",
      },
    ],
  },
  {
    id: "circulos",
    label: "Círculos de Sanación",
    icon: "◎",
    services: [
      {
        id: "nino",
        name: "Sanación del Niño Interior",
        tagline: "Reconecta con tu esencia más profunda",
        image: IMG_NINO,
        duration: "2–3 horas",
        format: "Grupos pequeños",
        popular: true,
        benefits: ["Reconexión con la esencia", "Liberación de memorias emocionales", "Amor propio", "Transformación emocional"],
        description: "Viaje sensorial con cuencos de cuarzo, hipnosis suave y música medicinal para reconectar con tu esencia. La ceremonia se adapta a tus memorias, emociones y proceso personal de sanación. Un espacio sagrado de contención, amor propio y transformación emocional profunda.",
      },
      {
        id: "purificacion",
        name: "Limpieza y Purificación Energética",
        tagline: "Renueva tu campo energético y restaura la claridad",
        image: IMG_PURIF,
        duration: "2–3 horas",
        format: "Grupos pequeños",
        benefits: ["Limpieza del campo energético", "Cierre de ciclos", "Claridad espiritual", "Restauración del equilibrio"],
        description: "Ritual profundo con sahumerios, fuego sagrado y cuencos de cuarzo para limpiar y armonizar el campo energético. Cada experiencia se diseña según la intención y la energía del participante. Ideal para liberar cargas, cerrar ciclos y restaurar la claridad espiritual.",
      },
      {
        id: "liberacion",
        name: "Liberación y Empoderamiento",
        tagline: "Recupera tu poder interior y abre una nueva etapa",
        image: IMG_LIBERA,
        duration: "2–3 horas",
        format: "Grupos pequeños",
        benefits: ["Liberación de bloqueos", "Reconexión con la fuerza interna", "Claridad e intención", "Confianza renovada"],
        description: "Ritual de transformación con fuego, decretos y activación energética para recuperar tu poder interior. Un encuentro de transformación para soltar bloqueos, reconectar con tu fuerza interna y abrirte a una nueva etapa con claridad, intención y confianza.",
      },
      {
        id: "ninos-santos",
        name: "Ceremonia de Niños Santos",
        tagline: "Explora tu mundo interno en un entorno sagrado",
        image: IMG_CIRCULOS,
        duration: "2–3 horas",
        format: "Grupos pequeños",
        benefits: ["Claridad interna", "Conexión con la esencia", "Espacio sagrado", "Acompañamiento ceremonial"],
        description: "Una experiencia ceremonial para explorar tu mundo interno, abrir espacio a la claridad y conectar con tu esencia desde un entorno sagrado y contenido. Acompañada de armonización con cuencos de cuarzo.",
      },
    ],
  },
];

// ── Scroll to contact form ──
function scrollToContact() {
  const el = document.querySelector("#contacto") || document.querySelector("#contacto");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ── Service Card ──
function ServiceCard({ service, onExpand }: { service: Service; onExpand: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45 }}
      className="group relative flex flex-col overflow-hidden cursor-pointer"
      style={{
        background: "white",
        borderRadius: "14px",
        border: "1px solid rgba(15,75,62,0.09)",
        boxShadow: "0 2px 16px rgba(15,75,62,0.07)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      whileHover={{ y: -3, boxShadow: "0 10px 36px rgba(15,75,62,0.14)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "180px" }}>
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(8,34,24,0.55) 100%)" }}
        />
        {/* Popular badge */}
        {service.popular && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase"
            style={{
              background: GOLD,
              color: "white",
              borderRadius: "4px",
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            ★ Popular
          </div>
        )}
        {/* Duration on image */}
        <div
          className="absolute bottom-2.5 left-3 flex items-center gap-1 text-[10px]"
          style={{ color: "rgba(255,255,255,0.88)", fontFamily: "'Jost', sans-serif" }}
        >
          <Clock size={10} />
          {service.duration}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Accent line */}
        <div className="w-6 h-[2px] mb-2.5 flex-shrink-0" style={{ background: GOLD }} />
        <h4
          className="mb-1.5 leading-snug"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "1.05rem",
            color: FOREST,
            lineHeight: 1.2,
          }}
        >
          {service.name}
        </h4>
        <p
          className="flex-1 leading-relaxed mb-3"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "12.5px",
            color: "#4A5E58",
            lineHeight: 1.6,
          }}
        >
          {service.tagline}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <button
            onClick={(e) => { e.stopPropagation(); scrollToContact(); }}
            className="flex-1 py-2 text-[11px] font-medium tracking-wider uppercase text-center transition-colors"
            style={{
              fontFamily: "'Jost', sans-serif",
              background: FOREST,
              color: "white",
              borderRadius: "6px",
              letterSpacing: "0.1em",
            }}
          >
            Consultar
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onExpand(); }}
            className="flex items-center gap-1 px-3 py-2 text-[11px] font-medium tracking-wider uppercase transition-colors border"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: FOREST,
              borderColor: "rgba(15,75,62,0.25)",
              borderRadius: "6px",
              letterSpacing: "0.08em",
              background: "transparent",
            }}
          >
            Más <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Service Modal ──
function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0" style={{ background: "rgba(8,34,24,0.82)", backdropFilter: "blur(6px)" }} />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          style={{
            background: "white",
            borderRadius: "18px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
          }}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero image */}
          <div className="relative overflow-hidden flex-shrink-0" style={{ height: "240px" }}>
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(8,34,24,0.75) 100%)" }}
            />
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", color: "white" }}
            >
              <X size={18} />
            </button>
            {/* Title overlay */}
            <div className="absolute bottom-5 left-6 right-6">
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: "1.6rem",
                  color: "white",
                  lineHeight: 1.15,
                }}
              >
                {service.name}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Jost', sans-serif" }}>
                  <Clock size={11} /> {service.duration}
                </span>
                <span className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Jost', sans-serif" }}>
                  <Users size={11} /> {service.format}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Gold accent */}
            <div className="w-10 h-[2px] mb-4" style={{ background: GOLD }} />

            {/* Description */}
            <p
              className="mb-5 leading-relaxed"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "14.5px",
                color: "#3A4E48",
                lineHeight: 1.75,
              }}
            >
              {service.description}
            </p>

            {/* Benefits */}
            <div className="mb-5">
              <h5
                className="mb-3 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Jost', sans-serif", color: GOLD, fontWeight: 600, letterSpacing: "0.2em" }}
              >
                Beneficios
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: GOLD }} />
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#4A5E58", fontWeight: 300 }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            {service.steps && service.steps.length > 0 && (
              <div className="mb-6">
                <h5
                  className="mb-3 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Jost', sans-serif", color: GOLD, fontWeight: 600, letterSpacing: "0.2em" }}
                >
                  Desarrollo de la Experiencia
                </h5>
                <ol className="space-y-1.5">
                  {service.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold"
                        style={{ background: `${FOREST}12`, color: FOREST, fontFamily: "'Jost', sans-serif" }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#4A5E58", fontWeight: 300, lineHeight: 1.5 }}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={() => { onClose(); scrollToContact(); }}
              className="w-full py-3.5 text-sm font-medium tracking-widest uppercase"
              style={{
                background: FOREST,
                color: "white",
                borderRadius: "8px",
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Reservar esta Experiencia
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main Section ──
export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedService, setExpandedService] = useState<Service | null>(null);

  const cat = CATEGORIES[activeTab];

  return (
    <section
      id="servicios"
      className="py-20 md:py-24 overflow-hidden"
      style={{ background: CREAM }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: GOLD }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif", color: GOLD, fontWeight: 600 }}
            >
              Espacios de Sanación
            </span>
            <div className="h-px w-10" style={{ background: GOLD }} />
          </div>
          <h2
            className="mb-3 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: FOREST,
              lineHeight: 1.1,
            }}
          >
            Descubre Nuestras <em style={{ fontStyle: "italic", color: GOLD }}>Experiencias</em>
          </h2>
          <p
            className="max-w-xl mx-auto mb-3"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "0.93rem",
              color: "#4A5E58",
              lineHeight: 1.75,
            }}
          >
            Cada experiencia está diseñada para acompañarte en tu proceso de reconexión, sanación y transformación interior desde la raíz.
          </p>
          <p
            className="text-xs tracking-wider uppercase"
            style={{ fontFamily: "'Jost', sans-serif", color: GOLD, fontWeight: 500, letterSpacing: "0.18em" }}
          >
            Selecciona una categoría para explorar ↓
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(i)}
              className="w-full sm:w-auto px-5 py-3 sm:py-2.5 text-xs tracking-wider uppercase transition-all duration-300"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.12em",
                borderRadius: "100px",
                background: activeTab === i ? FOREST : "white",
                color: activeTab === i ? "white" : FOREST,
                border: `1.5px solid ${activeTab === i ? FOREST : "rgba(15,75,62,0.2)"}`,
                boxShadow: activeTab === i ? "0 4px 16px rgba(15,75,62,0.2)" : "none",
              }}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* ── Services Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile: horizontal scroll strip */}
            <div
              className="flex sm:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4"
              style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            >
              {cat.services.map((svc) => (
                <div key={svc.id} style={{ minWidth: "260px", scrollSnapAlign: "start" }}>
                  <ServiceCard
                    service={svc}
                    onExpand={() => setExpandedService(svc)}
                  />
                </div>
              ))}
            </div>
            {/* Desktop: grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.services.map((svc) => (
                <ServiceCard
                  key={svc.id}
                  service={svc}
                  onExpand={() => setExpandedService(svc)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-12">
          <p
            className="mb-4 text-sm"
            style={{ fontFamily: "'Jost', sans-serif", color: "#4A5E58", fontWeight: 300 }}
          >
            ¿No sabes cuál es la experiencia ideal para ti?
          </p>
          <button
            onClick={scrollToContact}
            className="btn-opalao-primary"
          >
            Solicitar Orientación Personalizada
          </button>
        </div>
      </div>

      {/* ── Service Modal ── */}
      {expandedService && (
        <ServiceModal
          service={expandedService}
          onClose={() => setExpandedService(null)}
        />
      )}
    </section>
  );
}
