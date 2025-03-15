"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="bg-parallax bg-cover flex flex-col h-screen w-full justify-center items-center gap-16">
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Image
                src={"/images/BN_Logo_Blindaje_Completo.svg"}
                height={180}
                width={980}
                alt="Logo de Blindaje"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{type: "spring", ease: "easeInOut", delay: 1, duration: 0.5 }}
              className="max-w-[900px] flex flex-col gap-8"
            >
              <h1 className="w-full text-2xl text-center">
                En Blindaje, ofrecemos servicios de seguridad integral con
                tecnología de punta, cubriendo seguridad física, electrónica,
                análisis de riesgos y asesorías profesionales
              </h1>
              <div className="w-full flex gap-4 justify-end">
                <Link href={"/about"}>
                  <Button size="lg" color="background" variant="bordered">
                    Nuestra Historia
                  </Button>
                </Link>
                <Link href={"/contact"}>
                  <Button
                    className="font-medium"
                    size="lg"
                    color="primary"
                    variant="solid"
                  >
                    Contacta con Nosotros
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
