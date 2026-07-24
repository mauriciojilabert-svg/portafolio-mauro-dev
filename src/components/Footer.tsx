"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, ArrowUp } from "lucide-react";

const quickLinks = [
  { href: "#sistemas", label: "Sistemas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="section-sep" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto_auto] gap-8 sm:gap-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
            <span className="display-heading text-xl">
              <span className="gradient-text">MAURO</span>
              <span style={{ color: "var(--text-faint)" }}>.DEV</span>
            </span>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Desarrollo de software a medida e integración VoIP/Asterisk
              para empresas que necesitan soluciones robustas y escalables.
            </p>
            <p className="label-mono opacity-20 text-[0.55rem]">ARG · BUENOS AIRES · 2026</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="label-mono opacity-40 mb-1">Nav</p>
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="text-xs transition-colors duration-200 hover:text-[var(--teal)]"
                style={{ color: "var(--text-muted)" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social + scroll top */}
          <div className="flex flex-col gap-3 items-start sm:items-end">
            <p className="label-mono opacity-40 mb-1">Links</p>
            <div className="flex gap-2">
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--teal)] hover:border-[var(--border-strong)] transition-all duration-200"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--teal)] hover:border-[var(--border-strong)] transition-all duration-200"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Globe className="w-3.5 h-3.5" />
              </motion.a>
            </div>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 label-mono opacity-30 hover:opacity-70 transition-opacity duration-200"
              whileHover={{ y: -2 }}
            >
              <ArrowUp className="w-3 h-3" />
              Top
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <p className="label-mono opacity-20 text-[0.58rem]">
            © 2026 Mauricio Caceres Jilabert · Todos los derechos reservados.
          </p>
          <p className="label-mono opacity-20 text-[0.58rem]">
            Hecho con ♥ en Argentina 🇦🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
