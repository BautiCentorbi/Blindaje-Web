import HeroSection from "./components/HeroSection/HeroSection";
import MainSection from "./components/MainSection/MainSection";

export const metadata = {
  title: 'Blindaje Seguridad Privada Integral',
  description:
    'Protección personalizada en Mendoza. Servicios de seguridad privada, vigilancia, monitoreo, alarmas y tecnología de punta. Cotizá con Blindaje.',
  keywords: [
    'Blindaje',
    'Seguridad privada Mendoza',
    'Empresa de vigilancia',
    'Monitoreo de alarmas',
    'Cámaras de seguridad',
    'Vigilancia profesional',
    'Protección personalizada',
    'Blindaje seguridad',
    'Servicios de seguridad en Mendoza',
  ],
  metadataBase: new URL('https://blindaje.com.ar'),
  openGraph: {
    title: 'Blindaje Seguridad Privada',
    description:
      'Servicios de protección y vigilancia con atención humana y tecnología de vanguardia en toda Mendoza.',
    url: 'https://blindaje.com.ar',
    siteName: 'Blindaje',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Blindaje Seguridad Privada',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blindaje Seguridad Privada',
    description:
      'Conocé nuestros servicios de seguridad con cobertura en toda Mendoza.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://blindaje.com.ar',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
    </>
  );
}
