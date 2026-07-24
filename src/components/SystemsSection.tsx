"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { TicketCheck, Package, PhoneCall } from "lucide-react";

const systems = [
  {
    num: "01",
    icon: <TicketCheck className="w-5 h-5" />,
    title: "Incitrack",
    subtitle: "Mesa de Ayuda & Gestión de Tickets",
    description:
      "Sistema empresarial de help desk con ciclo de vida integral de tickets, SLA configurables, asignación por técnico y dashboards en tiempo real.",
    features: ["Ciclo de vida del ticket", "SLA y prioridades", "Asignación por área", "Dashboards en tiempo real", "Notificaciones automáticas"],
    tags: ["Django · Next.js · PostgreSQL"],
    dark: false,
  },
  {
    num: "02",
    icon: <Package className="w-5 h-5" />,
    title: "Inventarios",
    subtitle: "Control de Stock & Integración RRHH",
    description:
      "Plataforma de gestión de activos con trazabilidad completa. Integración con módulo de RRHH para seguimiento de equipos por empleado.",
    features: ["Stock en tiempo real", "Trazabilidad por serie", "Alertas automáticas", "Integración RRHH", "Historial de movimientos"],
    tags: ["Python · PostgreSQL · Docker"],
    dark: true,
  },
  {
    num: "03",
    icon: <PhoneCall className="w-5 h-5" />,
    title: "VoIP / Call Center",
    subtitle: "Asterisk & Analítica de Llamadas",
    description:
      "Plataforma de telefonía IP personalizable con integración nativa Asterisk, analítica en tiempo real y KPIs operativos para supervisores.",
    features: ["Integración Asterisk AMI/ARI", "CDR en tiempo real", "Analítica y KPIs", "Personalización total", "Dashboard supervisores"],
    tags: ["Asterisk · Python · WebSocket"],
    dark: false,
  },
];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function SystemsSection() {
  return (
    <section id="proyectos">
      {/* Intro strip — white bg */}
      <div className="section-white px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <span className="gold-bar mb-4" />
          <p className="eyebrow text-gray-500 mb-3">Sistemas en Producción</p>
          <h2 className="section-title text-gray-900" style={{ fontSize: "clamp(2rem,8vw,4rem)" }}>
            PROYECTOS QUE<br />GENERAN VALOR
          </h2>
          <p className="mt-4 text-sm text-gray-500 max-w-lg leading-relaxed">
            Soluciones robustas y escalables desplegadas en entornos reales de producción empresarial.
          </p>
        </div>
      </div>

      {/* Project cards — alternating dark/light */}
      {systems.map((s, idx) => (
        <motion.div
          key={s.num}
          className={s.dark ? "section-dark" : "section-white"}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          style={{ borderTop: `1px solid ${s.dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"}` }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">

            {/* Number + icon row */}
            <motion.div variants={fadeUp} className="flex items-start justify-between mb-6">
              <span
                className="num-anchor opacity-15"
                style={{ color: s.dark ? "var(--white)" : "var(--gray-900)" }}
              >
                {s.num}
              </span>
              <div
                className="p-3 mt-2"
                style={{
                  border: `1px solid ${s.dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}`,
                  color: "var(--gold)",
                }}
              >
                {s.icon}
              </div>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeUp} className="mb-5">
              <h3
                className="section-title mb-1"
                style={{
                  fontSize: "clamp(1.7rem,7vw,3.5rem)",
                  color: s.dark ? "var(--white)" : "var(--gray-900)",
                }}
              >
                {s.title}
              </h3>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>{s.subtitle}</p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm leading-relaxed mb-7"
              style={{
                color: s.dark ? "rgba(255,255,255,0.55)" : "var(--gray-500)",
                maxWidth: "42rem",
              }}
            >
              {s.description}
            </motion.p>

            {/* Features — horizontal on sm */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-0 mb-8"
              style={{ borderTop: `1px solid ${s.dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}` }}
            >
              {s.features.map((f, fi) => (
                <div
                  key={f}
                  className="py-3 pr-4"
                  style={{
                    borderBottom: `1px solid ${s.dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                  }}
                >
                  <span
                    className="eyebrow mr-2"
                    style={{ color: "var(--gold)" }}
                  >
                    {String(fi + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: s.dark ? "rgba(255,255,255,0.65)" : "var(--gray-700)" }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Tags + arrow */}
            <motion.div variants={fadeUp} className="flex items-center justify-between flex-wrap gap-3">
              <span
                className="eyebrow"
                style={{ color: s.dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)" }}
              >
                {s.tags[0]}
              </span>
              <button
                className="arrow-link"
                style={{ color: s.dark ? "var(--white)" : "var(--gray-900)" }}
              >
                Ver sistema →
              </button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
