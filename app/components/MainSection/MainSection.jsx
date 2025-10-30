// components/WhyChooseUs.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});

export default function MainSection() {
  return (
    <section className="px-6 md:px-24 lg:px-32 2xl:px-56 py-12 md:py-16 lg:py-20 dk:text-white">
      {/* Encabezado */}
      <motion.header className="flex flex-col gap-4 md:gap-3" {...fadeUp(0)}>
        <div className="flex items-center gap-3">
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-neutral-500 dk:text-neutral-300 relative">
            Enfoque 360
          </span>
          <span className="absolute h-[3px] w-16 bg-dk_primary rounded-full translate-y-[10px]" />
        </div>

        <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-extrabold tracking-tighter leading-[1.05] uppercase">
          Soluciones de <span className="text-dk_primary">Seguridad Integral</span>
        </h2>

        <p className="text-base md:text-xl text-neutral-600 dk:text-neutral-300 max-w-3xl">
          Combinamos experiencia, innovación y respuesta inmediata para proteger lo que más te importa.
        </p>
      </motion.header>

      {/* Tarjetas enfoque */}
      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Seguridad Física */}
        <motion.div
          className="rounded-2xl p-6 md:p-8 bg-neutral-900 text-white shadow-lg ring-1 ring-neutral-800"
          {...fadeUp(0.1)}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Seguridad Física</h3>
          <p className="text-neutral-300 mb-6">
            Presencia operativa constante y protocolos preventivos que garantizan control y protección en cada espacio.
          </p>
          <ul className="space-y-3">
            {[
              "Vigilancia y rondas preventivas",
              "Control de accesos y registros",
              "Supervisión de instalaciones y personal",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 text-white/90" />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Seguridad Electrónica */}
        <motion.div
          className="rounded-2xl p-6 md:p-8 bg-dk_primary/95 text-white shadow-lg ring-1 ring-dk_primary/70"
          {...fadeUp(0.2)}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Seguridad Electrónica</h3>
          <p className="text-white/90 mb-6">
            Tecnología avanzada para detectar, alertar y actuar ante cualquier riesgo con rapidez y precisión.
          </p>
          <ul className="space-y-3">
            {[
              "Monitoreo remoto y alarmas 24/7",
              "Cámaras y sensores inteligentes",
              "Integración con sistemas de control y respuesta",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 text-white" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ¿Por qué elegirnos? */}
      <motion.div
        className="mt-10 md:mt-12 grid md:grid-cols-[1.25fr_.75fr] gap-8 items-start"
        {...fadeUp(0.3)}
      >
        <div className="rounded-2xl p-6 md:p-8 bg-neutral-100 dk:bg-neutral-900/60 dk:ring-1 dk:ring-neutral-800">
          <h4 className="text-xl md:text-2xl font-extrabold mb-3">¿Por qué elegirnos?</h4>
          <p className="text-neutral-700 dk:text-neutral-300">
            Integramos <span className="font-semibold">análisis</span>, seguridad{" "}
            <span className="font-semibold">física y electrónica</span> y{" "}
            <span className="font-semibold">consultoría</span> para proteger tu operación de punta a punta.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Detecta",
                desc: "Evaluamos riesgos y vulnerabilidades para anticiparnos.",
              },
              {
                title: "Actúa",
                desc: "Diseñamos planes, protocolos y roles claros.",
              },
              {
                title: "Protege",
                desc: "Integramos personas, procesos y tecnología para responder mejor.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-4 bg-white dk:bg-neutral-900 shadow-sm ring-1 ring-neutral-200 dk:ring-neutral-800"
              >
                <div className="flex items-center gap-2 mb-1">
                  <ChevronRight className="text-dk_primary" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {b.title}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dk:text-neutral-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-6 md:p-8 bg-white dk:bg-neutral-900 shadow-sm ring-1 ring-neutral-200 dk:ring-neutral-800">
          <div className="flex items-center justify-between">
            <p className="text-base md:text-lg font-semibold">
              Blindaje Seguridad Privada Integral
            </p>
            <ChevronRight className="text-dk_primary" />
          </div>
          <p className="mt-3 text-sm text-neutral-600 dk:text-neutral-300">
            Profesionalismo + tecnología + estrategia para resguardar personas, bienes y continuidad
            operativa.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
