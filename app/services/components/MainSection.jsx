import React from "react";
import Image from "next/image";
import TitleDetail from "./TitleDetail";

const MainSection = () => {
  return (
    <section className="h-screen mt-8 md:mt-16 flex flex-col items-center px-4 md:px-60">
      <div className="">
        <Image src={"/images/Services-Steps.svg"} height={120} width={700} />
      </div>
      <article className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-center">Análisis de Riesgos</h2>
        <p className="text-lg text-justify">
          El análisis de riesgos <span className="font-bold">identifica</span> y{" "}
          <span className="font-bold">evalúa</span> las amenazas y
          vulnerabilidades que pueden afectar a tus instalaciones, permitiendo
          desarrollar{" "}
          <span className="font-bold">planes de seguridad personalizados</span>{" "}
          y eficaces.
        </p>
        <TitleDetail text={'Evaluación de vulnerabilidades'}/>
        <TitleDetail text={'Desarrollo de planes de seguridad'}/>
        <TitleDetail text={'Vigilancia y rondas de seguridad'}/>
        <TitleDetail text={'Control de accesos'}/>
        <TitleDetail text={'Respuesta rápida ante emergencias'}/>
        <TitleDetail text={'Sistemas de alarmas'}/>
        <TitleDetail text={'Cámaras de seguridad'}/>
        <TitleDetail text={'Control de acceso electrónico'}/>
        <TitleDetail text={'Diseño de sistemas de seguridad'}/>
        <TitleDetail text={'Capacitación del personal'}/>
      </article>
    </section>
  );
};

export default MainSection;
