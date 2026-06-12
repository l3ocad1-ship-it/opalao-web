/*
 * OPALAO HeroSection — "El Camino al Portal"
 * ------------------------------------------------------------------
 * Secuencia cinematográfica controlada por scroll:
 *  1) 220 frames WebP (canvas) recorren bosque -> sendero -> puerta
 *     OPALAO -> apertura de luz dorada -> cascada con mariposas.
 *  2) Al final, cross-fade hacia un video loop (boomerang) de la cascada.
 *  3) Las mariposas-overlay (PageButterflies, a nivel de página) aparecen
 *     al revelarse la cascada y "vuelan" hacia abajo con el scroll.
 *
 * Altura: 500vh → recorrido cómodo y fluido para 220 frames.
 * El Hero original se conserva en HeroSection.ORIGINAL.bak.
 * ------------------------------------------------------------------
 */
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";

const TOTAL_FRAMES = 220;
const frameSrc = (i: number) => `/frames_hero/frame_${String(i).padStart(4, "0")}.webp`;

export default function HeroSection() {
  const { t } = useLang();
  const h = t.hero;

  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const drawRef = useRef<((p: number) => void) | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ── Precarga de los frames ──────────────────────────────────────
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      // Cada vez que carga un frame, redibuja el frame actual: así el
      // primer cuadro aparece apenas carga, sin necesidad de scrollear.
      img.onload = () => {
        drawRef.current?.(scrollYProgress.get());
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [scrollYProgress]);

  // ── Dibujo del frame según el scroll ────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (progress: number) => {
      // El canvas anima del 0% al 96% del scroll; el resto es un corte rápido al video.
      const animProgress = Math.min(1, progress / 0.96);
      // Curva de suavizado: frena el inicio (bosque, que es rápido) y acelera el
      // tramo final (puerta, que es lento), emparejando la sensación de velocidad.
      const eased = Math.pow(animProgress, 1.4);
      const idx = Math.min(TOTAL_FRAMES - 1, Math.floor(eased * (TOTAL_FRAMES - 1)));
      const img = imagesRef.current[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const canvasRatio = cw / ch;
      const imgRatio = img.naturalWidth / img.naturalHeight;

      let dw: number, dh: number, dx: number, dy: number;
      if (imgRatio > canvasRatio) {
        dh = ch;
        dw = dh * imgRatio;
        dx = (cw - dw) / 2;
        dy = 0;
      } else {
        dw = cw;
        dh = dw / imgRatio;
        dx = 0;
        dy = (ch - dh) / 2;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      drawFrame(scrollYProgress.get());
    };

    drawRef.current = drawFrame; // expone el dibujo para la precarga
    resize();
    window.addEventListener("resize", resize);
    const unsubscribe = scrollYProgress.on("change", drawFrame);
    return () => {
      window.removeEventListener("resize", resize);
      unsubscribe();
    };
  }, [scrollYProgress]);

  // ── Transiciones (frames -> video loop) ─────────────────────────
  // Cruce MUY corto (casi un corte) para que no se vea el "fantasma" de
  // mariposas dobles entre el último frame y el video.
  const canvasOpacity = useTransform(scrollYProgress, [0.965, 0.985], [1, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0.965, 0.985], [0, 1]);

  // ── Texto: se queda QUIETO y visible mientras avanzas por el bosque y
  // te acercas a la puerta; se desvanece subiendo JUSTO cuando la puerta
  // se abre y entra la luz dorada (~72-82% del scroll). ──
  const textOpacity = useTransform(scrollYProgress, [0, 0.72, 0.82], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.72, 0.82], [0, 0, -160]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="inicio" style={{ position: "relative", height: "500vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {/* ── Canvas: secuencia de frames ── */}
        <motion.canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: canvasOpacity }}
          aria-hidden="true"
        />

        {/* ── Video loop de la cascada (boomerang) ── */}
        <motion.video
          src="/video_cascada/cascada_loop.mp4"
          poster="/video_cascada/poster_cascada.webp"
          autoPlay
          loop
          muted
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: videoOpacity }}
        />

        {/* ── Gradiente para legibilidad del texto ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,14,9,0.78) 0%, rgba(4,14,9,0.40) 35%, rgba(4,14,9,0.15) 60%, rgba(4,14,9,0.55) 100%)",
            zIndex: 8,
          }}
        />

        {/* ── Contenido principal ── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-10 flex flex-col items-center lg:items-start justify-start text-center lg:text-left px-6 sm:px-10 lg:pl-16 xl:pl-24"
        >
          <div className="w-full lg:max-w-[48%] flex flex-col items-center lg:items-start" style={{ paddingTop: "clamp(88px, 16vh, 140px)" }}>
            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-2.5 mb-5 sm:mb-6"
            >
              <div className="h-px w-6 sm:w-10" style={{ background: "rgba(242,184,75,0.7)" }} />
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "clamp(10px, 2vw, 12px)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(242,184,75,0.9)",
                  fontWeight: 400,
                }}
              >
                {h.badge}
              </span>
              <div className="h-px w-6 sm:w-10" style={{ background: "rgba(242,184,75,0.7)" }} />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="mb-5 sm:mb-6"
            >
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  textShadow: "0 2px 24px rgba(0,0,0,0.6)",
                }}
              >
                {h.h1a}{" "}
                <em style={{ fontStyle: "italic", color: "#A8D4B8", fontWeight: 300 }}>{h.h1b}</em>
                <br />
                <span style={{ color: "#FFFFFF" }}>{h.h1c}</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-7 sm:mb-8"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "clamp(13px, 2.2vw, 15px)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.8,
                letterSpacing: "0.04em",
                maxWidth: "380px",
                textAlign: "center",
              }}
            >
              {h.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="flex flex-row items-center justify-center gap-3"
              style={{ maxWidth: "340px" }}
            >
              <button
                onClick={() => handleScroll("#contacto")}
                className="inline-flex items-center justify-center gap-1.5 flex-1 transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  background: "#0F4B3E",
                  color: "#F6F1E7",
                  letterSpacing: "0.14em",
                  fontSize: "9px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  padding: "12px 16px",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
                {h.cta1}
              </button>

              <button
                onClick={() => handleScroll("#servicios")}
                className="inline-flex items-center justify-center flex-1 transition-all duration-200 hover:bg-white/10 active:scale-95"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: "rgba(255,255,255,0.88)",
                  letterSpacing: "0.14em",
                  fontSize: "9px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  padding: "12px 16px",
                }}
              >
                {h.cta2}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom, rgba(242,184,75,0.7), transparent)" }}
          />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "7px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(242,184,75,0.6)",
            }}
          >
            {h.scroll}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
