"use client";

import { useState } from "react";

// ─── Configuración ─────────────────────────────────────────────────────────────
const WHATSAPP_PHONE = "593XXXXXXXXX"; // Reemplaza con tu número (código país sin +)
const WHATSAPP_MESSAGE = encodeURIComponent(
  "¡Hola Mauro! Vi tu portafolio y me gustaría hablar sobre mi proyecto 🚀"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`;

// ─── Icono SVG de WhatsApp ─────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="26"
      height="26"
      fill="white"
      aria-hidden="true"
    >
      <path d="M16.004 0C7.164 0 .004 7.16.004 16c0 2.82.736 5.466 2.022 7.762L0 32l8.49-2.022A15.934 15.934 0 0 0 16.004 32C24.836 32 32 24.836 32 16S24.836 0 16.004 0zm0 29.25a13.17 13.17 0 0 1-6.718-1.836l-.48-.286-4.97 1.183 1.25-4.832-.318-.498A13.173 13.173 0 0 1 2.754 16c0-7.31 5.942-13.25 13.25-13.25S29.25 8.69 29.25 16 23.308 29.25 16.004 29.25zm7.254-9.922c-.396-.198-2.348-1.158-2.712-1.29-.364-.132-.63-.198-.896.2-.264.396-1.024 1.29-1.254 1.554-.23.264-.462.298-.858.1-.396-.198-1.67-.616-3.18-1.96-1.176-1.048-1.97-2.34-2.2-2.736-.23-.396-.024-.61.174-.808.178-.178.396-.462.594-.694.198-.23.264-.396.396-.66.132-.264.066-.496-.034-.694-.1-.198-.896-2.158-1.228-2.956-.322-.776-.65-.67-.896-.682l-.762-.012c-.264 0-.694.1-1.058.496-.364.396-1.39 1.358-1.39 3.316 0 1.958 1.424 3.852 1.622 4.116.198.264 2.8 4.276 6.784 5.994.948.41 1.688.654 2.264.838.952.302 1.82.26 2.504.158.764-.114 2.348-.96 2.678-1.886.33-.926.33-1.72.23-1.886-.1-.166-.364-.264-.76-.462z" />
    </svg>
  );
}

// ─── Componente WhatsApp Button ────────────────────────────────────────────────
export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        right: "1.25rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "0.625rem",
        // Tooltip a la izquierda del botón
        flexDirection: "row-reverse",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Botón circular */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="wa-button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "3.25rem",
          height: "3.25rem",
          borderRadius: "9999px",
          backgroundColor: hovered ? "#1ebe5d" : "#25D366",
          boxShadow: hovered
            ? "0 8px 30px rgba(37,211,102,0.5)"
            : "0 4px 18px rgba(37,211,102,0.35)",
          transform: hovered ? "scale(1.12)" : "scale(1)",
          transition:
            "background-color 0.25s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
          flexShrink: 0,
          textDecoration: "none",
        }}
      >
        <WhatsAppIcon />
      </a>

      {/* Tooltip flotante */}
      <div
        className="wa-tooltip"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0) scale(1)" : "translateX(8px) scale(0.95)",
          transition:
            "opacity 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
          pointerEvents: "none",
          // Estilos del globo
          background: "rgba(15, 23, 42, 0.95)",
          border: "1px solid rgba(37,211,102,0.3)",
          backdropFilter: "blur(12px)",
          borderRadius: "0.5rem",
          padding: "0.5rem 0.875rem",
          whiteSpace: "nowrap",
          // Flecha apuntando a la derecha (hacia el botón)
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "white",
            letterSpacing: "0.02em",
            fontFamily: "inherit",
          }}
        >
          ¡Hablemos de tu proyecto!
        </span>

        {/* Flecha del tooltip */}
        <span
          style={{
            position: "absolute",
            right: "-6px",
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: "6px solid rgba(15, 23, 42, 0.95)",
          }}
        />
      </div>
    </div>
  );
}
