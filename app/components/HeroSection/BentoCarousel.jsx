import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { id: 1, title: "Detectamos", image: "/images/Modus_Operandi-1.svg" },
  { id: 2, title: "Prevenimos", image: "/images/Modus_Operandi-2.svg" },
  { id: 3, title: "Solucionamos", image: "/images/Modus_Operandi-3.svg" },
];

export default function CarouselBento() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden rounded-2xl relative p-4 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
