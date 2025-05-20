import React from "react";
import * as motion from "motion/react-client";
import { Abril_Fatface } from "next/font/google";
import FocusSection from "./components/FocusSection.jsx";
import GoalsSection from "./components/GoalsSection.jsx";
const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const page = () => {
  return (
    <main className="relative min-h-screen py-40">
      <section className="flex flex-col items-center mx-80 gap-8" id="historia">
        <h1 className="text-7xl max-w-3xl text-center text-white">
          Elevando tu seguridad a un
          <span className={`${AbrilFatface.className} text-lt_primary`}>
            {" "}
            Nuevo Nivel
          </span>
        </h1>
        <hr className="border-gray-200 border-1 opacity-20 my-8 w-64" />
        <GoalsSection/>
        <FocusSection/>
        <iframe
            allowfullscreen="allowfullscreen"
            scrolling="no"
            className="px-60 fp-iframe border-1-black/20 w-full h-96 "
            src="https://heyzine.com/flip-book/fd930d6313.html"
          ></iframe>
      </section>
      <section></section>
    </main>
  );
};

export default page;
