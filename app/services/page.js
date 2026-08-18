import React from 'react'
import MainSection from './components/MainSection'
import SegmentationSection from './components/SegmentationSection'
import FaqSection from './components/FaqSection'
import { Abril_Fatface } from "next/font/google";

const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: 'Servicios',
  description:
    'Conocé los servicios de seguridad privada de Blindaje: vigilancia presencial, monitoreo, alarmas, cámaras y más.',
  keywords: [
    'Servicios de seguridad',
    'Blindaje Mendoza',
    'Alarmas',
    'Cámaras de seguridad',
    'Vigilancia privada',
    'Monitoreo de alarmas',
    'Empresas de seguridad en Mendoza'
  ],
  openGraph: {
    title: 'Servicios | Blindaje',
    description:
      'Descubrí nuestras soluciones de protección y vigilancia adaptadas a cada necesidad en Mendoza.',
    url: 'https://blindaje.com.ar/services',
    siteName: 'Blindaje',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Servicios Blindaje Seguridad Privada',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios | Blindaje',
    description: 'Explorá todos los servicios de Blindaje en un solo lugar.',
    images: ['/twitter-image.png'],
  },
};


const ServicesPage = () => {
  return (
    <main className='min-h-screen my-20 md:my-32 flex flex-col items-center mx-4 md:mx-18 2xl:mx-40'>
      <h1 className="text-3xl max-w-4xl md:text-4xl 2xl:text-5xl md:max-w-3xl text-center dk:text-white">
          Seguridad<br className="md:hidden"/> Privada
          <span className={`${AbrilFatface.className} text-dk_primary text-3xl md:text-4xl 2xl:text-5xl`}>
            {" "}
            Integral
          </span>
      </h1>
      <MainSection />
      <SegmentationSection />
      <FaqSection />
    </main>
  )
}

export default ServicesPage