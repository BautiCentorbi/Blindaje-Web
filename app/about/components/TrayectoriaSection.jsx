import React from "react";
import { Abril_Fatface } from "next/font/google";
import { Building2, GraduationCap, ShieldCheck } from "lucide-react";

const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const properties = [
  "Casino City Center de Rosario",
  "Hotel Park Hyatt Mendoza",
  "Casino Dreams Plaza",
  "Complejo Arena Maipú",
  "Casino Del Este en Mendoza",
  "Predio Tótem Boulevard",
  "Hotel Fuente Mayor",
];

const TrayectoriaSection = () => {
  return (
    <article
      className="dk:text-white px-4 md:px-60 flex flex-col items-center gap-8 text-lg mt-4 md:mt-16"
      id="trayectoria"
    >
      <h2 className="text-3xl text-center mb-2">
        Experiencia de{" "}
        <span className={`${AbrilFatface.className} text-dk_primary`}>
          Clase Mundial
        </span>
      </h2>
      <p className="text-justify">
        La dirección de Blindaje combina años de experiencia en el sector de
        la seguridad con un enfoque innovador. Nos destacamos por haber
        estado a cargo de la seguridad de empresas multinacionales de
        renombre, operando bajo estándares internacionales muy elevados y
        protocolos de exigencia global, lo que nos permite aplicar las
        mejores prácticas de la industria en cada proyecto local.
      </p>

      <div className="w-full grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4 bg-white/5 dark:bg-white/5 shadow-xl shadow-black/10 rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Building2 className="w-7 h-7 text-dk_primary shrink-0" />
            <h3 className="uppercase text-dk_primary font-bold text-xl">
              Propiedades de Alta Complejidad
            </h3>
          </div>
          <p className="text-base text-justify">
            La cúpula directiva ha liderado la protección de propiedades de
            alta complejidad, incluyendo:
          </p>
          <ul className="list-disc list-inside text-base grid gap-1">
            {properties.map((property) => (
              <li key={property}>{property}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 bg-white/5 dark:bg-white/5 shadow-xl shadow-black/10 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-dk_primary shrink-0" />
              <h3 className="uppercase text-dk_primary font-bold text-xl">
                Formación Académica
              </h3>
            </div>
            <p className="text-base text-justify">
              Los propietarios y socios cuentan con títulos de Licenciados en
              Seguridad Pública y Diplomaturas en Seguridad Corporativa, lo
              que garantiza una gestión basada en el conocimiento académico y
              táctico.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-white/5 dark:bg-white/5 shadow-xl shadow-black/10 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-dk_primary shrink-0" />
              <h3 className="uppercase text-dk_primary font-bold text-xl">
                Estándares Internacionales
              </h3>
            </div>
            <p className="text-base text-justify">
              Aplicamos protocolos de exigencia global en cada proyecto,
              trasladando a Mendoza las mejores prácticas de la seguridad
              corporativa internacional.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TrayectoriaSection;
