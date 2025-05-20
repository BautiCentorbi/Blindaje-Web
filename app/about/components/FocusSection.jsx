import React from "react";
import { Abril_Fatface } from "next/font/google";

const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const FocusSection = () => {
  return (
    <article className="bg-black/20 flex flex-col gap-8 text-lg mx-36 p-24 rounded-xl" id="enfoque">
      <h2 className={`${AbrilFatface.className} text-4xl text-center mb-8`}>
        Nuestro enfoque se basa en{" "}
        <span className="text-dk_primary">tres pilares:</span>
      </h2>
      <p>
        <span className="uppercase text-dk_primary font-bold text-xl block">
          Prevención:
        </span>
        La seguridad empieza antes de que exista un problema. Nuestro equipo se
        dedica a analizar posibles riesgos y vulnerabilidades en tus
        instalaciones, diseñando estrategias que van más allá de lo evidente.
        Desde planes de seguridad detallados hasta capacitaciones específicas
        para el personal, trabajamos para anticiparnos a cualquier amenaza y
        garantizar que tu tranquilidad no sea interrumpida.
      </p>
      <p>
        <span className="uppercase text-dk_primary font-bold text-xl block">
          Innovación:
        </span>
        La tecnología evoluciona, y con ella, también lo hacen las amenazas. En
        Blindaje, apostamos por estar siempre un paso adelante, adoptando las
        últimas innovaciones en seguridad electrónica y física. Desde sistemas
        de cámaras de alta precisión hasta soluciones de control de acceso
        inteligentes, nuestra prioridad es brindarte herramientas modernas que
        ofrezcan máxima eficacia y sean fáciles de usar.
      </p>
      <p>
        <span className="uppercase text-dk_primary font-bold text-xl block">
          Cercanía:
        </span>
        Sabemos que la confianza es fundamental cuando se trata de seguridad.
        Por eso, no solo ofrecemos un servicio, sino un acompañamiento continuo.
        Nos tomamos el tiempo para escuchar, entender tus necesidades y
        adaptarnos a los cambios. Ya sea a través de asesoramiento personalizado
        o de nuestro servicio al cliente siempre accesible, nuestro objetivo es
        que te sientas respaldado en todo momento.
      </p>
    </article>
  );
};

export default FocusSection;
