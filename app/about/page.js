import React from "react";
import * as motion from "motion/react-client";
import { Abril_Fatface } from "next/font/google";
import FocusSection from "./components/FocusSection.jsx";
import GoalsSection from "./components/GoalsSection.jsx";
import DiferentiationSection from "./components/DiferentiationSection.jsx";
const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const page = () => {
  return (
    <main className="relative min-h-screen py-24 md:py-40 max-w-screen overflow-hidden">
      <section className="flex flex-col items-center mx-4 md:mx-40 md:gap-8" id="historia">
        <h1 className="text-3xl max-w-4xl md:text-7xl md:max-w-3xl text-center dk:text-white">
          Elevando tu seguridad<br className="md:hidden"/> a un
          <span className={`${AbrilFatface.className} text-dk_primary text-4xl md:text-7xl`}>
            {" "}
            Nuevo Nivel
          </span>
        </h1>
        <hr className="border-gray-600 border-1 opacity-20 my-8 w-36 md:w-64" />
        <GoalsSection/>
        <DiferentiationSection />
        <FocusSection/>
      </section>
      <section></section>
    </main>
  );
};

export default page;
