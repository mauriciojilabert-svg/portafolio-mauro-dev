import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SystemsSection from "@/components/SystemsSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SystemsSection />
      {/* Carrusel 3D interactivo — vista inmersiva de proyectos */}
      <ProjectCarousel />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

