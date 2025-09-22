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
    default: "Seguridad Privada en Mendoza | Blindaje",
    template: "%s | Blindaje",
  },
  description:
    "Seguridad privada en Mendoza: vigilancia física, monitoreo de alarmas, CCTV y custodios. Atención profesional y cobertura en toda la provincia.",
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
    title: "Blindaje — Seguridad Privada en Mendoza",
    description:
      "Vigilancia, alarmas, CCTV y custodias. Cobertura provincial.",
    url: "https://blindaje.com.ar",
    siteName: "Blindaje",
    images: [
      {
        url: "/opengraph-image.png", // 1200x630
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
    site: "@blindaje", // si tenés cuenta, actualizalo
    images: ["/twitter-image.png"], // 1200x630 recomendado
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/icon.png", // 192x192 recomendado
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Blindaje.ar",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className={`${HankenGrotesk.className} scroll-smooth`}>
        <NavBar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
