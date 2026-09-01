"use client";

import Image from "next/image";
import React from "react";

export default function ClientMarquee() {
  // 👉 Acá definís tus logos directamente
  const logos = [
  {
    src: "/logos/Logo-Sheraton.webp",
    alt: "Sheraton Mendoza Hotel",
    className: "h-[40px] w-[120px] lg:h-50 lg:w-150",
  },
  {
    src: "/logos/Logo-Totem_Boulevard.webp",
    alt: "Tótem Boulevard San Martín Mendoza",
  },
  {
    src: "/logos/Logo-FBPM.webp",
    alt: "Federación de Básquet de la Provincia de Mendoza",
    className: "h-[40px] w-[120px] lg:h-50 lg:w-150"
  },
  {
    src: "/logos/Logo-iMatorras.webp",
    alt: "Logo de Bodega iMatorras, ubicada en Tupungato, Mendoza.",
  },
  {
    src: "/logos/Logo-AMO.webp",
    alt: "Logo de Asociación Mendocina de Oftalmología.",
    classname: "h-30 w-90 lg:h-40 lg:w-120"
  },
  {
    src: "/logos/Logo-BlackJagger.webp",
    alt: "Logo de Black Jagger Club, un espacio de entretenimiento nocturno en Mendoza.",
    classname: "h-30 w-90 lg:h-40 lg:w-120"
  },
  {
    src: "/logos/Logo-WIP.webp",
    alt: "Logo de WIP, una productora de eventos en Mendoza.",
    classname: "h-30 w-90 lg:h-40 lg:w-120"
  },
  {
    src: "/logos/Logo-ELROBLE.webp",
    alt: "Logo de El Roble Wake Complex, un complejo donde se realizan actividades acuáticas y recreativas en Mendoza. Así como diversión de tarde y noche. Sumado a eventos masivos varios.",
    classname: "h-30 w-90 lg:h-40 lg:w-120"
  }

];

  const speedSeconds = 28; // podés cambiar velocidad (más alto = más lento)
  const gradientWidth = "w-16 md:w-24 lg:w-32";

  // duplicamos para loop perfecto
  const track = [...logos, ...logos];

  return (
    <section
      className={`relative overflow-hidden group py-12 md:py-12`}
      aria-label="Clientes de Blindaje"
    >
      <div>
        <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-extrabold tracking-tighter leading-[1.05] uppercase text-center py-12">¿Quiénes <span className="text-dk_primary">confían</span> en nosotros?</h2>
      </div>
      {/* Degradados laterales */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 ${gradientWidth} z-10 
        bg-gradient-to-r from-white to-transparent`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 right-0 ${gradientWidth} z-10 
        bg-gradient-to-l from-white to-transparent`}
      />

      {/* Banda animada */}
      <div
        className="marquee-animate group-hover:[animation-play-state:paused] flex w-max"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {/* Copia 1 */}
        <ul className="flex items-center gap-8 md:gap-12 lg:gap-16 shrink-0 px-4 py-6">
          {track.map((logo, i) => (
            <li key={`set1-${i}`} className="flex items-center justify-center">
              <div className="relative h-[40px] w-[120px] lg:h-[50px] lg:w-[150px] opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.classname}
                  fill
                  sizes="(min-width: 1024px) 120px, (min-width: 768px) 90px, 60px"
                  style={{ objectFit: "contain" }}
                  priority={i < 4}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Copia 2 */}
        <ul className="flex items-center gap-8 md:gap-12 lg:gap-16 shrink-0 px-4 py-6">
          {track.map((logo, i) => (
            <li key={`set2-${i}`} className="flex items-center justify-center">
              <div className="relative h-[40px] w-[120px] lg:h-[50px] lg:w-[150px] opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.classname}
                  fill
                  sizes="(min-width: 1024px) 120px, (min-width: 768px) 90px, 60px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


