"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

// ─── Swiper core styles (importados aquí para colocación en client component) ──
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// ─── Tipos ─────────────────────────────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  image: string;
  demoUrl: string;
  accentColor: string;
}

// ─── Datos de proyectos ────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: "01",
    title: "Incitrack",
    subtitle: "Mesa de Ayuda & Gestión de Tickets",
    stack: ["Django", "Next.js", "PostgreSQL", "Docker"],
    image: "/ui-incitrack.png",
    demoUrl: "#",
    accentColor: "#00c9a7",
  },
  {
    id: "02",
    title: "Inventarios",
    subtitle: "Control de Stock & Integración RRHH",
    stack: ["Python", "PostgreSQL", "Docker", "REST API"],
    image: "/ui-inventarios.png",
    demoUrl: "#",
    accentColor: "#38bdf8",
  },
  {
    id: "03",
    title: "VoIP / Call Center",
    subtitle: "Asterisk & Analítica de Llamadas",
    stack: ["Asterisk", "Python", "WebSocket", "React"],
    image: "/ui-voip.png",
    demoUrl: "#",
    accentColor: "#a78bfa",
  },
  {
    id: "04",
    title: "GranCRM",
    subtitle: "CRM Empresarial & Pipeline de Ventas",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    image: "/ui-incitrack.png",
    demoUrl: "#",
    accentColor: "#fb923c",
  },
];

// ─── Browser Mockup Card ───────────────────────────────────────────────────────
function BrowserCard({ project }: { project: Project }) {
  return (
    <div className="carousel-card">
      {/* Barra superior macOS */}
      <div className="browser-topbar">
        <div className="browser-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="browser-urlbar">
          <span className="browser-url-text">
            {project.demoUrl === "#"
              ? `mauro.dev/${project.title.toLowerCase()}`
              : project.demoUrl.replace("https://", "")}
          </span>
        </div>
        <div className="browser-dots-spacer" />
      </div>

      {/* Área de contenido: screenshot */}
      <div className="browser-screenshot">
        <Image
          src={project.image}
          alt={`Captura de pantalla de ${project.title}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 90vw, 480px"
          priority
        />
        {/* Overlay con gradiente inferior */}
        <div className="browser-overlay" />
      </div>

      {/* Footer de la tarjeta */}
      <div className="browser-footer">
        <div className="browser-footer-left">
          <span
            className="browser-project-id eyebrow"
            style={{ color: project.accentColor }}
          >
            {project.id}
          </span>
          <div>
            <h3 className="browser-title">{project.title}</h3>
            <p className="browser-subtitle">{project.subtitle}</p>
          </div>
        </div>

        {/* Stack de tecnologías */}
        <div className="browser-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Botón demo */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-btn"
          style={{ borderColor: project.accentColor, color: project.accentColor }}
          onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
        >
          <span>Visitar Demo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────
export default function ProjectCarousel() {
  return (
    <section id="carrusel-proyectos" className="carousel-section">
      {/* Header */}
      <div className="carousel-header">
        <span className="gold-bar mb-4" />
        <p className="eyebrow" style={{ color: "var(--gray-500)", marginBottom: "0.75rem" }}>
          Portafolio Interactivo
        </p>
        <h2
          className="section-title"
          style={{ fontSize: "clamp(2rem, 8vw, 4rem)", color: "var(--white)" }}
        >
          PROYECTOS EN
          <br />
          <span style={{ color: "var(--gold)" }}>PRODUCCIÓN</span>
        </h2>
        <p className="carousel-header-desc">
          Soluciones robustas desplegadas en entornos empresariales reales.
        </p>
      </div>

      {/* Carrusel */}
      <div className="carousel-wrapper">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 160,
            modifier: 1.4,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: ".carousel-pagination",
          }}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="project-slide">
              <BrowserCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bullets personalizados */}
        <div className="carousel-pagination" />
      </div>
    </section>
  );
}
