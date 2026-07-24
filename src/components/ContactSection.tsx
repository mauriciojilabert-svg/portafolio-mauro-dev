"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const handleContact = () => {
    window.location.href =
      "mailto:contacto@mauro.dev?subject=Demo%20/%20Cotizaci%C3%B3n&body=Hola%20Mauricio%2C%20me%20interesa%20conocer%20m%C3%A1s.";
  };

  return (
    <section id="contacto" className="section-white">
      {/* Top divider */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">

        {/* Gold bar + eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gold-bar mb-4" />
          <p className="eyebrow text-gray-400 mb-5">Hablemos</p>
        </motion.div>

        {/* Main layout: text left, author right on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">

          {/* Left: heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="section-title text-gray-900 mb-5"
              style={{ fontSize: "clamp(2.5rem,10vw,6rem)" }}
            >
              ¿TRABAJAMOS<br />
              <span style={{ color: "var(--gold)" }}>JUNTOS?</span>
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
              Cuéntame tu desafío. Te propongo una solución tecnológica
              adaptada a tu empresa sin compromiso — con claridad técnica
              y respuesta en menos de 24 horas.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col xs:flex-row gap-3 mb-8">
              <button
                onClick={handleContact}
                className="btn-ng btn-ng-solid justify-center"
                style={{ color: "var(--black)" }}
              >
                <Mail className="w-3.5 h-3.5" />
                Solicitar Demo
              </button>
              <button
                onClick={handleContact}
                className="btn-ng btn-ng-dark justify-center"
              >
                Cotización →
              </button>
            </div>

            {/* Highlights row */}
            <div
              className="grid grid-cols-1 xs:grid-cols-3 gap-0"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              {[
                { n: "24h", l: "Tiempo de respuesta" },
                { n: "Demo", l: "Personalizada sin cargo" },
                { n: "100%", l: "Cotización a medida" },
              ].map((h) => (
                <div
                  key={h.l}
                  className="py-4 pr-4"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <p className="font-black text-xl text-gray-900 mb-0.5">{h.n}</p>
                  <p className="eyebrow text-gray-400">{h.l}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 eyebrow text-gray-300">contacto@mauro.dev</p>
          </motion.div>

          {/* Right: author card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5"
            style={{ borderTop: "3px solid var(--gold)", paddingTop: "1.5rem" }}
          >
            {/* Photo */}
            <div
              className="relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
              style={{ width: "100%", maxWidth: "280px", aspectRatio: "1/1" }}
            >
              <Image
                src="/mauro-photo.jpg"
                alt="Mauricio Caceres Jilabert"
                fill
                className="object-cover"
                sizes="280px"
              />
              {/* Gold tint overlay */}
              <div
                className="absolute inset-0 mix-blend-multiply opacity-20 transition-opacity duration-700 hover:opacity-0"
                style={{ background: "var(--gold)" }}
              />
            </div>

            {/* Identity */}
            <div>
              <p className="font-bold text-base text-gray-900 tracking-wide">
                Mauricio Caceres Jilabert
              </p>
              <div className="flex flex-col gap-0.5 mt-1">
                <p className="eyebrow text-gray-400">Fullstack Developer</p>
                <p className="eyebrow text-gray-300">VoIP & Systems Specialist</p>
                <p className="eyebrow text-gray-200 mt-1">Buenos Aires, Argentina 🇦🇷</p>
              </div>
            </div>

            {/* Stack tags */}
            <div
              className="flex flex-wrap gap-1.5 pt-3"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              {["Python", "Django", "TypeScript", "Next.js", "PostgreSQL", "Asterisk"].map(t => (
                <span
                  key={t}
                  className="eyebrow px-2 py-1"
                  style={{
                    border: "1px solid rgba(0,0,0,0.1)",
                    color: "var(--gray-500)",
                    fontSize: "0.55rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
