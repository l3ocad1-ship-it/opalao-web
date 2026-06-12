/*
 * OPALAO Navbar — Mobile-First Design
 * Philosophy: Organic warmth, ceremonial presence
 * Palette: Bosque #0F4B3E · Arena #F6F1E7 · Sol Dorado #F2B84B
 * Mobile: hamburger overlay full-screen verde bosque
 * Desktop: horizontal nav + Servicios dropdown
 * FIXES: duplicate X removed, separate mobile/desktop dropdown state, ES/EN adaptive color
 */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

// ── Language Toggle Component ──
function LangToggle({ mobile = false, onDark = false }: { mobile?: boolean; onDark?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className="flex items-center gap-1 rounded-full transition-all duration-200 hover:opacity-80"
      style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: mobile ? "9px" : "9.5px",
        fontWeight: 500,
        letterSpacing: "0.12em",
        padding: mobile ? "5px 10px" : "6px 12px",
        border: onDark
          ? "1px solid rgba(242,184,75,0.55)"
          : "1px solid rgba(15,75,62,0.45)",
        background: onDark
          ? "rgba(242,184,75,0.10)"
          : "rgba(15,75,62,0.08)",
        color: onDark
          ? "rgba(242,184,75,0.95)"
          : "rgba(15,75,62,0.92)",
        backdropFilter: "blur(4px)",
      }}
      aria-label="Toggle language"
    >
      <span style={{ opacity: lang === 'es' ? 1 : 0.45 }}>ES</span>
      <span style={{ opacity: 0.35, fontSize: "8px" }}>|</span>
      <span style={{ opacity: lang === 'en' ? 1 : 0.45 }}>EN</span>
    </button>
  );
}

export default function Navbar() {
  const { t, lang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.inicio, href: "#inicio" },
    {
      label: t.nav.servicios,
      href: "#servicios",
      dropdown: [
        { label: lang === 'es' ? "Ceremonias Grupales" : "Group Ceremonies", href: "#servicios", sub: lang === 'es' ? "Rituales colectivos de sanación" : "Collective healing rituals" },
        { label: lang === 'es' ? "Sesiones Individuales" : "Individual Sessions", href: "#servicios", sub: lang === 'es' ? "Acompañamiento personalizado" : "Personalized support" },
        { label: lang === 'es' ? "Círculos de Sanación" : "Healing Circles", href: "#servicios", sub: lang === 'es' ? "Comunidad y transformación" : "Community & transformation" },
      ],
    },
    { label: t.nav.sobre, href: "#conoce-opalao" },
    { label: t.nav.retiros, href: "#retiros" },
    { label: t.nav.tienda, href: "#productos" },
    { label: t.nav.blog, href: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu resets sub-menus too
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();
    setDesktopServicesOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ES/EN is gold on dark hero bg, green on scrolled light bg
  const onDarkBg = !scrolled;

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(246,241,231,0.97)"
            : "linear-gradient(to bottom, rgba(5,18,12,0.72) 0%, rgba(5,18,12,0.0) 100%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(15,75,62,0.10)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(15,75,62,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
              className="flex items-center group"
            >
              <img
                src={scrolled ? "/manus-storage/logo_green_721c0646.webp" : "/manus-storage/logo_gold_cd81802c.webp"}
                alt="Opalao Centro Holístico"
                className="transition-all duration-500"
                style={{ height: "clamp(50px, 7vh, 68px)", width: "auto", objectFit: "contain" }}
              />
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                      className="flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        color: scrolled ? "oklch(0.29 0.082 162)" : "oklch(0.93 0.012 75)",
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={11}
                        className="transition-transform duration-200"
                        style={{ transform: desktopServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    <AnimatePresence>
                      {desktopServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-2xl overflow-hidden shadow-xl"
                          style={{
                            background: "oklch(0.98 0.008 78)",
                            border: "1px solid rgba(15,75,62,0.12)",
                          }}
                        >
                          {link.dropdown.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => handleNavClick(item.href)}
                              className="w-full text-left px-5 py-3.5 transition-colors hover:bg-[oklch(0.93_0.028_155/0.3)] border-b last:border-b-0"
                              style={{ borderColor: "rgba(15,75,62,0.08)" }}
                            >
                              <div
                                className="text-sm font-medium"
                                style={{ fontFamily: "'Jost', sans-serif", color: "oklch(0.29 0.082 162)" }}
                              >
                                {item.label}
                              </div>
                              <div
                                className="text-xs mt-0.5"
                                style={{ fontFamily: "'Jost', sans-serif", color: "oklch(0.52 0.02 75)" }}
                              >
                                {item.sub}
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="px-3 py-2 rounded-md transition-all duration-200 relative group"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      color: scrolled ? "oklch(0.29 0.082 162)" : "oklch(0.93 0.012 75)",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-1 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ background: "oklch(0.78 0.135 78)" }}
                    />
                  </a>
                )
              )}
            </div>

            {/* DESKTOP CTA + LANG TOGGLE */}
            <div className="hidden lg:flex items-center gap-3">
              <LangToggle onDark={onDarkBg} />
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
                className="btn-opalao-primary"
                style={{ fontSize: "10px", padding: "11px 22px" }}
              >
                Reservar Sesión
              </a>
            </div>

            {/* MOBILE: Only Hamburger (or nothing when open — X is inside overlay) */}
            <div className="flex lg:hidden items-center">
              {!mobileOpen && (
                <button
                  onClick={() => setMobileOpen(true)}
                  className="p-2 rounded-lg"
                  style={{ color: scrolled ? "oklch(0.29 0.082 162)" : "oklch(0.96 0.016 78)" }}
                  aria-label="Abrir menú"
                >
                  <Menu size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden flex flex-col"
            style={{ background: "oklch(0.22 0.065 162)" }}
          >
            {/* Decorative glow */}
            <div
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(242,184,75,0.12) 0%, transparent 70%)",
                transform: "translate(20%, -20%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-56 h-56 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(143,174,150,0.15) 0%, transparent 70%)",
                transform: "translate(-20%, 20%)",
              }}
            />

            {/* Header row: logo + close button */}
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
              <img
                src="/manus-storage/logo_gold_cd81802c.webp"
                alt="Opalao"
                style={{ height: "48px", width: "auto" }}
              />
              <button
                onClick={closeMobileMenu}
                className="p-2"
                style={{ color: "oklch(0.96 0.016 78)" }}
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-8 pt-2 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-5 border-b"
                        style={{ borderColor: "rgba(246,241,231,0.12)" }}
                      >
                        <span
                          className="text-3xl font-light"
                          style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.96 0.016 78)" }}
                        >
                          {link.label}
                        </span>
                        <ChevronDown
                          size={18}
                          style={{
                            color: "oklch(0.78 0.135 78)",
                            transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.dropdown.map((item) => (
                              <button
                                key={item.label}
                                onClick={() => handleNavClick(item.href)}
                                className="w-full text-left py-3.5 flex items-start gap-3 border-b"
                                style={{ borderColor: "rgba(246,241,231,0.08)" }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ background: "oklch(0.78 0.135 78)" }}
                                />
                                <div>
                                  <div
                                    className="text-base"
                                    style={{ fontFamily: "'Jost', sans-serif", color: "rgba(246,241,231,0.85)", fontWeight: 400 }}
                                  >
                                    {item.label}
                                  </div>
                                  <div
                                    className="text-xs mt-0.5"
                                    style={{ fontFamily: "'Jost', sans-serif", color: "rgba(246,241,231,0.45)" }}
                                  >
                                    {item.sub}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="block py-5 border-b"
                      style={{ borderColor: "rgba(246,241,231,0.12)" }}
                    >
                      <span
                        className="text-3xl font-light"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.96 0.016 78)" }}
                      >
                        {link.label}
                      </span>
                    </motion.a>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom CTA + LangToggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="px-8 pb-10 pt-6"
            >
              {/* Language toggle inside overlay */}
              <div className="flex justify-center mb-5">
                <LangToggle mobile onDark />
              </div>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
                className="block w-full py-4 text-center rounded-full font-medium tracking-widest text-sm transition-all duration-300 active:scale-95"
                style={{
                  background: "oklch(0.78 0.135 78)",
                  color: "oklch(0.22 0.065 162)",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.15em",
                  fontSize: "13px",
                }}
              >
                RESERVAR SESIÓN
              </a>
              <p
                className="text-center text-xs mt-4"
                style={{ fontFamily: "'Jost', sans-serif", color: "rgba(246,241,231,0.35)" }}
              >
                Opalao · Centro Holístico · Oaxaca, México
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
