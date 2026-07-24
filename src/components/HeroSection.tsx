"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Terminal } from "lucide-react";

const techStack = [
  { label: "01", name: "Python", sub: "Backend" },
  { label: "02", name: "Django", sub: "API" },
  { label: "03", name: "TypeScript", sub: "Frontend" },
  { label: "04", name: "Next.js", sub: "Framework" },
  { label: "05", name: "PostgreSQL", sub: "DB" },
  { label: "06", name: "Asterisk", sub: "VoIP" },
  { label: "07", name: "Docker", sub: "Deploy" },
  { label: "08", name: "REST APIs", sub: "Integración" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function HeroSection() {
  const scrollToSystems = () =>
    document.querySelector("#sistemas")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6 overflow-hidden grid-overlay">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] opacity-[0.04] topo-bg pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#00c9a7] blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Corner label — desktop only */}
      <div className="absolute top-20 right-4 sm:right-8 hidden sm:flex flex-col items-end gap-1 pointer-events-none">
        <span className="label-mono opacity-30">PORTFOLIO · 2026</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[1fr_360px] lg:gap-16 lg:items-center"
        >
          {/* ── Left: Editorial heading ── */}
          <div className="flex flex-col gap-5 sm:gap-7">

            {/* Status */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="pulse-dot" />
              <span className="label-mono opacity-60 text-[0.65rem]">Disponible · Julio 2026</span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <p className="label-mono mb-2 opacity-40 text-[0.62rem]">Mauricio Caceres Jilabert</p>
              <h1 className="display-heading text-[clamp(3rem,12vw,6.5rem)] leading-[0.88]"
                style={{ color: '#d4e0db' }}>
                SOFTWARE<br />
                <span className="gradient-text">A MEDIDA</span><br />
                <span style={{ color: 'var(--text-faint)' }}>& VOIP</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base leading-relaxed border-l-2 pl-4"
              style={{ color: 'var(--text-muted)', borderColor: 'rgba(0,201,167,0.3)', maxWidth: '36rem' }}
            >
              Sistemas empresariales robustos — gestión de tickets,
              inventarios integrado con RRHH y plataformas de Call Center
              con Asterisk/VoIP. Stack moderno, listo para producción.
            </motion.p>

            {/* CTAs — full-width on mobile */}
            <motion.div variants={itemVariants} className="flex flex-col xs:flex-row gap-3">
              <motion.button
                onClick={scrollToSystems}
                className="btn-primary justify-center text-xs sm:text-sm py-3.5 sm:py-4"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver Sistemas
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="btn-ghost justify-center text-xs sm:text-sm py-3.5 sm:py-4"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                Contacto
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 sm:gap-8 pt-1 flex-wrap"
            >
              {[
                { n: "3+", l: "Sistemas en producción" },
                { n: "5+", l: "Años de experiencia" },
                { n: "100%", l: "TypeScript-safe" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col gap-0.5">
                  <span className="text-lg sm:text-2xl font-black" style={{ color: 'var(--teal)' }}>{s.n}</span>
                  <span className="label-mono opacity-35 text-[0.55rem]">{s.l}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Tech panel — scrollable on mobile if needed ── */}
          <motion.div
            variants={itemVariants}
            className="relative w-full overflow-hidden"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3" style={{ color: 'var(--teal)' }} />
                <span className="label-mono text-[0.6rem]">TECH_STACK.json</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--text-faint)' }} />
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--text-faint)' }} />
                <div className="w-1.5 h-1.5 rounded-full opacity-70" style={{ background: 'var(--teal)' }} />
              </div>
            </div>

            {/* Stack list — grid on mobile, list on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-1 divide-x sm:divide-x-0 divide-y"
              style={{ borderColor: 'var(--border)' }}>
              {techStack.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="flex items-center justify-between px-4 py-2.5 group border-b"
                  style={{ borderColor: 'var(--border)' }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.35 }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="label-mono opacity-25 w-4 text-[0.55rem]">{t.label}</span>
                    <span
                      className="text-xs font-semibold group-hover:transition-colors duration-200"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t.name}
                    </span>
                  </div>
                  <span className="label-mono opacity-30 text-[0.55rem] hidden sm:block">{t.sub}</span>
                </motion.div>
              ))}
            </div>

            {/* Panel footer */}
            <div
              className="px-4 py-2 flex items-center gap-2 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="pulse-dot scale-75" />
              <span className="label-mono opacity-25 text-[0.52rem]">ALL SYSTEMS OPERATIONAL</span>
            </div>

            {/* Corners */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 opacity-30" style={{ borderColor: 'var(--teal)' }} />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 opacity-15" style={{ borderColor: 'var(--teal)' }} />
          </motion.div>
        </motion.div>

        {/* Scroll divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 sm:mt-16 flex items-center gap-3"
        >
          <div className="h-px flex-1 opacity-15" style={{ background: 'linear-gradient(to right, var(--teal), transparent)' }} />
          <span className="label-mono opacity-15 text-[0.55rem]">SCROLL TO EXPLORE</span>
          <div className="h-px w-8 opacity-20" style={{ background: 'var(--border)' }} />
        </motion.div>
      </div>
    </section>
  );
}
