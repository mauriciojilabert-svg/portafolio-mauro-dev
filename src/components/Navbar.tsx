"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto",  label: "Contacto"  },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setScrolled(scrolled > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      {/* Reading progress */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 h-14 sm:h-16 max-w-7xl mx-auto">

          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top:0, behavior:"smooth" }); }}
            className="eyebrow text-white tracking-[0.2em] text-sm font-black"
          >
            MAURO<span style={{ color: "var(--gold)" }}>.</span>DEV
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => { e.preventDefault(); go(l.href); }}
                className="eyebrow text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => go("#contacto")}
              className="btn-ng btn-ng-light text-xs py-2.5 px-5"
            >
              Demo →
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1,  y: 0  }}
            exit={{   opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 section-dark flex flex-col"
            style={{ paddingTop: "56px" }}
          >
            {/* Close btn */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-5 text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col flex-1 px-6 pt-10 pb-8 justify-between">
              <nav className="flex flex-col gap-0">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={e => { e.preventDefault(); go(l.href); }}
                    className="flex items-end justify-between py-5 border-b border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1,  x: 0  }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <span className="section-title text-white text-4xl">{l.label}</span>
                    <span className="eyebrow text-white/30 text-lg">{String(i+1).padStart(2,"0")}</span>
                  </motion.a>
                ))}
              </nav>

              {/* Author bottom */}
              <motion.div
                className="flex items-center gap-3 pt-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              >
                <div className="relative w-8 h-8 overflow-hidden grayscale opacity-60">
                  <Image src="/mauro-photo.jpg" alt="" fill className="object-cover" sizes="32px"/>
                </div>
                <div>
                  <p className="eyebrow text-white/50 text-[0.6rem]">Mauricio Caceres Jilabert</p>
                  <p className="eyebrow text-white/25 text-[0.55rem]">Fullstack · VoIP</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
