import React from "react";
import Image from "next/image";
import MainCarousell from "../carousell/MainCarousell";
import * as motion from "motion/react-client";
import InfoDivider from "./InfoDivider";
import MethodologyDivider from "./MethodologyDivider";

const MainSection = () => {
  return (
    <main className=" dk:text-white px-8 md:px-32 py-8 md:py-12 2xl:py-24">
      <InfoDivider />
      <section>
        <article className="flex flex-col gap-4">
          <div className="flex flex-col w-fit">
            <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-bold w-fit">¿Por qué elegirnos?</h2>
            <hr className="border-2 border-dk_primary my-2 md:my-4 w-full" />
          </div>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <ul className="text-md md:text-lg flex flex-col gap-4">
              Nos dedicamos a ofrecer soluciones integrales para la protección de lo que más te importa. Aquí te contamos por qué somos la mejor opción:
              <div className="flex gap-4 items-center">
                <svg
                  className="fill-dk_primary w-8 h-8 md:inline hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{objectFit: "contain"}}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
                <li>
                  <span className="font-bold">Profesionalismo:</span> Contamos con
                  un equipo altamente capacitado y experimentado en el campo de
                  la seguridad.
                </li>
              </div>
              <div className="flex gap-4 items-center">
                <svg
                  className="fill-dk_primary w-8 h-8 md:inline hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{objectFit: "contain"}}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
                <li>
                  <span className="font-bold">Seguridad Integral:</span>{" "}
                  Ofrecemos servicios completos que incluyen seguridad física y
                  electrónica, análisis de riesgos, asesoría y consultoría.
                </li>
              </div>
              <div className="flex gap-4 items-center">
                <svg
                  className="fill-dk_primary w-8 h-8 md:inline hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
                <li>
                  <span className="font-bold">Tecnología de Punta:</span>{" "}
                  Utilizamos las últimas innovaciones tecnológicas para
                  garantizar la máxima eficacia y protección.
                </li>
              </div>
              <div className="flex gap-4 items-center">
                <svg
                  className="fill-dk_primary w-8 h-8 md:inline hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{objectFit: "contain"}}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
                <li>
                  <span className="font-bold">Prevención y Detección:</span> Nos
                  enfocamos en prevenir posibles amenazas y detectar cualquier
                  situación de riesgo antes de que se convierta en un problema.
                </li>
              </div>
            </ul>
            <picture className="">
              <Image
                src={"/images/MainSectionIMG.jpg"}
                alt="Imágen de cámaras de seguridad vigilando."
                width={844}
                height={844}
                className="rounded-2xl md:inline hidden"
              />
            </picture>
          </div>
        </article>
      </section>
      <MethodologyDivider />
      <section className="mx-auto max-w-screen overflow-hidden text-white rounded-lg my-32">
        <article className="flex flex-col w-full">
          <figure className="relative w-full h-full">
            <MainCarousell />
          </figure>
        </article>
      </section>
      
    </main>
  );
};

export default MainSection;
