import React from "react";
import Link from "next/link";
import { Home, Building2, Factory, PartyPopper } from "lucide-react";

const segments = [
  {
    icon: Home,
    title: "Residencial",
    description:
      "Vigilancia y control de accesos para countries, barrios privados y viviendas particulares.",
  },
  {
    icon: Building2,
    title: "Corporativo / Empresas",
    description:
      "Seguridad integral para oficinas, bodegas y empresas, combinando personal capacitado y tecnología.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Custodia, control de accesos y monitoreo para plantas, depósitos y predios de gran superficie.",
  },
  {
    icon: PartyPopper,
    title: "Eventos",
    description:
      "Cobertura de seguridad para recitales, eventos deportivos y espacios con alta concurrencia.",
  },
];

const SegmentationSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8 mt-16 md:mt-24 px-4 md:px-60">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center items-center flex flex-col">
        ¿Para quién trabajamos?
        <hr className="border-dk_primary border-2 my-2 w-36 md:w-64" />
      </h2>
      <p className="text-md md:text-xl md:text-justify text-center max-w-2xl">
        Adaptamos nuestros servicios de seguridad física, electrónica y
        asesoramiento a cada tipo de predio y necesidad.
      </p>
      <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map(({ icon: Icon, title, description }) => (
          <Link
            key={title}
            href="/contact"
            aria-label={`Solicitá una cotización para seguridad ${title}`}
            className="group flex flex-col gap-3 bg-white/5 dark:bg-white/5 shadow-xl shadow-black/10 rounded-xl p-6 hover:-translate-y-1 transition-transform"
          >
            <Icon className="w-8 h-8 text-dk_primary shrink-0" />
            <h3 className="uppercase text-dk_primary font-bold text-lg">
              {title}
            </h3>
            <p className="text-sm md:text-base">{description}</p>
            <span className="text-sm font-bold text-dk_primary mt-auto group-hover:underline">
              Solicitar cotización →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SegmentationSection;
