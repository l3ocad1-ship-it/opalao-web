/*
 * OPALAO Contact & Footer — Tierra Sagrada design
 * Cream background, editorial layout
 * Real social links + Privacy Policy + Terms & Conditions
 */
import { useState } from "react";
import { motion } from "framer-motion";
import LegalModal, { LegalType } from "./LegalModal";

const INSTAGRAM_URL = "https://www.instagram.com/0palao";
const FACEBOOK_URL  = "https://www.facebook.com/profile.php?id=61576727371786";
const TIKTOK_URL    = "https://www.tiktok.com/@0palao";
const WA_URL        = "https://wa.me/529515639508";

export default function ContactSection() {
  const [legalType, setLegalType] = useState<LegalType>(null);

  return (
    <>
      <section id="footer" className="py-24" style={{ background: "oklch(0.96 0.016 78)" }}>
        <div className="container">
          {/* Divider */}
          <div className="gold-line mb-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "2rem",
                    letterSpacing: "0.2em",
                    color: "oklch(0.22 0.05 162)",
                  }}
                >
                  OPALAO
                </h3>
                <p
                  className="mb-6 text-[0.65rem] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "oklch(0.78 0.135 78)" }}
                >
                  Tu Portal Espiritual
                </p>
                <div className="gold-line-left w-12 mb-6" />
                <p
                  className="leading-relaxed mb-6"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.85rem",
                    color: "oklch(0.52 0.025 155)",
                    lineHeight: 1.8,
                  }}
                >
                  Centro Holístico en Oaxaca, México.<br />Sanación · Conciencia · Expansión
                </p>
                {/* Social icons */}
                <div className="flex gap-3">
                  {[
                    {
                      href: INSTAGRAM_URL,
                      label: "Instagram",
                      icon: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <circle cx="12" cy="12" r="4"/>
                          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                        </svg>
                      ),
                    },
                    {
                      href: FACEBOOK_URL,
                      label: "Facebook",
                      icon: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                        </svg>
                      ),
                    },
                    {
                      href: TIKTOK_URL,
                      label: "TikTok",
                      icon: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                        </svg>
                      ),
                    },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group" aria-label={s.label}>
                      <div
                        className="w-9 h-9 flex items-center justify-center border transition-all duration-300 group-hover:border-[oklch(0.70_0.12_78)] group-hover:text-[oklch(0.70_0.12_78)]"
                        style={{ borderColor: "oklch(0.88 0.022 78)", color: "oklch(0.52 0.025 155)" }}
                      >
                        {s.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Servicios */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="section-label mb-6">Servicios</p>
                <div className="space-y-3">
                  {[
                    { label: "Ceremonias Holísticas", href: "#servicios" },
                    { label: "Sesiones Individuales", href: "#servicios" },
                    { label: "Círculos de Sanación", href: "#servicios" },
                    { label: "Retiros en Oaxaca", href: "#retiros" },
                  ].map((link) => (
                    <div key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); const el = document.querySelector(link.href); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                        className="group flex items-center gap-2 transition-colors duration-300"
                        style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "oklch(0.40 0.03 155)" }}
                      >
                        <span className="w-0 h-px transition-all duration-300 group-hover:w-4" style={{ background: "oklch(0.78 0.135 78)" }} />
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Información */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="section-label mb-6">Información</p>
                <div className="space-y-3">
                  {[
                    { label: "Conoce Opalao", href: "#conoce-opalao" },
                    { label: "Blog & Reflexiones", href: "#blog" },
                    { label: "Tienda", href: "#productos" },
                    { label: "Preguntas Frecuentes", href: "#faq" },
                  ].map((link) => (
                    <div key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); const el = document.querySelector(link.href); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                        className="group flex items-center gap-2 transition-colors duration-300"
                        style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "oklch(0.40 0.03 155)" }}
                      >
                        <span className="w-0 h-px transition-all duration-300 group-hover:w-4" style={{ background: "oklch(0.78 0.135 78)" }} />
                        {link.label}
                      </a>
                    </div>
                  ))}
                  {/* Legal links */}
                  <div>
                    <button
                      onClick={() => setLegalType("privacy")}
                      className="group flex items-center gap-2 transition-colors duration-300 w-full text-left"
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "oklch(0.40 0.03 155)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <span className="w-0 h-px transition-all duration-300 group-hover:w-4" style={{ background: "oklch(0.78 0.135 78)" }} />
                      Política de Privacidad
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setLegalType("terms")}
                      className="group flex items-center gap-2 transition-colors duration-300 w-full text-left"
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "oklch(0.40 0.03 155)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <span className="w-0 h-px transition-all duration-300 group-hover:w-4" style={{ background: "oklch(0.78 0.135 78)" }} />
                      Términos y Condiciones
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="section-label mb-6">Contacto</p>
                <div className="space-y-5">
                  <div>
                    <p
                      className="text-[0.6rem] tracking-[0.2em] uppercase mb-1"
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "oklch(0.78 0.135 78)" }}
                    >
                      Ubicación
                    </p>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.85rem",
                        color: "oklch(0.40 0.03 155)",
                      }}
                    >
                      Oaxaca de Juárez, Oaxaca<br />México
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[0.6rem] tracking-[0.2em] uppercase mb-1"
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "oklch(0.78 0.135 78)" }}
                    >
                      WhatsApp
                    </p>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.85rem",
                        color: "oklch(0.40 0.03 155)",
                        textDecoration: "none",
                      }}
                    >
                      +52 951 563 9508
                    </a>
                  </div>
                  <div>
                    <p
                      className="text-[0.6rem] tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "oklch(0.78 0.135 78)" }}
                    >
                      Síguenos
                    </p>
                    <div className="flex gap-3">
                      {[
                        { href: INSTAGRAM_URL, label: "Instagram" },
                        { href: FACEBOOK_URL, label: "Facebook" },
                        { href: TIKTOK_URL, label: "TikTok" },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] tracking-wider uppercase transition-colors duration-200 hover:text-[oklch(0.70_0.12_78)]"
                          style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, color: "oklch(0.52 0.025 155)", textDecoration: "none" }}
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="gold-line mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.72rem",
                color: "oklch(0.65 0.02 75)",
                letterSpacing: "0.05em",
              }}
            >
              © {new Date().getFullYear()} Centro Opalao · Todos los derechos reservados ·{" "}
              <button
                onClick={() => setLegalType("privacy")}
                style={{ background: "none", border: "none", cursor: "pointer", color: "oklch(0.65 0.02 75)", fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", padding: 0, textDecoration: "underline" }}
              >
                Privacidad
              </button>
              {" · "}
              <button
                onClick={() => setLegalType("terms")}
                style={{ background: "none", border: "none", cursor: "pointer", color: "oklch(0.65 0.02 75)", fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", padding: 0, textDecoration: "underline" }}
              >
                Términos
              </button>
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "0.85rem",
                color: "oklch(0.78 0.135 78)",
              }}
            >
              Diseñada con amor por Selb Studio
            </p>
          </div>
        </div>
      </section>

      {/* Legal Modal */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
}
