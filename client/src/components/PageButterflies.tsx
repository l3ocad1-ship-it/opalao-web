/*
 * OPALAO - PageButterflies
 * ------------------------------------------------------------------
 * 1 mariposa que flota/deriva mientras el usuario hace scroll
 * (estilo SELVA). El ALETEO es un sprite real de 12 frames extraídos
 * de un video de la mariposa, recortados y anclados por el cuerpo
 * (para que solo se muevan las alas, no el cuerpo), reproducidos en
 * ping-pong para un aleteo fluido y natural.
 *
 * - Aparece al revelarse la cascada (final del Hero).
 * - Permanece acompañando casi toda la página.
 * ------------------------------------------------------------------
 */
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./MariposasOverlay.css";

const FRAMES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => `/mariposas/sprite/ala_${i}.webp`);
// Ping-pong sobre los 12 frames (alas abajo -> arriba -> abajo) = aleteo fluido
const PINGPONG = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const FRAME_MS = 60; // velocidad del aleteo (≈1.3s por aleteo completo)

const REVEAL = 4.9; // aparece YA terminada la transición a video
const FADE_START = 22; // se mantiene casi toda la página

export default function PageButterflies() {
  const { scrollY } = useScroll();
  const [step, setStep] = useState(0);

  // Precarga de los frames del sprite
  useEffect(() => {
    FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Ciclo de aleteo (independiente del scroll)
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % PINGPONG.length), FRAME_MS);
    return () => clearInterval(id);
  }, []);

  const frame = FRAMES[PINGPONG[step]];

  const opacity = useTransform(scrollY, (v) => {
    const vh = window.innerHeight;
    const p = v / vh;
    if (p < REVEAL) return 0;
    if (p < REVEAL + 0.4) return (p - REVEAL) / 0.4;
    if (p < FADE_START) return 1;
    if (p < FADE_START + 2) return 1 - (p - FADE_START) / 2;
    return 0;
  });

  // En móvil reducimos la amplitud del movimiento para que no se salga.
  const amp = () => (window.innerWidth < 700 ? 0.4 : 1);

  // Movimiento: vaivén lateral + bob vertical (escalado según pantalla)
  const x = useTransform(scrollY, (v) => {
    const vh = window.innerHeight;
    const p = Math.max(0, v / vh - REVEAL);
    return Math.sin(p * 1.1) * 240 * amp();
  });
  const y = useTransform(scrollY, (v) => {
    const vh = window.innerHeight;
    const p = Math.max(0, v / vh - REVEAL);
    return Math.sin(p * 1.5) * 120 * amp();
  });

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 50, pointerEvents: "none", overflow: "hidden" }}
    >
      <motion.div
        className="mariposa mariposa-a"
        style={{ opacity, x, y, left: "20%", top: "36%", position: "absolute" }}
      >
        <img src={frame} alt="" />
      </motion.div>
    </div>
  );
}
