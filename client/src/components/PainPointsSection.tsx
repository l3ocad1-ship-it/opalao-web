/*
 * OPALAO Pain Points Section — Versión Viva
 * Uses LanguageContext for ES/EN
 * Nature photo background (Oaxaca lake/tree) with dark green overlay
 * Spanish-only cards with large accessible typography
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../contexts/LanguageContext";

export default function PainPointsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const pp = t.painPoints;

  return (
    <section
      id="pain-points"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Full background: nature photo with green overlay ── */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/painpoints_nature_c5f1d812.webp"
          alt="Naturaleza oaxaqueña — lago y árbol al atardecer, fondo sección Opalao"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(8,34,24,0.85) 0%, rgba(10,51,41,0.78) 50%, rgba(8,34,24,0.90) 100%)",
          }}
        />
      </div>

      {/* Decorative constellation dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { x: "8%", y: "12%", r: 1.5 }, { x: "15%", y: "28%", r: 1 },
          { x: "88%", y: "18%", r: 1.5 }, { x: "92%", y: "45%", r: 1 },
          { x: "5%", y: "65%", r: 1 }, { x: "95%", y: "72%", r: 1.5 },
          { x: "50%", y: "8%", r: 1 }, { x: "72%", y: "88%", r: 1 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
            className="absolute rounded-full"
            style={{
              left: dot.x, top: dot.y,
              width: dot.r * 2, height: dot.r * 2,
              background: "rgba(242,184,75,0.7)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "rgba(242,184,75,0.6)" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,184,75,0.85)", fontWeight: 400 }}>
              {pp.label}
            </span>
            <div className="h-px w-10" style={{ background: "rgba(242,184,75,0.6)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "#FFFFFF",
              lineHeight: 1.15,
            }}
          >
            {pp.title}<br />
            <em style={{ fontStyle: "italic", color: "rgba(168,212,184,0.95)" }}>{pp.titleItalic}</em>
          </h2>
          <p
            className="mt-5 max-w-xl mx-auto"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}
          >
            {pp.subtitle}
          </p>
        </motion.div>

        {/* Pain Points — Spanish-only cards with large accessible text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pp.items.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, background: "rgba(255,255,255,0.09)" }}
              className="p-8 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(242,184,75,0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
              }}
            >
              {/* Gold dot accent */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#F2B84B" }} />
                <div className="h-px flex-1" style={{ background: "rgba(242,184,75,0.2)" }} />
              </div>
              {/* Title — large, accessible */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.3rem, 2.8vw, 1.6rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                }}
              >
                {point.title}
              </h3>
              {/* Detail — readable size */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.8vw, 16px)",
                  color: "rgba(200,230,215,0.88)",
                  lineHeight: 1.75,
                }}
              >
                {point.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bridge CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#servicios");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-opalao-primary"
          >
            {pp.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
