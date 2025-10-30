import React from 'react'
import BudgetForm from './components/BudgetForm'

// app/cotizaciones/page.jsx
export const metadata = {
  title: "Solicitá una cotización de seguridad privada en Mendoza",
  description:
    "Pedí tu presupuesto de seguridad privada en Mendoza con Blindaje. Vigilancia, custodias, monitoreo de alarmas y CCTV adaptados a tus necesidades. Respuesta rápida y asesoramiento profesional.",
  keywords: [
    "Cotización seguridad privada Mendoza",
    "Presupuesto vigilancia Mendoza",
    "Solicitar cotización custodios",
    "Cotización cámaras de seguridad Mendoza",
    "Empresa de seguridad cotización",
    "Blindaje Seguridad Privada Mendoza"
  ],
  openGraph: {
    title: "Cotizaciones — Blindaje Seguridad Privada en Mendoza",
    description:
      "Pedí tu presupuesto online: vigilancia, custodias, alarmas y CCTV en Mendoza. Atención personalizada de Blindaje.",
    url: "https://blindaje.com.ar/cotizaciones",
    siteName: "Blindaje",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cotización de seguridad privada en Mendoza"
      }
    ],
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Solicitá tu cotización | Blindaje Seguridad Mendoza",
    description:
      "Pedí presupuesto de seguridad privada en Mendoza. Blindaje: vigilancia, custodias, alarmas y CCTV.",
    images: ["/twitter-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};


const page = () => {
  return (
    <section className="flex items-center justify-center md:px-18 lg:px-24 xl:48 md:py-12">
        <BudgetForm />
    </section>
  )
}

export default page