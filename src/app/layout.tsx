import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mauro.Dev — Desarrollo de Software a Medida & Soluciones VoIP",
  description:
    "Desarrollador Fullstack especializado en sistemas de gestión empresarial, integración VoIP/Asterisk y aplicaciones web modernas. Python, Django, Next.js, TypeScript y más.",
  keywords: [
    "desarrollo software",
    "VoIP",
    "Asterisk",
    "Next.js",
    "Django",
    "Python",
    "call center",
    "gestión de tickets",
    "inventarios",
    "desarrollo a medida",
  ],
  openGraph: {
    title: "Mauro.Dev — Desarrollo de Software a Medida & Soluciones VoIP",
    description:
      "Sistemas de gestión, integración VoIP/Asterisk y aplicaciones web modernas construidas con tecnología de punta.",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased" style={{ background: '#000000', color: '#ffffff' }}>{children}</body>
    </html>
  );
}
