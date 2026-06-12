/*
 * OPALAO Testimonials Section — Tierra Sagrada design
 * Cream background, editorial quote style
 */
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "La ceremonia fue una de las experiencias más transformadoras de mi vida. Llegué cargando años de dolor y salí sintiéndome completamente liviana y renovada.",
    name: "Sofía R.",
    location: "Ciudad de México",
    service: "Ceremonia Holística",
  },
  {
    quote: "Los cuencos de cuarzo me llevaron a un estado de paz que no había sentido en años. Jassibe crea espacios muy seguros y llenos de amor.",
    name: "Mariana G.",
    location: "Oaxaca",
    service: "Experiencia Sensorial Vibracional",
  },
  {
    quote: "No sabía qué esperar, pero desde el primer momento sentí que estaba exactamente donde debía estar. Una experiencia que recomiendo con el corazón.",
    name: "Ana P.",
    location: "Huatulco",
    service: "Sesión Individual",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "oklch(0.99 0.006 75)" }}>
      {/* Nature leaf texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/manus-storage/leaf_texture_2_71e3bddc.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
          mixBlendMode: "multiply",
        }}
      />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-px" style={{ background: "oklch(0.78 0.135 78)" }} />
              <span className="section-label">Experiencias Reales</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                color: "oklch(0.22 0.05 162)",
                lineHeight: 1.1,
              }}
            >
              Lo que dicen quienes ya<br />
              <em style={{ color: "oklch(0.78 0.135 78)" }}>transitaron el camino</em>
            </motion.h2>
            <div className="gold-line-left w-16 mb-10" />

            {/* Navigation dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? "2rem" : "0.5rem",
                    height: "2px",
                    background: i === active ? "oklch(0.78 0.135 78)" : "oklch(0.88 0.022 78)",
                  }}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Testimonial */}
          <div className="lg:col-span-3">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative pl-8"
            >
              {/* Quote mark */}
              <div
                className="absolute left-0 top-0"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                  lineHeight: 1,
                  color: "oklch(0.78 0.135 78)",
                  opacity: 0.4,
                  fontWeight: 300,
                }}
              >
                "
              </div>

              <blockquote
                className="mb-8 pt-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  color: "oklch(0.30 0.04 155)",
                  lineHeight: 1.6,
                }}
              >
                {testimonials[active].quote}
              </blockquote>

              <div className="gold-line-left w-12 mb-6" />

              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "oklch(0.22 0.05 162)",
                  }}
                >
                  {testimonials[active].name}
                </p>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.75rem",
                    color: "oklch(0.52 0.025 155)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {testimonials[active].location} · {testimonials[active].service}
                </p>
              </div>
            </motion.div>

            {/* Other testimonials preview */}
            <div className="mt-12 grid grid-cols-1 gap-4">
              {testimonials.map((t, i) =>
                i !== active ? (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="text-left p-4 border transition-all duration-300 hover:border-[oklch(0.70_0.12_78)]"
                    style={{ borderColor: "oklch(0.88 0.022 78)" }}
                  >
                    <p
                      className="line-clamp-2"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.8rem",
                        color: "oklch(0.52 0.025 155)",
                        lineHeight: 1.6,
                      }}
                    >
                      "{t.quote.substring(0, 80)}..."
                    </p>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 400,
                        fontSize: "0.7rem",
                        color: "oklch(0.78 0.135 78)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      — {t.name}
                    </p>
                  </button>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
