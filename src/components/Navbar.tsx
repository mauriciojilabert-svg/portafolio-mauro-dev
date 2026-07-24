"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#sistemas", label: "Sistemas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
      style={{ background: scrolled ? "rgba(8,12,11,0.92)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group"
            whileTap={{ scale: 0.96 }}
          >
            <span className="display-heading text-lg tracking-tight">
              <span className="gradient-text">MAURO</span>
              <span style={{ color: "var(--text-faint)" }}>.DEV</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); go(link.href); }}
                className="label-mono px-5 py-2 opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}

            <motion.button
              onClick={() => go("#contacto")}
              className="ml-4 btn-ghost text-xs py-2 px-5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Demo
            </motion.button>

            {/* Subtle avatar */}
            <motion.div
              className="ml-4 opacity-30 hover:opacity-70 transition-opacity duration-300 cursor-default"
              title="Mauricio Caceres Jilabert"
              whileHover={{ scale: 1.08 }}
            >
              <div
                className="relative w-7 h-7 overflow-hidden border border-[var(--border-strong)] grayscale"
                style={{ clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}
              >
                <Image src="/mauro-photo.jpg" alt="Mauricio Caceres Jilabert" fill className="object-cover" sizes="28px" />
              </div>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            style={{ color: "var(--text-muted)" }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-[var(--border)]"
            style={{ background: "rgba(8,12,11,0.97)", backdropFilter: "blur(16px)" }}
          >
            <div className="px-4 pt-3 pb-6 flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); go(link.href); }}
                  className="flex items-center justify-between px-0 py-4 border-b border-[var(--border)] label-mono text-sm opacity-60 hover:opacity-100 hover:text-[var(--teal)] transition-all duration-200"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 0.6, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <span>{link.label}</span>
                  <span className="opacity-30">{String(i + 1).padStart(2, "0")}</span>
                </motion.a>
              ))}

              <motion.button
                onClick={() => go("#contacto")}
                className="btn-primary mt-5 w-full justify-center text-sm py-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
              >
                Solicitar Demo
              </motion.button>

              {/* Author row */}
              <motion.div
                className="flex items-center gap-3 mt-5 pt-4 border-t border-[var(--border)] opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative w-6 h-6 overflow-hidden grayscale border border-[var(--border)]">
                  <Image src="/mauro-photo.jpg" alt="" fill className="object-cover" sizes="24px" />
                </div>
                <span className="label-mono text-[0.6rem]">Mauricio Caceres Jilabert</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
