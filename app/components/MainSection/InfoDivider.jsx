import React from "react";
import * as motion from "motion/react-client";
import { Settings, ShieldCheck, MapPinCheck, Handshake } from "lucide-react";

const icons = [Settings, MapPinCheck, ShieldCheck, Handshake];

const InfoDivider = () => {
  const items = [
    {
      icon: Settings,
      title: "Cobertura Total",
      desc: "Presencia operativa en toda la provincia de Mendoza.",
    },
    {
      icon: MapPinCheck,
      title: "Zonas Críticas",
      desc: "Intervención rápida y eficaz donde más se necesita.",
    },
    {
      icon: ShieldCheck,
      title: "Tecnología de Punta",
      desc: "Sistemas modernos de monitoreo y detección.",
    },
    {
      icon: Handshake,
      title: "Atención Humana",
      desc: "Trato directo, claro y cercano.",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 2xl:mb-12 pb-20 max-w-7xl mx-auto px-2 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group flex flex-col items-center justify-center bg-gray-200 p-6 rounded-xl shadow transition-all duration-300"
          >
            <Icon
              className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12 text-gray-700 group-hover:text-dk_primary transition-colors duration-300"
            />
            <h3 className="text-lg 2xl:text-xl font-bold mt-4 uppercase">
              {item.title}
            </h3>
            <p className="text-sm 2xl:text-lg text-black/80">{item.desc}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default InfoDivider;
