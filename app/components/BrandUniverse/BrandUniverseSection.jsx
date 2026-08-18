"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, ArrowUpRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});

const brands = [
  {
    name: "Blindaje Seguridad Privada",
    desc: "Protección física, electrónica y monitoreo 24/7 en toda Mendoza.",
    logo: "/logos/Blindaje-Logo_Symbol-White.webp",
    status: "active",
    theme: "orange",
  },
  {
    name: "Blindaje Humano",
    desc: "Capacitación en primeros auxilios para personas y empresas.",
    icon: HeartPulse,
    status: "link",
    href: "https://blinhumano.com/",
    theme: "white",
  },
  {
    name: "Blindaje Digital",
    desc: "La tecnología que potencia a nuestros guardias: una plataforma que une control de accesos, seguimiento de rondas y gestión de visitas para llevar la seguridad privada a otro nivel. Próximamente.",
    logo: "/logos/BDigital-Logo_Symbol-White.webp",
    status: "soon",
    theme: "purple",
  },
];

export default function BrandUniverseSection() {
  return (
    <section className="px-6 md:px-24 lg:px-32 2xl:px-56 py-16 md:py-20 dk:text-white">
      <motion.header
        className="flex flex-col gap-4 md:gap-3 text-center items-center"
        {...fadeUp(0)}
      >
        <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-neutral-500 dk:text-neutral-300">
          Universo Blindaje
        </span>
        <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-extrabold tracking-tighter leading-[1.05] uppercase max-w-4xl">
          Una misma esencia,{" "}
          <span className="text-dk_primary">distintas formas de proteger</span>
        </h2>
        <p className="text-base md:text-xl text-neutral-600 dk:text-neutral-300 max-w-3xl">
          Blindaje nació como seguridad privada y hoy es una familia de marcas que
          comparten un mismo compromiso: cuidar a las personas.
        </p>
      </motion.header>

      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {brands.map((brand, i) => {
          const Icon = brand.icon;
          const isLink = brand.status === "link";
          const isSoon = brand.status === "soon";

          const themeStyles = {
            orange: {
              card: "bg-dk_primary/95 text-white ring-dk_primary/70",
              icon: "text-white",
              title: "text-white",
              desc: "text-white/90",
              badge: "bg-white/15 text-white ring-white/30",
            },
            white: {
              card: "bg-white dk:bg-neutral-900/60 text-neutral-900 dk:text-white ring-neutral-200 dk:ring-neutral-800 hover:shadow-lg",
              icon: "text-dk_primary",
              title: "",
              desc: "text-neutral-600 dk:text-neutral-300",
              badge: "bg-white dk:bg-neutral-900 text-neutral-500 dk:text-neutral-400 ring-neutral-200 dk:ring-neutral-800",
            },
            purple: {
              card: "bg-[#624E9B] text-white ring-[#624E9B]/70",
              icon: "text-white",
              title: "text-white",
              desc: "text-white/90",
              badge: "bg-white/15 text-white ring-white/30",
            },
          };

          const theme = themeStyles[brand.theme] || themeStyles.white;

          const card = (
            <motion.div
              {...fadeUp(0.1 + i * 0.1)}
              whileHover={isLink ? { scale: 1.02 } : undefined}
              className={`group h-full rounded-2xl p-6 md:p-8 shadow-sm ring-1 transition-all ${theme.card}`}
            >
              <div className="flex items-center justify-between">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                ) : (
                  <Icon className={`w-9 h-9 ${theme.icon}`} />
                )}
                {isLink && (
                  <ArrowUpRight className="w-5 h-5 text-dk_primary opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                )}
                {isSoon && (
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full ring-1 ${theme.badge}`}
                  >
                    Próximamente
                  </span>
                )}
              </div>

              <h3 className={`mt-4 text-xl md:text-2xl font-extrabold ${theme.title}`}>
                {brand.name}
              </h3>
              <p className={`mt-2 text-sm md:text-base ${theme.desc}`}>
                {brand.desc}
              </p>

              {isLink && (
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-dk_primary">
                  Visitar sitio
                </span>
              )}

              {isSoon && <WaitlistForm />}
            </motion.div>
          );

          if (isLink) {
            return (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${brand.name}`}
              >
                {card}
              </a>
            );
          }

          return <React.Fragment key={brand.name}>{card}</React.Fragment>;
        })}
      </div>
    </section>
  );
}
