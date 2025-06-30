"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CarouselBento from "./BentoCarousel.jsx";
import { ShieldCheck, Users, Eye, Headphones, Instagram, Linkedin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const bentoItems = [
  {
    id: 1,
    className: "col-span-6 row-span-3 shadow-md shadow-black/15",
    content: (
      <div className="flex flex-col justify-end md:justify-start h-full p-8 gap-4 2xl:gap-12 text-white bg-[#222222] rounded-2xl">
        <ShieldCheck className="w-12 md:w-18 2xl:w-24 h-12 md:h-18 2xl:h-24" />
        <div>
            <h2 className="text-xl md:text-2xl font-black">
            Servicio de seguridad integral
            </h2>
            <p className="text-md md:text-lg">
            Combinamos años de experiencia en el sector, con un enfoque innovador que fusiona la mejor tecnología y el factor humano.
            </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    className: "col-span-6 md:col-span-3 row-span-2 md:row-span-3 shadow-xl shadow-black/15 bg-[#f2f4f2] dk:text-white",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center p-4 rounded-2xl">
        <CarouselBento />
      </div>
    ),
  },
  {
    id: 3,
    className: "col-span-6 md:col-span-3 row-span-2 bg-gray-800 text-white shadow-md shadow-black/20",
    content: (
      <div className="h-full w-full flex flex-col items-start justify-center p-4 rounded-2xl bg-[#666666]">
        <h2 className="text-2xl font-medium text-center ">
          Protección a medida para tu tranquilidad
        </h2>
      </div>
    ),
  },
  {
    id: 4,
    className: "col-span-2 md:col-span-1 row-span-3 md:row-span-1 bg-dk_primary text-white shadow-lg shadow-dk_primary/30",
    content: (
      <a
        href="https://wa.me/5492613833783"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full flex items-center justify-center rounded-2xl hover:bg-lt_primary transition-colors"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    ),
  },
  {
    id: 5,
    className:
      "col-span-2 md:col-span-1 row-span-3 md:row-span-1 bg-dk_primary text-white shadow-lg shadow-dk_primary/30",
    content: (
      <a
        href="https://instagram.com/blindaje_ar"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full flex items-center justify-center rounded-2xl hover:bg-lt_primary transition-opacity"
      >
        <Instagram className="w-6 h-6" />
      </a>
    ),
  },
  {
    id: 6,
    className: "col-span-2 md:col-span-1 row-span-3 md:row-span-1 bg-dk_primary text-white shadow-lg shadow-dk_primary/30",
    content: (
      <a
        href="https://linkedin.com/in/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full flex items-center justify-center rounded-2xl hover:bg-lt_primary transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="w-full h-full px-6 py-12 md:py-0">
      <motion.div
        className="grid grid-cols-6 grid-rows-6 gap-4 h-fit max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {bentoItems.map((item) => (
          <motion.div
            key={item.id}
            className={cn("rounded-2xl overflow-hidden", item.className)}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            {item.content}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
