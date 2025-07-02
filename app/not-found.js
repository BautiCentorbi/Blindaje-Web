'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-background dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full"
      >
        <div className="w-full h-64 relative mb-8">
          <Image
            src="/images/404-illustration.svg"
            alt="Página no encontrada"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-dk_primary">
          404 - Página no encontrada
        </h1>

        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Lo sentimos, no pudimos encontrar la página que estás buscando. <br />
          Es posible que haya sido movida o eliminada.
        </p>

        <Link
          href="/"
          aria-label="Volver al inicio"
          className="inline-flex items-center gap-2 bg-dk_primary hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all"
        >
          <ArrowLeft size={18} /> Volver al inicio
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;