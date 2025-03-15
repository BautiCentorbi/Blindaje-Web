import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Abril_Fatface } from "next/font/google";
const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const page = () => {
  return (
    <main className="relative min-h-screen py-40">
      <section className="flex flex-col items-center mx-80 gap-8">
        <h1 className="text-7xl max-w-3xl text-center">
          Elevando tu seguridad a un
          <span className={`${AbrilFatface.className} text-acc_primary`}>
            {" "}
            Nuevo Nivel
          </span>
        </h1>
        <hr className="border-gray-200 border-1 opacity-20 my-8 w-64" />
        <div className="px-60 flex flex-col items-center gap-8 text-lg">
          <p>
            En un mundo que avanza a toda velocidad, la{" "}
            <span className="underline font-bold">tranquilidad</span> es un lujo
            que todos merecemos. En Blindaje, entendemos que cada cliente es
            único y que sus necesidades de seguridad no pueden abordarse con
            soluciones genéricas. Por eso, nos hemos dedicado a{" "}
            <span className="underline font-bold">redefinir</span> lo que
            significa la{" "}
            <span className="underline font-bold">
              protección personalizada
            </span>
            .
          </p>
          <p>
            <span className="uppercase text-acc_primary font-bold text-xl block">
              Nuestro Compromiso:
            </span>
            La seguridad no es solo un servicio para nosotros; es nuestra
            vocación. Combinamos años de experiencia en el sector con un enfoque
            innovador que fusiona lo mejor de la tecnología y el factor humano.
            Ya sea que necesites salvaguardar un espacio físico, gestionar
            accesos electrónicos o anticipar riesgos potenciales, estamos aquí
            para convertir lo complejo en algo sencillo y eficiente.
          </p>
          <p>
            <span className="uppercase text-acc_primary font-bold text-xl block">
              Más que un Servicio, un Socio de Confianza
            </span>
            No somos solo una empresa de seguridad. Nos consideramos tus aliados
            en la protección de aquello que más valoras. Desde el momento en que
            nos eliges, nos sumergimos en tus necesidades para diseñar
            estrategias hechas a medida, que no solo reaccionan ante amenazas,
            sino que las previenen antes de que se presenten.
          </p>
        </div>
        <div className="bg-black/80 flex flex-col gap-8 text-lg mx-36 p-24 rounded-xl">
            <h2 className={`${AbrilFatface.className} text-4xl text-center mb-8`}>Nuestro enfoque se basa en <span className="text-acc_primary">tres pilares:</span></h2>
            <p>
              <span className="uppercase text-acc_primary font-bold text-xl block">
                Prevención:
              </span>
              La seguridad empieza antes de que exista un problema. Nuestro
              equipo se dedica a analizar posibles riesgos y vulnerabilidades en
              tus instalaciones, diseñando estrategias que van más allá de lo
              evidente. Desde planes de seguridad detallados hasta
              capacitaciones específicas para el personal, trabajamos para
              anticiparnos a cualquier amenaza y garantizar que tu tranquilidad
              no sea interrumpida.
            </p>
            <p>
              <span className="uppercase text-acc_primary font-bold text-xl block">
                Innovación:
              </span>
              La tecnología evoluciona, y con ella, también lo hacen las
              amenazas. En Blindaje, apostamos por estar siempre un paso
              adelante, adoptando las últimas innovaciones en seguridad
              electrónica y física. Desde sistemas de cámaras de alta precisión
              hasta soluciones de control de acceso inteligentes, nuestra
              prioridad es brindarte herramientas modernas que ofrezcan máxima
              eficacia y sean fáciles de usar.
            </p>
            <p>
              <span className="uppercase text-acc_primary font-bold text-xl block">
                Cercanía:
              </span>
              Sabemos que la confianza es fundamental cuando se trata de
              seguridad. Por eso, no solo ofrecemos un servicio, sino un
              acompañamiento continuo. Nos tomamos el tiempo para escuchar,
              entender tus necesidades y adaptarnos a los cambios. Ya sea a
              través de asesoramiento personalizado o de nuestro servicio al
              cliente siempre accesible, nuestro objetivo es que te sientas
              respaldado en todo momento.
            </p>
          </div>
      </section>
    </main>
  );
};

export default page;
