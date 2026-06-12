/*
 * OPALAO WhatsApp Floating Bubble — Glass White Edition
 * Button: white glass bg + original WhatsApp green icon (visible on any background)
 * Tooltip: white glass bg + dark text + white border
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WA_NUMBER = "529515639508";
const WA_MESSAGE = encodeURIComponent("Hola, me gustaría obtener más información sobre los servicios de Opalao 🌿");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppBubble() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[300] flex flex-col items-end gap-3">

      {/* Tooltip — white glass */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative flex items-center gap-2 px-4 py-3 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.4)",
              maxWidth: "210px",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.35)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.5)",
                color: "white",
              }}
            >
              <X size={9} />
            </button>

            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "white",
                lineHeight: 1.45,
                letterSpacing: "0.01em",
                textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              }}
            >
              ¿Tienes dudas? ¡Escríbenos! 🌿
            </p>

            {/* Arrow pointing down-right */}
            <div
              className="absolute -bottom-[7px] right-7 w-3.5 h-3.5 rotate-45"
              style={{
                background: "rgba(255,255,255,0.22)",
                backdropFilter: "blur(18px)",
                borderRight: "1px solid rgba(255,255,255,0.55)",
                borderBottom: "1px solid rgba(255,255,255,0.55)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button — white glass + green WA icon */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        <motion.div
          className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Pulse ring — white */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)",
            }}
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.7, 0, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* WhatsApp icon — original brand green */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.2))" }}
          >
            <path
              fill="#25D366"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}
