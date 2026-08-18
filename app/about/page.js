import React from "react";
import * as motion from "motion/react-client";
import { Abril_Fatface } from "next/font/google";
import FocusSection from "./components/FocusSection.jsx";
import GoalsSection from "./components/GoalsSection.jsx";
import DiferentiationSection from "./components/DiferentiationSection.jsx";
import TrayectoriaSection from "./components/TrayectoriaSection.jsx";
import { Divide } from "lucide-react";
import Image from "next/image.js";
const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conocé la historia, misión y visión de Blindaje. Ofrecemos servicios de seguridad privada con enfoque humano y tecnología de punta en Mendoza.',
  keywords: [
    'Blindaje',
    'Sobre nosotros',
    'Nuestra historia',
    'Misión',
    'Visión',
    'Seguridad en Mendoza',
    'Empresa de seguridad',
    'Valores Blindaje',
    '¿Por qué elegirnos?',
  ],
  openGraph: {
    title: 'Sobre Nosotros | Blindaje',
    description:
      'Descubrí quiénes somos, nuestros valores y por qué elegir Blindaje para tu seguridad privada.',
    url: 'https://blindaje.com.ar/about',
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
    title: 'Sobre Nosotros | Blindaje',
    description:
      'Conocé nuestra historia y el compromiso de Blindaje con la seguridad privada en Mendoza.',
    images: ['/twitter-image.png'],
  },
};



const page = () => {
  return (
    <main className="relative min-h-screen py-24 2xl:py-40 max-w-screen overflow-hidden">
      <section className="flex flex-col items-center mx-4 md:mx-18 2xl:mx-40 md:gap-8" id="historia">
        <h1 className="text-3xl max-w-4xl md:text-5xl 2xl:text-7xl md:max-w-xl 2xl:max-w-3xl text-center dk:text-white">
          Elevando tu seguridad<br className="md:hidden"/> a un
          <span className={`${AbrilFatface.className} text-dk_primary text-4xl md:text-6xl 2xl:text-7xl`}>
            {" "}
            Nuevo Nivel
          </span>
        </h1>
        <hr className="border-gray-600 border-1 opacity-20 my-8 md:my-2 2xl:my-8 w-36 md:w-64" />
        <TrayectoriaSection />
        <GoalsSection/>
        <DiferentiationSection />
        <FocusSection/>
      </section>
      <section></section>
    </main>
  );
};

export default page;
