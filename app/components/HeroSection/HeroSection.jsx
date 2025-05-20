"use client";
import Image from "next/image";
import BentoGrid from "./BentoGrid";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-full md:h-screen dark:text-white text-black flex items-center justify-center py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">
        {/* Izquierda - Texto */}
        <div className="space-y-6">
          <h1 className="flex flex-col text-xl md:text-4xl leading-tight">
            Redefinimos lo que significa
            <span className="mt-2 md:mt-4 uppercase font-extrabold text-4xl md:text-7xl text-dk_primary">
              Protección
              <br /> personalizada
            </span>
          </h1>
          <p className="pt-2 md:pt-12 text-lg dark:text-gray-400 text-gray-600 max-w-lg">
            En un mundo que avanza a toda velocidad, la{" "}
            <span className="font-extrabold">tranquilidad</span> es un lujo que
            todos merecemos. Por esto, nos hemos dedicado a{" "}
            <span className="font-extrabold">redefinir</span> lo que significa
            este concepto.
          </p>
          <div className="flex flex-col md:flex-row gap-4 transition">
            <Link href={"/contact"}>
              <button className="shadow-xl shadow-dk_primary/20 w-full bg-dk_primary dark:text-black text-white px-6 py-3 text-sm md:text-lg rounded-xl font-semibold hover:bg-dk_primary/80 transition">
                Solicitá una cotización
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="shadow-lg shadow-dark/10 w-full px-6 py-3 text-sm md:text-lg rounded-xl dark:hover:bg-gray-800 hover:bg-gray-100 transition">
                Conocé sobre nosotros
                <svg
                  className="fill-gray-500 w-6 h-6 md:inline hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="pt-4 md:pt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <div className="max-h-12 sm:max-h-4">
              <Image
                src="/images/Hikvision_Logo.png"
                alt="Hikvision"
                width={100}
                height={40}
                className="h-fill w-auto object-contain lt:filter invert items-center justify-center"
              />
            </div>
            <div className="max-h-12 sm:max-h-4 items-center justify-center">
              <Image
                src="/images/Dahua_Logo.png"
                alt="Logo 2"
                width={90}
                height={40}
                className="h-fill w-auto object-contain lt:filter invert items-center justify-center"
              />
            </div>
            <div className="max-h- sm:max-h-4 items-center justify-center">
              <Image
                src="/images/UniView_Logo.png"
                alt="Uniview"
                width={90}
                height={40}
                className="h-fill w-auto object-contain lt:filter invert items-center justify-center"
              />
            </div>
          </div>
        </div>
        <BentoGrid />
      </div>
    </section>
  );
};

export default Hero;
