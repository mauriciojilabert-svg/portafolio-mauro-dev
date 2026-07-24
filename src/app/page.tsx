import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SystemsSection from "@/components/SystemsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SystemsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
