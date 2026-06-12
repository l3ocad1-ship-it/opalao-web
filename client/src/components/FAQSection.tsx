/*
 * OPALAO FAQ Section — Tierra Sagrada design
 * Elimina objeciones justo antes del formulario de reservas
 * Acordeón elegante con líneas doradas
 */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto cuesta una sesión?",
    answer:
      "Los precios varían según el servicio y el formato. Escríbenos por WhatsApp o llena el formulario de contacto. Nuestro equipo se pone en contacto contigo para diseñar tu experiencia.",
  },
  {
    question: "¿Qué pasa exactamente en una ceremonia?",
    answer:
      "Una ceremonia es un portal de manifestación y transformación. Creamos un espacio sagrado con intención para armonizar tu energía, honrar tu proceso y abrir camino a nuevas posibilidades desde la conexión, la claridad y el equilibrio interior.",
  },
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No. Las experiencias están diseñadas para cualquier persona, independientemente de su nivel de familiaridad con las prácticas holísticas.",
  },
  {
    question: "¿Las terapias sustituyen tratamiento médico?",
    answer:
      "No. Son complementarias. Siempre recomendamos continuar con tu atención médica convencional de manera paralela.",
  },
  {
    question: "¿Cómo agendo mi sesión?",
    answer:
      "Escríbenos por WhatsApp o llena el formulario de contacto. Nuestro equipo se pone en contacto contigo para diseñar tu experiencia.",
  },
  {
    question: "¿Tienen suficiente experiencia acompañando mi proceso?",
    answer:
      "Con más de 5 años de experiencia como centro y una herencia familiar de muchos años acompañando procesos de sanación, la intuición y el conocimiento transmitido de generación en generación. Creemos que cada persona es única, por eso cada ceremonia, ritual o acompañamiento se diseña de manera personalizada, honrando el momento, la intención y el proceso interior de quien llega a nosotros.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b"
      style={{ borderColor: "oklch(0.88 0.022 78)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-6 text-left gap-6 group"
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "1.15rem",
            color: open ? "oklch(0.22 0.05 162)" : "oklch(0.30 0.04 155)",
            lineHeight: 1.35,
            transition: "color 0.2s",
          }}
        >
          {faq.question}
        </span>
        <span
          className="mt-1 flex-shrink-0 transition-transform duration-300"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: "oklch(0.78 0.135 78)",
            fontSize: "1.4rem",
            lineHeight: 1,
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 pr-10"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: "0.93rem",
                color: "oklch(0.45 0.03 155)",
                lineHeight: 1.8,
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden py-28" style={{ background: "oklch(0.96 0.016 78)" }}>
      {/* Nature leaf texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/manus-storage/leaf_texture_3_3d7ce4c4.png')`,
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
              <span className="section-label">Resolvemos Tus Dudas</span>
              <div className="gold-line flex-1 max-w-16" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                color: "oklch(0.22 0.05 162)",
                lineHeight: 1.1,
              }}
            >
              Preguntas<br />
              <em style={{ fontStyle: "italic", color: "oklch(0.78 0.135 78)" }}>
                Frecuentes
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: "0.93rem",
                color: "oklch(0.50 0.03 155)",
                lineHeight: 1.75,
              }}
            >
              Todo lo que necesitas saber antes de reservar tu primera sesión.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  const el = document.querySelector("#contacto");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-opalao"
              >
                Agendar Sesión
              </button>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-3">
            <div
              className="border-t"
              style={{ borderColor: "oklch(0.88 0.022 78)" }}
            >
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
