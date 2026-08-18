"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿En qué zonas de Mendoza trabaja Blindaje?",
    answer:
      "Tenemos presencia operativa en toda la provincia de Mendoza, con capacidad de intervención en Ciudad, Godoy Cruz, Las Heras, Guaymallén, Luján de Cuyo, Maipú, Lavalle, San Martín, Junín, Rivadavia y San Rafael.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Podés completar el formulario en nuestra página de Contacto contándonos qué tipo de predio y servicio necesitás, o escribirnos directamente por WhatsApp. Te contactamos a la brevedad para coordinar un relevamiento.",
  },
  {
    question: "¿Ofrecen seguridad física y electrónica combinadas?",
    answer:
      "Sí. Integramos personal de seguridad con tecnología (cámaras, alarmas y control de accesos electrónico) para una respuesta coordinada: la tecnología potencia al guardia, no lo reemplaza.",
  },
  {
    question: "¿Trabajan con residencias, empresas, industrias y eventos?",
    answer:
      "Sí, adaptamos nuestros servicios a cada tipo de predio y necesidad: barrios privados y viviendas, oficinas y empresas, plantas industriales, y cobertura de seguridad para eventos con alta concurrencia.",
  },
  {
    question: "¿El personal está capacitado y habilitado?",
    answer:
      "Nuestro personal recibe capacitación continua en primeros auxilios, manejo de extintores, protocolos de vigilancia, control de accesos y simulacros periódicos de respuesta ante emergencias.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full flex flex-col items-center gap-8 mt-16 md:mt-24 px-4 md:px-60">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center items-center flex flex-col">
        Preguntas Frecuentes
        <hr className="border-dk_primary border-2 my-2 w-36 md:w-64" />
      </h2>
      <div className="w-full max-w-3xl flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="bg-white/5 dark:bg-white/5 shadow-xl shadow-black/10 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-4 md:p-6 text-left"
              >
                <span className="font-bold text-md md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-dk_primary shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="text-sm md:text-base px-4 md:px-6 pb-4 md:pb-6 md:text-justify">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
