"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const goTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative section-dark min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />
      </div>

      {/* Content — bottom aligned like NatGeo */}
      <div className="relative z-10 px-5 sm:px-8 pb-14 sm:pb-20 pt-24 max-w-7xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1,  y: 0  }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="gold-bar" />
          <span className="eyebrow text-white/60">Disponible · 2026</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1,  y: 0  }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="display text-white mb-4"
          style={{ fontSize: "clamp(2.8rem, 14vw, 9rem)" }}
        >
          SOFTWARE<br />
          <span style={{ color: "var(--gold)" }}>A MEDIDA</span><br />
          <span className="text-white/30">& VOIP</span>
        </motion.h1>

        {/* Author + location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <p
            className="eyebrow text-white/50 leading-relaxed"
            style={{ maxWidth: "34rem" }}
          >
            Mauricio Caceres — Desarrollador Fullstack especializado en
            páginas web para PYMEs, sistemas de gestión a medida e
            integración VoIP/Asterisk.
          </p>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1,  y: 0  }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col xs:flex-row gap-3"
        >
          <button
            onClick={() => goTo("#proyectos")}
            className="btn-ng btn-ng-light w-full xs:w-auto justify-center"
          >
            Ver Proyectos →
          </button>
          <button
            onClick={() => goTo("#contacto")}
            className="btn-ng btn-ng-solid w-full xs:w-auto justify-center"
            style={{ color: "var(--black)" }}
          >
            Solicitar Demo
          </button>
        </motion.div>

        {/* Bottom tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 pt-5 flex flex-wrap gap-x-5 gap-y-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {["Python", "Django", "FastAPI", "Flask", "TypeScript", "React", "Next.js", "NestJS", "Express.js", "Fastify", "Tailwind CSS", "PostgreSQL", "SQL Server", "SQLite", "Asterisk", "Docker"].map(t => (
            <span key={t} className="eyebrow text-white/25">{t}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </motion.div>
    </section>
  );
}
