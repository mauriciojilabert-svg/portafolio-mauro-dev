"use client";

import { motion } from "framer-motion";
import { Mail, Zap, Calendar, Send } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: <Zap className="w-3.5 h-3.5" />, text: "Respuesta en menos de 24hs" },
  { icon: <Calendar className="w-3.5 h-3.5" />, text: "Demo personalizada sin cargo" },
  { icon: <Send className="w-3.5 h-3.5" />, text: "Cotización detallada a medida" },
];

export default function ContactSection() {
  const handleContact = () => {
    window.location.href =
      "mailto:contacto@mauro.dev?subject=Consulta%20-%20Portfolio&body=Hola%20Mauricio%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios.";
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 section-sep">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-mono mb-3 opacity-40 text-[0.62rem]">Hablemos</p>
          <h2 className="display-heading text-[clamp(1.9rem,7vw,3.5rem)]" style={{ color: '#d4e0db' }}>
            ¿TRABAJAMOS<br />
            <span className="gradient-text">JUNTOS?</span>
          </h2>
        </motion.div>

        {/* Main panel */}
        <motion.div
          className="border border-[var(--border)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_300px]"
          style={{ background: 'var(--bg-card)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Topo bg */}
          <div className="absolute inset-0 topo-bg opacity-25 pointer-events-none" />
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-[80px] opacity-[0.06] pointer-events-none" style={{ background: 'var(--teal)' }} />

          {/* CTA column */}
          <div className="relative z-10 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r" style={{ borderColor: 'var(--border)' }}>
            <p className="text-sm leading-relaxed mb-7 max-w-md" style={{ color: 'var(--text-muted)' }}>
              Cuéntame tu desafío y te propongo una solución tecnológica
              adaptada a tu empresa. Sin compromiso, con claridad técnica.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--teal)' }}>{h.icon}</span>
                  {h.text}
                </div>
              ))}
            </div>

            {/* Full-width CTA on mobile */}
            <motion.button
              onClick={handleContact}
              className="btn-primary w-full sm:w-auto justify-center text-sm py-4 px-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              Solicitar Demo / Cotización
            </motion.button>

            <p className="mt-4 label-mono opacity-20 text-[0.58rem]">contacto@mauro.dev</p>
          </div>

          {/* Author card — full width on mobile, sidebar on lg */}
          <motion.div
            className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-row lg:flex-col items-center lg:items-start gap-5 lg:gap-6 lg:justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Photo */}
            <div
              className="relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border border-[var(--border-strong)]"
              style={{
                width: '72px',
                height: '72px',
                clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))',
              }}
            >
              <Image
                src="/mauro-photo.jpg"
                alt="Mauricio Caceres Jilabert"
                fill
                className="object-cover"
                sizes="72px"
              />
              <div className="absolute inset-0 mix-blend-color opacity-15" style={{ background: 'var(--teal)' }} />
            </div>

            {/* Identity */}
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <p className="text-sm font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
                Mauricio Caceres Jilabert
              </p>
              <p className="label-mono opacity-45">Fullstack Developer</p>
              <p className="label-mono opacity-25">VoIP & Systems Specialist</p>

              {/* Coordinates — visible on lg */}
              <div className="hidden lg:block mt-4 pt-4 border-t w-full" style={{ borderColor: 'var(--border)' }}>
                <p className="label-mono opacity-20 text-[0.52rem]">ARG · BUENOS AIRES · UTC-3</p>
                <p className="label-mono opacity-20 text-[0.52rem] mt-1">PY / TS / DOCKER / ASTERISK</p>
              </div>
            </div>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r opacity-20" style={{ borderColor: 'var(--teal)' }} />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l opacity-10" style={{ borderColor: 'var(--teal)' }} />
        </motion.div>
      </div>
    </section>
  );
}
