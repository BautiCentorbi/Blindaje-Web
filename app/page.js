import HeroSection from "./components/HeroSection/HeroSection";
import MainSection from "./components/MainSection/MainSection";

export const metadata = {
  title: 'Blindaje: Empresa deSeguridad Privada en Mendoza',
  description:
    'Seguridad Privada en Mendoza, servicios de seguridad, vigilancia, monitoreo, custodios, alarmas y tecnología de punta.',
  keywords: [
    'Blindaje',
    'Seguridad privada',
    'Seguridad en Mendoza',
    'Seguridad profesional',
    'Vigilancia privada',
    'Seguridad Privada en Mendoza',
    'Seguridad Privada Integral',
    'Empresa de vigilancia',
    'Monitoreo de alarmas',
    'Cámaras de seguridad',
    'Vigilancia profesional',
    'Protección personalizada',
    'Blindaje seguridad',
    'Protección de propiedades',
    'Servicios de seguridad en Mendoza',
  ],
  metadataBase: new URL('https://blindaje.com.ar'),
  openGraph: {
    title: 'Blindaje Seguridad Privada',
    description:
      'Servicios de protección y vigilancia con atención humana y tecnología de vanguardia en todo Mendoza.',
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
