"use client";

import { ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="section-dark" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-12">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-black text-white text-lg tracking-[0.1em] mb-3">
              MAURO<span style={{ color: "var(--gold)" }}>.</span>DEV
            </p>
            <p className="eyebrow text-white/25 leading-relaxed text-[0.58rem]">
              Desarrollo de software a medida e integración VoIP/Asterisk para empresas.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow text-white/20 mb-4">Secciones</p>
            {["#proyectos", "#servicios", "#contacto"].map(href => (
              <a
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); go(href); }}
                className="block eyebrow text-white/40 hover:text-white transition-colors mb-2"
              >
                {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
              </a>
            ))}
          </div>

          {/* Stack */}
          <div>
            <p className="eyebrow text-white/20 mb-4">Stack</p>
            {["Python", "Django", "Next.js", "Asterisk"].map(t => (
              <p key={t} className="eyebrow text-white/25 mb-2">{t}</p>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="eyebrow text-white/20 mb-4">Social</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/40 hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="GitHub"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/40 hover:text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="LinkedIn"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="eyebrow text-white/20 hover:text-white/50 transition-colors mt-4 block"
            >
              ↑ Volver arriba
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="eyebrow text-white/15 text-center sm:text-left">
            © 2026 Mauricio Caceres Jilabert · Todos los derechos reservados.
          </p>
          <p className="eyebrow text-white/15">
            Hecho con ♥ en Santiago, Chile 🇨🇱
          </p>
        </div>
      </div>
    </footer>
  );
}
