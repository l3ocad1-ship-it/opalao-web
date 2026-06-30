/*
 * OPALAO RetreatsSection — Rediseño con 3 destinos
 * Design: Tierra Sagrada · Full-bleed hero + 3 destination cards
 * Each card has image, destination, description, and CTA → contact form
 */
import { motion } from "framer-motion";
import { MapPin, Users, ArrowRight } from "lucide-react";

const IMG_HIERVE    = "/retiros/ceremonia-ninos-santos-retiro-oaxaca.webp";
const IMG_AMANECER  = "/retiros/conexion-ancestros-retiro-oaxaca.webp";
const IMG_ATARDECER = "/retiros/ritual-liberacion-linaje-retiro-oaxaca.webp";
const IMG_HERO      = "/retiros/retiro-holistico-paisaje-oaxaca.webp";

const GOLD   = "#C8923A";

const retreats = [
  {
    id: "hierve",
    destination: "Hierve el Agua",
    region: "Oaxaca, México",
    title: "Ceremonia de Niños Santos",
    description: "Vive una inmersión de dos días en un espacio sagrado de Oaxaca, donde el temazcal, los cuencos de cuarzo, las limpiezas energéticas y las meditaciones te guiarán a una transformación profunda. Transporte, alojamiento y alimento incluidos.",
    groupSize: "Máx. 15 personas",
    includes: ["Temazcal", "Cuencos de cuarzo", "Limpieza energética", "Meditación guiada"],
    image: IMG_HIERVE,
  },
  {
    id: "oaxaca",
    destination: "Centro Histórico",
    region: "Oaxaca, México",
    title: "Conexión con mis Ancestros",
    description: "Invocamos la sabiduría del linaje. A través de cuencos de cuarzo, limpiezas energéticas y una ceremonia de cacao, abrimos un canal de transmutación generacional, guiados por hipnosis y ondas sanadoras. En este espacio, enviamos luz, sanación y una poderosa renovación a nuestras raíces. Todo está incluido para acompañarte en esta profunda transformación.",
    groupSize: "Máx. 15 personas",
    includes: ["Cuencos de cuarzo", "Limpieza energética", "Ceremonia de cacao", "Hipnosis sanadora"],
    image: IMG_AMANECER,
  },
  {
    id: "sierra",
    destination: "Sierra Norte",
    region: "Oaxaca, México",
    title: "Ritual de Liberación de Linaje",
    description: "Dos días honramos la memoria de nuestras ancestras. Mediante cuencos, limpiezas energéticas y rituales, sanamos las memorias del pasado y abrimos caminos de amor, fuerza y plenitud en nuestra historia familiar.",
    groupSize: "Máx. 15 personas",
    includes: ["Cuencos de cuarzo", "Limpieza energética", "Rituales de sanación", "Integración sonora"],
    image: IMG_ATARDECER,
  },
];

function scrollToContact() {
  const el = document.querySelector("#contacto");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function RetreatsSection() {
  return (
    <section
      id="retiros"
      className="relative overflow-hidden"
      style={{ background: "#1A2E26" }}
    >
      {/* Hero background */}
      <div className="relative overflow-hidden" style={{ height: "48vh", minHeight: "300px" }}>
        <img
          src={IMG_HERO}
          alt="Retiros holísticos en Oaxaca — Opalao"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(8,34,24,0.3) 0%, rgba(8,34,24,0.6) 60%, #1A2E26 100%)",
          }}
        />
        {/* Header overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: GOLD }} />
              <span
                className="tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Jost', sans-serif", color: "#FFFFFF", fontWeight: 600, fontSize: "16pt" }}
              >
                Experiencias Inmersivas
              </span>
              <div className="h-px w-10" style={{ background: GOLD }} />
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Retiros en <em style={{ color: GOLD, fontStyle: "italic" }}>Oaxaca</em>
            </h2>
            <p
              className="mt-3 max-w-lg mx-auto"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
              }}
            >
              Espacios de inmersión profunda en los paisajes más sagrados de Oaxaca. Cada retiro es un encuentro genuino contigo mismo.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {retreats.map((retreat, i) => (
            <motion.div
              key={retreat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex flex-col overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden flex-shrink-0" style={{ height: "200px" }}>
                <img
                  src={retreat.image}
                  alt={`${retreat.title} — Opalao`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(8,34,24,0.75) 100%)" }}
                />
                {/* Badge "Próximamente" */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase"
                  style={{
                    background: GOLD,
                    color: "white",
                    borderRadius: "4px",
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  Próximamente
                </div>
                {/* Destination */}
                <div className="absolute bottom-3 left-4">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <MapPin size={11} style={{ color: GOLD }} />
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: GOLD,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {retreat.destination}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>
                    {retreat.region}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Accent */}
                <div className="w-6 h-[2px] mb-3" style={{ background: GOLD }} />

                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  {retreat.title}
                </h3>

                <p
                  className="mb-4 flex-1"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.62)",
                    lineHeight: 1.65,
                  }}
                >
                  {retreat.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Jost', sans-serif", fontSize: "11px" }}>
                    <Users size={11} style={{ color: GOLD }} />
                    {retreat.groupSize}
                  </span>
                </div>

                {/* Includes */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {retreat.includes.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-[10px]"
                      style={{
                        background: `${GOLD}18`,
                        color: GOLD,
                        borderRadius: "100px",
                        border: `1px solid ${GOLD}35`,
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 w-full py-2.5 transition-all duration-200"
                  style={{
                    background: "transparent",
                    color: GOLD,
                    border: `1.5px solid ${GOLD}55`,
                    borderRadius: "8px",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = GOLD;
                    (e.currentTarget as HTMLButtonElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = GOLD;
                  }}
                >
                  Consultar Disponibilidad <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p
            className="mb-4 text-sm"
            style={{ fontFamily: "'Jost', sans-serif", color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
          >
            ¿Buscas un retiro personalizado para tu grupo o empresa?
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-200"
            style={{
              background: GOLD,
              color: "white",
              borderRadius: "8px",
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.15em",
              border: "none",
              cursor: "pointer",
            }}
          >
            Diseñar mi Retiro a Medida
          </button>
        </motion.div>
      </div>
    </section>
  );
}
