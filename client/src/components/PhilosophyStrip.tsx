/*
 * OPALAO Philosophy Strip — Constelación de los 4 Pilares
 * Dark green band with constellation nodes connecting the 4 pillars
 * Each pillar: numeral + name + tagline (from client brief)
 * Animated entrance with stagger
 */
import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";

const pillars = [
  {
    numeral: "I",
    text: "Cuerpo",
    tagline: "Equilibrio energético",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    numeral: "II",
    text: "Mente",
    tagline: "Acompañamiento integral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2.5 4.5V13a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5z" />
        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </svg>
    ),
  },
  {
    numeral: "III",
    text: "Energía",
    tagline: "Armonización y equilibrio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    numeral: "IV",
    text: "Espíritu",
    tagline: "Ceremonias y rituales conscientes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function PhilosophyStrip() {
  const { t } = useLang();
  const ph = t.philosophy;
  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{ background: "#0A3329" }}
    >
      {/* ── Constellation line SVG behind pillars ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
        <svg
          viewBox="0 0 900 60"
          className="w-full max-w-5xl opacity-15"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Connecting lines */}
          <line x1="120" y1="30" x2="300" y2="30" stroke="#F2B84B" strokeWidth="0.6" strokeDasharray="4 6" />
          <line x1="300" y1="30" x2="600" y2="30" stroke="#F2B84B" strokeWidth="0.6" strokeDasharray="4 6" />
          <line x1="600" y1="30" x2="780" y2="30" stroke="#F2B84B" strokeWidth="0.6" strokeDasharray="4 6" />
          {/* Node dots */}
          {[120, 300, 600, 780].map((x, i) => (
            <circle key={i} cx={x} cy="30" r="3.5" fill="#F2B84B" opacity="0.7" />
          ))}
          {/* Small satellite dots */}
          {[120, 300, 600, 780].map((x, i) => (
            <circle key={`s${i}`} cx={x} cy="30" r="7" stroke="#F2B84B" strokeWidth="0.5" opacity="0.3" />
          ))}
        </svg>
      </div>

      {/* ── Floating leaf decorations ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-6 top-1/2 -translate-y-1/2 opacity-10"
        >
          <svg viewBox="0 0 60 80" width="36" height="48" fill="none">
            <ellipse cx="30" cy="40" rx="18" ry="32" fill="#A8D4B8" transform="rotate(-15 30 40)" />
            <line x1="30" y1="8" x2="30" y2="72" stroke="#0A3329" strokeWidth="1" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ y: [0, 6, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10"
        >
          <svg viewBox="0 0 60 80" width="28" height="40" fill="none">
            <ellipse cx="30" cy="40" rx="15" ry="28" fill="#F2B84B" transform="rotate(20 30 40)" />
            <line x1="30" y1="12" x2="30" y2="68" stroke="#0A3329" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p
            style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(242,184,75,0.7)",
            }}
          >
            {ph.label}
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {ph.pillars.map((pillar, i) => {
            const icons = [
              <svg key="body" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
              <svg key="mind" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2.5 4.5V13a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5z" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>,
              <svg key="energy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
              <svg key="spirit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
            ];
            return (
            <motion.div
              key={pillar.numeral}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-3 group"
            >
              {/* Constellation node + icon */}
              <div
                className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(242,184,75,0.25)",
                  borderRadius: "50%",
                  background: "rgba(242,184,75,0.06)",
                  color: "rgba(242,184,75,0.75)",
                }}
              >
                {icons[i]}
                {/* Outer ring pulse */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(242,184,75,0.3)" }}
                />
              </div>

              {/* Numeral */}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.7rem",
                  color: "rgba(242,184,75,0.55)",
                  letterSpacing: "0.1em",
                }}
              >
                {pillar.numeral}
              </span>

              {/* Name */}
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(246,241,231,0.95)",
                }}
              >
                {pillar.text}
              </span>

              {/* Tagline */}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "rgba(168,212,184,0.88)",
                  lineHeight: 1.45,
                }}
              >
                {pillar.tagline}
              </span>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
