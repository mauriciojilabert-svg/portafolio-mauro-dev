"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Plug, CheckCircle2 } from "lucide-react";

const services = [
  {
    index: "A",
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Consultoría de Sistemas",
    description:
      "Analizo tu operación e identifico oportunidades de automatización y digitalización para maximizar la eficiencia.",
    bullets: [
      "Relevamiento de procesos",
      "Diagnóstico tecnológico",
      "Hoja de ruta de digitalización",
      "Asesoría en stack tecnológico",
    ],
  },
  {
    index: "B",
    icon: <Code2 className="w-4 h-4" />,
    title: "Desarrollo a Medida",
    description:
      "Aplicaciones web y sistemas de gestión adaptados exactamente a las necesidades de tu negocio.",
    bullets: [
      "Backend Python / Django",
      "Frontend Next.js / TypeScript",
      "Base de datos PostgreSQL",
      "Deploy Docker & CI/CD",
    ],
  },
  {
    index: "C",
    icon: <Plug className="w-4 h-4" />,
    title: "Integración APIs & VoIP",
    description:
      "Conecto sistemas con ERPs, CRMs y centrales Asterisk para una operación unificada y eficiente.",
    bullets: [
      "Integración Asterisk AMI/ARI",
      "REST APIs y Webhooks",
      "Eventos en tiempo real",
      "Automatización de flujos",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-24 px-4 sm:px-6 section-sep">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-mono mb-3 opacity-40 text-[0.62rem]">Lo Que Ofrezco</p>
          <h2 className="display-heading text-[clamp(1.9rem,7vw,3.5rem)]" style={{ color: '#d4e0db' }}>
            SERVICIOS<br />
            <span className="gradient-text">PROFESIONALES</span>
          </h2>
        </motion.div>

        {/* Services list */}
        <motion.div
          className="flex flex-col border border-[var(--border)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="panel group relative overflow-hidden transition-all duration-300"
              style={{
                borderBottom: idx < services.length - 1 ? '1px solid var(--border)' : undefined,
              }}
              whileHover={{ backgroundColor: 'var(--bg-card-alt)' }}
            >
              {/* Topo overlay */}
              <div className="absolute inset-0 topo-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Mobile layout: stacked; SM+: 3-col grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[64px_1fr_1fr]">

                {/* Index */}
                <div
                  className="flex items-center justify-between sm:items-start sm:justify-center px-5 py-4 sm:py-6 border-b sm:border-b-0 sm:border-r"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {/* Mobile: index + title inline */}
                  <div className="flex items-center gap-3 sm:hidden">
                    <span className="display-heading text-3xl opacity-25 group-hover:opacity-60 transition-colors duration-400" style={{ color: 'var(--teal)' }}>
                      {service.index}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span style={{ color: 'var(--teal)' }}>{service.icon}</span>
                        <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  {/* Desktop: just number */}
                  <span className="hidden sm:block display-heading text-4xl opacity-20 group-hover:opacity-60 transition-colors duration-400 mt-1" style={{ color: 'var(--teal)' }}>
                    {service.index}
                  </span>
                </div>

                {/* Description — desktop only for separate column */}
                <div
                  className="px-5 py-4 sm:py-6 border-b sm:border-b-0 sm:border-r"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {/* Desktop title */}
                  <div className="hidden sm:flex items-center gap-2 mb-2">
                    <span style={{ color: 'var(--teal)' }}>{service.icon}</span>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="px-5 py-4 sm:py-6">
                  <p className="label-mono mb-2.5 opacity-35 text-[0.58rem]">Incluye</p>
                  <ul className="flex flex-col gap-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs opacity-65" style={{ color: 'var(--text-primary)' }}>
                        <CheckCircle2 className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--teal)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r opacity-0 group-hover:opacity-25 transition-opacity duration-300" style={{ borderColor: 'var(--teal)' }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
