/*
 * OPALAO Booking & Contact Section — Tierra Sagrada design
 * Dark green background, gold accents
 * Form for lead capture + WhatsApp CTA
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const services = [
  // Ceremonias Grupales
  "Ceremonia de Retorno Solar",
  "Baby Blessing",
  "Despedida de Soltera Consciente",
  "Ceremonia de Trascendencia",
  // Sesiones Individuales
  "Experiencia Sensorial Vibracional",
  "Limpieza Energética Ancestral",
  "Canalización Angelical",
  "Reflexología Integrativa",
  "Terapia de Ventosas Ancestrales",
  "Auriculoterapia Holística",
  "Masaje Relajante",
  // Círculos de Sanación
  "Sanación del Niño Interior",
  "Limpieza y Purificación Energética",
  "Liberación y Empoderamiento",
  // Retiros
  "Retiro Holístico",
  "Otro / Consulta General",
];

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast.error("Por favor completa los campos requeridos.");
      return;
    }
    // Simulate submission
    setSubmitted(true);
    toast.success("¡Tu solicitud fue recibida! El Centro Opalao se pondrá en contacto contigo muy pronto.");
  };

  const inputStyle = {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: "0.9rem",
    background: "oklch(0.28 0.05 155 / 0.5)",
    border: "1px solid oklch(0.70 0.12 78 / 0.3)",
    color: "oklch(0.93 0.012 75)",
    padding: "0.875rem 1.25rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle = {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "oklch(0.78 0.135 78)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contacto"
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.22 0.05 162)" }}
    >
      {/* Earth texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/manus-storage/bg_earth_moss_texture_a64aee27.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
          mixBlendMode: "screen",
        }}
      />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-px" style={{ background: "oklch(0.78 0.135 78)" }} />
              <span className="section-label" style={{ color: "oklch(0.78 0.135 78)" }}>
                Agendar Sesión
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                color: "oklch(0.96 0.016 78)",
                lineHeight: 1.1,
              }}
            >
              Inicia tu<br />
              <em style={{ color: "oklch(0.81 0.065 68)" }}>proceso de<br />transformación</em>
            </motion.h2>

            <div className="gold-line-left w-16 mb-8" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mb-10 leading-relaxed"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "oklch(0.75 0.01 75)",
                lineHeight: 1.8,
              }}
            >
              Comparte tus datos y el servicio que te interesa. Nuestro equipo se pondrá en contacto contigo para conocer tus necesidades y diseñar una experiencia a tu medida.
            </motion.p>

            {/* Pricing reference */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 border"
              style={{ borderColor: "oklch(0.70 0.12 78 / 0.3)" }}
            >
              <p className="section-label mb-4" style={{ color: "oklch(0.78 0.135 78)" }}>
                Cotización Personalizada
              </p>
              <p
                style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.9rem", color: "oklch(0.80 0.01 75)", lineHeight: 1.7 }}
              >
                Cada experiencia es única. En el Centro Opalao diseñamos cada sesión a tu medida y te compartiremos la inversión correspondiente en conversación directa.
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <p className="section-label mb-4" style={{ color: "oklch(0.78 0.135 78)" }}>
                Contacto Directo
              </p>
              <a
                href="https://wa.me/529515639508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border transition-colors duration-300 group-hover:bg-[oklch(0.70_0.12_78)]"
                  style={{ borderColor: "oklch(0.70 0.12 78 / 0.5)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="oklch(0.78 0.135 78)">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                    color: "oklch(0.75 0.01 75)",
                    letterSpacing: "0.05em",
                  }}
                >
                  951 563 9508
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 pt-0"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-20 text-center mt-16 lg:mt-0"
                style={{ border: "1px solid oklch(0.70 0.12 78 / 0.3)" }}
              >
                <div className="text-4xl mb-6" style={{ color: "oklch(0.78 0.135 78)" }}>✦</div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "2rem",
                    color: "oklch(0.96 0.016 78)",
                  }}
                >
                  Gracias por confiar en Opalao
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                  color: "oklch(0.75 0.01 75)",
                  maxWidth: "360px",
                  lineHeight: 1.7,
                }}
              >
                El Centro Opalao revisará tu solicitud y se pondrá en contacto contigo muy pronto para conocerte y diseñar tu experiencia.
              </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mt-16 lg:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Correo Electrónico *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Teléfono / WhatsApp</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+52 951 000 0000"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Servicio de Interés *</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Cuéntame un poco sobre ti</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿Qué te trae aquí? ¿Qué estás buscando sanar o transformar?"
                    rows={4}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="marketing"
                    id="marketing"
                    checked={form.marketing}
                    onChange={handleChange}
                    className="mt-1 flex-shrink-0"
                    style={{ accentColor: "oklch(0.78 0.135 78)" }}
                  />
                  <label
                    htmlFor="marketing"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.75rem",
                      color: "oklch(0.60 0.02 75)",
                      lineHeight: 1.6,
                      cursor: "pointer",
                    }}
                  >
                    Acepto recibir comunicaciones, promociones y contenido de Opalao. Puedo cancelar mi suscripción en cualquier momento.
                  </label>
                </div>

                {/* Disclaimer */}
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.7rem",
                    color: "oklch(0.50 0.02 75)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  Aviso de bienestar: Todos los servicios de Opalao son de naturaleza holística y complementaria. No sustituyen diagnóstico, tratamiento o atención médica profesional. La participación es voluntaria y bajo la propia decisión de cada persona.
                </p>

                <button
                  type="submit"
                  className="btn-opalao-filled w-full"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
