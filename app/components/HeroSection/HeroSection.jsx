"use client";
import Image from "next/image";
import BentoGrid from "./BentoGrid";
import Link from "next/link";
import * as motion from "motion/react-client";
import MainButton from "../ui/MainButton.jsx";
import SecondaryButton from "../ui/SecondaryButton";

const Hero = () => {
  return (
    <section className="w-full h-full dark:text-white text-black flex items-center justify-center mt-20 md:my-24 2xl:mt-40 px-6 md:px-12 lg:px-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center justify-center"
      >
        {/* Izquierda - Texto */}
        <div className="gap-6">
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-auto md:w-fit h-24 md:h-36 2xl:h-32 ">
            <Image
              src="/images/Imagotipo_Blindaje.svg"
              alt="Logo de Blindaje Seguridad Privada Integral"
              width={80}
              height={40}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col text-xl md:text-2xl 2xl:text-4xl leading-tight"
          >
            Redefinimos lo que significa
          </motion.h2>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-2 md:mt-4 uppercase font-extrabold text-4xl tracking-tighter leading-[1.05] md:text-5xl 2xl:text-7xl text-dk_primary"
          >
            Protección
            <br /> personalizada
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="pt-2 md:pt-8 2xl:pt-12 text-lg dark:text-gray-400 text-gray-600 max-w-lg"
          >
            En un mundo que avanza a toda velocidad, la{" "}
            <span className="font-extrabold">tranquilidad</span> es un lujo que
            todos merecemos. Por esto, nos hemos dedicado a{" "}
            <span className="font-extrabold">redefinir</span> lo que significa
            este concepto.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 my-6 transition">
            <Link aria-label="Solicitá una cotización" href={"/cotizaciones"}>
              <MainButton
                ariaLabel="Solicitá una cotización"
                label="Solicitá una cotización"
              />
            </Link>
            <Link aria-label="Conocé sobre nosotros" href={"/about"}>
              <SecondaryButton
                ariaLabel="Conocé sobre nosotros"
                label="Conocé sobre nosotros"
              >
                <svg
                  className="fill-gray-500 w-6 h-6 md:inline hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </SecondaryButton>
            </Link>
          </div>
          <div className="pt-4 2xl:pt-8 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-4 max-w-[90%] md:max-w-[700px] lg:max-w-[900px] xl:max-w-full mx-auto"
            >
              {[
                { src: "/images/Hikvision_Logo.webp", alt: "Logotipo de Hikvision", width: 90 },
                { src: "/images/Dahua_Logo.webp", alt: "Logotipo de Dahua", width: 65 },
                { src: "/images/Uniview_Logo.webp", alt: "Logotipo de Uniview", width: 70 },
                { src: "/images/ZKTeco_Logo.webp", alt: "Logotipo de ZKTeco", width:70 },
                { src: "/images/Cygnus_Logo.webp", alt: "Logotipo de Cygnus", width:70 },
              ].map((logo, index) => (
                <motion.div
                  key={logo.alt}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + index * 0.05 }}
                  className="flex items-center min-h-[12px] md:min-h-[32px] max-h-[40px] sm:max-h-[24px] overflow-hidden"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={40}
                    className="object-contain h-full w-auto lt:filter invert"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <BentoGrid />
      </motion.div>
    </section>
  );
};

export default Hero;
