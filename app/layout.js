import "./globals.css";
import NavBar from "./components/ui/NavBar";
import { Hanken_Grotesk } from "next/font/google";
import Footer from "./components/ui/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const HankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Blindaje - Seguridad Privada Integral",
    template: "%s | Blindaje",
  },
  description:
    "Blindaje ofrece servicios de seguridad privada, vigilancia, alarmas y soluciones integrales en toda la provincia de Mendoza. Nuestro equipo de profesionales garantiza la seguridad de tus propiedades y personas con tecnología de punta y experiencia en el mercado.",
  keywords: [
    "Seguridad privada",
    "Vigilancia",
    "Alarmas",
    "Cámaras de seguridad",
    "Monitoreo",
    "Blindaje",
    "Mendoza",
    "Empresas de seguridad",
    "Servicios de seguridad",
    "Soluciones integrales",
    "Personal de seguridad",
    "Protección de propiedades",
    "Protección de personas",
    "Seguridad privada integral",
    "Seguridad privada en Mendoza",
  ],
  metadataBase: new URL("https://blindaje.com.ar"),
  openGraph: {
    title: "Blindaje Seguridad Privada",
    description:
      "Servicios de seguridad personalizados en Mendoza. Vigilancia, alarmas y monitoreo profesional.",
    url: "https://blindaje.com.ar",
    siteName: "Blindaje",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Blindaje Seguridad Privada",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blindaje Seguridad Privada",
    description:
      "Soluciones de seguridad en Mendoza. Protegé lo que más importa.",
    site: "@blindaje",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Blindaje.ar",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  themeColor: "#E1701A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${HankenGrotesk.className} scroll-smooth`}>
        <NavBar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
