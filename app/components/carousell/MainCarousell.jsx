"use client";
import { images } from "@/app/constants/Images";
import Image from "next/image";
import React, { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageVariants = {
  enter: { opacity: 0, scale: 0.98, x: 50 },
  center: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.98, x: -50 },
};

const MainCarousell = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-full h-96 md:h-[450px] 2xl:h-[600px] overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Suspense fallback={<div>Cargando...</div>}>
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].description}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicadores: ahora están FUERA de la imagen */}
      <div className="mt-4 flex gap-2 h-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeImage
                ? "bg-dk_primary scale-110 shadow-md"
                : "bg-gray-400/40 hover:bg-gray-500/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousell;
