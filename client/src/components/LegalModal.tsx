/*
 * OPALAO Legal Modal — Privacy Policy & Terms and Conditions
 * Triggered from footer links
 */
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type LegalType = "privacy" | "terms" | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

const FOREST = "#0F4B3E";
const GOLD   = "#C8923A";

const privacyContent = {
  title: "Política de Privacidad",
  lastUpdated: "Junio 2026",
  sections: [
    {
      heading: "1. Responsable del Tratamiento de Datos",
      body: "El Centro Opalao, con domicilio en Oaxaca de Juárez, Oaxaca, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
    },
    {
      heading: "2. Datos Personales que Recopilamos",
      body: "Recopilamos los siguientes datos personales cuando usted completa nuestro formulario de contacto o se comunica con nosotros: nombre completo, correo electrónico, número de teléfono, y cualquier información adicional que usted decida compartir voluntariamente en el campo de mensaje.",
    },
    {
      heading: "3. Finalidades del Tratamiento",
      body: "Sus datos personales serán utilizados para: (a) responder a sus solicitudes de información sobre nuestros servicios; (b) agendar sesiones y retiros; (c) enviar comunicaciones relacionadas con los servicios contratados; (d) con su consentimiento expreso, enviar boletines informativos y promociones del Centro Opalao.",
    },
    {
      heading: "4. Transferencia de Datos",
      body: "El Centro Opalao no vende, cede ni transfiere sus datos personales a terceros sin su consentimiento, salvo en los casos previstos por la ley o cuando sea estrictamente necesario para la prestación de los servicios contratados.",
    },
    {
      heading: "5. Derechos ARCO",
      body: "Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de nuestro formulario de contacto o por WhatsApp al +52 951 563 9508.",
    },
    {
      heading: "6. Cookies y Tecnologías de Seguimiento",
      body: "Nuestro sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento de terceros con fines publicitarios sin su consentimiento.",
    },
    {
      heading: "7. Seguridad de los Datos",
      body: "El Centro Opalao implementa medidas de seguridad técnicas y organizativas para proteger sus datos personales contra acceso no autorizado, pérdida o alteración.",
    },
    {
      heading: "8. Modificaciones",
      body: "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Le notificaremos sobre cambios significativos a través de nuestro sitio web.",
    },
    {
      heading: "9. Contacto",
      body: "Para cualquier duda o solicitud relacionada con el tratamiento de sus datos personales, puede contactarnos a través del formulario de contacto en nuestro sitio web o por WhatsApp al +52 951 563 9508.",
    },
  ],
};

const termsContent = {
  title: "Términos y Condiciones",
  lastUpdated: "Junio 2026",
  sections: [
    {
      heading: "1. Aceptación de los Términos",
      body: "Al utilizar los servicios del Centro Opalao, usted acepta los presentes Términos y Condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestros servicios.",
    },
    {
      heading: "2. Naturaleza de los Servicios",
      body: "Todos los servicios ofrecidos por el Centro Opalao son de naturaleza holística y complementaria. No constituyen diagnóstico, tratamiento médico ni sustituto de atención profesional de salud. La participación en cualquier servicio es voluntaria y bajo la responsabilidad de cada persona.",
    },
    {
      heading: "3. Reservaciones y Pagos",
      body: "Las reservaciones se confirman una vez acordada la fecha y forma de pago con nuestro equipo. Los precios son personalizados según el servicio y se comunican directamente al cliente. El Centro Opalao se reserva el derecho de modificar precios con previo aviso.",
    },
    {
      heading: "4. Cancelaciones y Reembolsos",
      body: "Las cancelaciones realizadas con más de 48 horas de anticipación no generan cargo. Cancelaciones con menos de 48 horas pueden generar un cargo del 50% del valor del servicio. En caso de emergencia documentada, el Centro Opalao evaluará cada caso de manera individual y empática.",
    },
    {
      heading: "5. Responsabilidad",
      body: "El Centro Opalao no se hace responsable por reacciones emocionales, físicas o espirituales que puedan surgir durante o después de los servicios, ya que estos son procesos naturales de transformación. Cada participante es responsable de comunicar cualquier condición de salud relevante antes de la sesión.",
    },
    {
      heading: "6. Contraindicaciones",
      body: "Algunos servicios pueden no ser adecuados para personas con ciertas condiciones de salud (embarazo, epilepsia, trastornos psiquiátricos graves, entre otros). Es responsabilidad del participante informar al Centro Opalao sobre cualquier condición de salud antes de contratar un servicio.",
    },
    {
      heading: "7. Propiedad Intelectual",
      body: "Todo el contenido de este sitio web, incluyendo textos, imágenes, diseños y materiales, es propiedad del Centro Opalao y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.",
    },
    {
      heading: "8. Fotografía y Video",
      body: "Durante las ceremonias y sesiones grupales, el Centro Opalao puede tomar fotografías o videos para uso en redes sociales y material promocional. Si usted no desea aparecer en dichos materiales, debe notificarlo antes del inicio de la actividad.",
    },
    {
      heading: "9. Modificaciones",
      body: "El Centro Opalao se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor desde su publicación en este sitio web.",
    },
    {
      heading: "10. Jurisdicción",
      body: "Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será sometida a los tribunales competentes de la ciudad de Oaxaca de Juárez, Oaxaca.",
    },
  ],
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const content = type === "privacy" ? privacyContent : type === "terms" ? termsContent : null;

  return (
    <AnimatePresence>
      {type && content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-start justify-center overflow-y-auto py-8 px-4"
          style={{ background: "rgba(8,28,20,0.88)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden"
            style={{
              background: "#FDFAF5",
              borderRadius: "16px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              className="px-8 py-6 flex items-center justify-between"
              style={{ borderBottom: "1px solid rgba(15,75,62,0.12)" }}
            >
              <div>
                <div
                  className="text-[10px] tracking-[0.25em] uppercase mb-1"
                  style={{ fontFamily: "'Jost', sans-serif", color: GOLD, fontWeight: 600 }}
                >
                  Centro Opalao
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: "1.6rem",
                    color: FOREST,
                    lineHeight: 1.1,
                  }}
                >
                  {content.title}
                </h2>
                <p
                  className="mt-1 text-xs"
                  style={{ fontFamily: "'Jost', sans-serif", color: "oklch(0.55 0.03 155)", fontWeight: 300 }}
                >
                  Última actualización: {content.lastUpdated}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[oklch(0.90_0.02_78)]"
                style={{ color: FOREST, flexShrink: 0 }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-6 max-h-[65vh] overflow-y-auto">
              {content.sections.map((section, i) => (
                <div key={i}>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: FOREST,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {section.heading}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      color: "oklch(0.40 0.03 155)",
                      lineHeight: 1.8,
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="px-8 py-4 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(15,75,62,0.12)" }}
            >
              <p
                className="text-xs"
                style={{ fontFamily: "'Jost', sans-serif", color: "oklch(0.60 0.02 155)", fontWeight: 300 }}
              >
                © 2026 Centro Opalao · Oaxaca, México
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-lg transition-colors"
                style={{
                  background: FOREST,
                  color: "white",
                  fontFamily: "'Jost', sans-serif",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
