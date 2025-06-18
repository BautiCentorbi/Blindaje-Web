import React from 'react'
import { Abril_Fatface } from 'next/font/google'

const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });


const DiferentiationSection = () => {
  return (
    <article className="dk:text-white px-4 md:px-60 flex flex-col items-center gap-2 text-lg mt-4 md:mt-16" id="objetivos">
      <h2 className={`text-3xl text-center mb-8`}>
        ¿Qué nos
        <span className={`${AbrilFatface.className} text-dk_primary`}> diferencia?</span>
      </h2>
      <p className="text-justify">
        En Blindaje, nos distinguimos sobre la industria de la seguridad privada porque basamos nuestro trabajo en  profesionalismo, confianza, experiencia y calidad.
    </p>
    <p>
        Ofrecemos seguridad integral, abarcando protección física, electrónica y análisis de riesgos. Nuestro equipo capacitado utiliza tecnología avanzada para garantizar la máxima protección. Además, brindamos asesoramiento personalizado, enfocándonos en detectar, prevenir y solucionar problemas.
      </p>
    </article>
  )
}

export default DiferentiationSection