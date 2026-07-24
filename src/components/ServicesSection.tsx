"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Plug } from "lucide-react";

const services = [
  {
    letter: "A",
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Consultoría",
    subtitle: "de Sistemas",
    description: "Analizo tu operación e identifico oportunidades de automatización, digitalización y mejora de procesos para maximizar la eficiencia de tu empresa.",
    items: ["Relevamiento de procesos", "Diagnóstico tecnológico", "Hoja de ruta", "Asesoría en stack"],
  },
  {
    letter: "B",
    icon: <Code2 className="w-5 h-5" />,
    title: "Páginas Web",
    subtitle: "& Sistemas",
    description: "Hago la página web de tu negocio o PYME. La construyo como tú lo desees y te entrego una demo gratis antes de comprometerte.",
    items: ["Demo gratis inicial", "Diseño a medida", "Sistemas de gestión", "Dominio & Hosting"],
  },
  {
    letter: "C",
    icon: <Plug className="w-5 h-5" />,
    title: "Integración",
    subtitle: "APIs & VoIP",
    description: "Conecto sistemas con ERPs, CRMs y centrales Asterisk para una operación unificada, con eventos en tiempo real y automatización de flujos.",
    items: ["Asterisk AMI/ARI", "REST APIs", "Webhooks", "Automatización"],
  },
];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-dark">
      {/* Header */}
      <div
        className="px-5 sm:px-8 pt-14 sm:pt-20 pb-10 max-w-7xl mx-auto"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="gold-bar mb-4" />
        <p className="eyebrow text-white/40 mb-3">Lo Que Ofrezco</p>
        <h2
          className="section-title text-white"
          style={{ fontSize: "clamp(2rem,8vw,4rem)" }}
        >
          SERVICIOS<br />
          <span style={{ color: "var(--gold)" }}>PROFESIONALES</span>
        </h2>
      </div>

      {/* Services list — stacked mobile, 3-col desktop */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.letter}
              variants={fadeUp}
              className="px-5 sm:px-8 py-10 sm:py-12 flex flex-col gap-5"
              style={{
                borderRight:  i < 2 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Letter + icon */}
              <div className="flex items-center justify-between">
                <span
                  className="font-black text-5xl sm:text-6xl"
                  style={{ color: "rgba(255,255,255,0.06)", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {s.letter}
                </span>
                <div
                  className="p-2.5"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--gold)" }}
                >
                  {s.icon}
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="section-title text-white" style={{ fontSize: "clamp(1.4rem,5vw,2rem)" }}>
                  {s.title}
                </h3>
                <p className="eyebrow mt-1" style={{ color: "var(--gold)" }}>{s.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s.description}
              </p>

              {/* Items */}
              <ul
                className="flex flex-col gap-0"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                {s.items.map((item, ii) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-2.5"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="eyebrow" style={{ color: "var(--gold)" }}>
                      {String(ii + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
