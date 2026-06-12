/*
 * OPALAO ProductsSection — Tierra Sagrada design
 * Redesigned: product cards with images + Opalao logo badge
 * Palette: Bosque #0F4B3E · Arena #F6F1E7 · Sol Dorado #F2B84B · Salvia #8FAE96
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LOGO_URL = "/manus-storage/opalao_logo_product_293e8de8.webp";
const LEAF_BG = "/manus-storage/leaf_texture_2_7cf367bb.webp";

const products = [
  {
    name: "Kits de Limpieza Energética",
    description: "Sahumerios, cuarzos y hierbas seleccionadas para tu práctica personal de purificación.",
    image: "/manus-storage/product_kit_limpieza_0b1e84da.webp",
    tag: "Más Popular",
  },
  {
    name: "Esencias y Aceites",
    description: "Aceites esenciales y esencias florales formuladas para acompañar procesos de transformación.",
    image: "/manus-storage/product_esencias_aceites_f5dbc71c.webp",
    tag: null,
  },
  {
    name: "Lociones Rituales",
    description: "Preparaciones artesanales con plantas medicinales y energía intencional.",
    image: "/manus-storage/product_lociones_rituales_dd580fed.webp",
    tag: null,
  },
  {
    name: "Cuarzos y Cristales",
    description: "Piezas seleccionadas y activadas para amplificar tu energía y proteger tu espacio.",
    image: "/manus-storage/product_cuarzos_cristales_56e49f60.webp",
    tag: null,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="productos"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "oklch(0.93 0.028 155)" }}
    >
      {/* Leaf texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('${LEAF_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.14,
          mixBlendMode: "multiply",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 flex-shrink-0" style={{ background: "#F2B84B" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif", color: "#F2B84B", fontWeight: 500 }}
            >
              Tienda Opalao
            </span>
            <div className="h-px w-12 flex-shrink-0" style={{ background: "#F2B84B" }} />
          </div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              color: "oklch(0.22 0.05 162)",
              lineHeight: 1.1,
            }}
          >
            Productos <em style={{ color: "oklch(0.78 0.135 78)" }}>Energéticos</em>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "oklch(0.40 0.03 155)",
              lineHeight: 1.8,
            }}
          >
            Cada producto de Opalao está preparado con intención y conocimiento ancestral para que puedas continuar tu proceso de sanación en casa.
          </p>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden cursor-pointer"
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(15,75,62,0.08)",
                border: "1px solid rgba(15,75,62,0.07)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(15,75,62,0.15)" }}
              onClick={() => {
                const el = document.querySelector("#contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Product image */}
              <div
                className="relative overflow-hidden flex-shrink-0"
                style={{ height: "220px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(15,75,62,0.15) 100%)" }}
                />
                {/* Popular tag */}
                {product.tag && (
                  <div
                    className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium"
                    style={{
                      background: "#F2B84B",
                      color: "#1A3A2E",
                      fontFamily: "'Jost', sans-serif",
                      letterSpacing: "0.1em",
                      borderRadius: "4px",
                    }}
                  >
                    {product.tag}
                  </div>
                )}

              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Gold accent line */}
                <div className="w-8 h-0.5 mb-3 flex-shrink-0" style={{ background: "#F2B84B" }} />
                <h4
                  className="mb-2 leading-snug"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "#1A3A2E",
                    lineHeight: 1.25,
                  }}
                >
                  {product.name}
                </h4>
                <p
                  className="flex-1 leading-relaxed mb-4"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "#4A5E58",
                    lineHeight: 1.65,
                  }}
                >
                  {product.description}
                </p>
                {/* CTA */}
                <div
                  className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    color: "#0F4B3E",
                    letterSpacing: "0.1em",
                  }}
                >
                  Consultar
                  <ArrowRight size={11} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-opalao-primary"
          >
            Consultar Disponibilidad
          </button>
        </motion.div>
      </div>
    </section>
  );
}
