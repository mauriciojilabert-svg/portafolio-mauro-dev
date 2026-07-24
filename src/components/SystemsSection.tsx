"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { TicketCheck, Package, PhoneCall, ChevronRight } from "lucide-react";

interface SystemCard {
  id: string;
  index: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
}

const systems: SystemCard[] = [
  {
    id: "incitrack",
    index: "01",
    icon: <TicketCheck className="w-5 h-5" />,
    title: "Incitrack",
    subtitle: "Mesa de Ayuda & Tickets",
    description:
      "Sistema completo de help desk. Ciclo de vida integral de cada incidente con SLA, asignación por técnico y dashboards en tiempo real.",
    features: [
      "Ciclo de vida del ticket",
      "SLA y prioridades configurables",
      "Asignación por técnico y área",
      "Dashboards en tiempo real",
      "Historial de acciones",
      "Notificaciones automáticas",
    ],
    tags: ["Django", "Next.js", "PostgreSQL"],
  },
  {
    id: "inventarios",
    index: "02",
    icon: <Package className="w-5 h-5" />,
    title: "Inventarios",
    subtitle: "Stock & RRHH",
    description:
      "Gestión de activos con trazabilidad completa e integración con módulo de RRHH para seguimiento de equipos por empleado.",
    features: [
      "Stock en tiempo real",
      "Trazabilidad por serie",
      "Alertas de mínimo automáticas",
      "Integración con RRHH",
      "Asignación por empleado",
    ],
    tags: ["Python", "PostgreSQL", "Docker"],
  },
  {
    id: "voip",
    index: "03",
    icon: <PhoneCall className="w-5 h-5" />,
    title: "VoIP / Call Center",
    subtitle: "Asterisk & Analítica",
    description:
      "Plataforma de telefonía IP con Asterisk. Call center personalizable, analítica en tiempo real y KPIs para supervisores.",
    features: [
      "Integración Asterisk AMI/ARI",
      "CDR y eventos en tiempo real",
      "Analítica y KPIs operativos",
      "Personalización de plataforma",
      "Colas, IVR y enrutamiento",
      "Dashboard para supervisores",
    ],
    tags: ["Asterisk", "Python", "WebSocket"],
  },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function SystemsSection() {
  return (
    <section id="sistemas" className="py-16 sm:py-24 px-4 sm:px-6 section-sep">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-mono mb-3 opacity-40 text-[0.62rem]">Sistemas en Producción</p>
          <h2 className="display-heading text-[clamp(1.9rem,7vw,3.5rem)]" style={{ color: '#d4e0db' }}>
            PROYECTOS QUE<br />
            <span className="gradient-text">GENERAN VALOR</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 border border-[var(--border)]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {systems.map((system, idx) => (
            <motion.div
              key={system.id}
              variants={cardVariants}
              className="panel group flex flex-col p-5 sm:p-6 relative overflow-hidden transition-all duration-300"
              style={{
                borderBottom: idx < systems.length - 1 ? '1px solid var(--border)' : undefined,
                borderRight: idx % 2 === 0 && idx < systems.length - 1 ? '1px solid var(--border)' : undefined,
              }}
              whileHover={{ backgroundColor: 'var(--bg-card-alt)' }}
            >
              {/* Topo hover overlay */}
              <div className="absolute inset-0 topo-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 border text-[var(--teal)] group-hover:bg-[rgba(0,201,167,0.08)] transition-all duration-300"
                    style={{ borderColor: 'var(--border-strong)' }}
                  >
                    {system.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold" style={{ color: 'var(--text-primary)' }}>{system.title}</h3>
                    <p className="label-mono opacity-35 text-[0.55rem] mt-0.5">{system.subtitle}</p>
                  </div>
                </div>
                <span
                  className="display-heading text-3xl sm:text-4xl opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ color: 'var(--teal)', lineHeight: 1 }}
                >
                  {system.index}
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 text-xs sm:text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                {system.description}
              </p>

              {/* Features */}
              <ul className="relative z-10 flex flex-col gap-1.5 mb-5 flex-1">
                {system.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs opacity-65" style={{ color: 'var(--text-primary)' }}>
                    <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: 'var(--teal)' }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                {system.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              {/* Corner */}
              <div
                className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ borderColor: 'var(--teal)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
