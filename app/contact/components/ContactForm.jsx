"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Abril_Fatface } from "next/font/google";
import MainButton from "@/app/components/ui/MainButton";

const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const token = await recaptchaRef.current.executeAsync();
    formData.append("token", token);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.ok) {
        alert("Mensaje enviado correctamente.");
        e.target.reset();
      } else {
        alert(result.error || "Error al enviar.");
      }
    } catch (error) {
      alert("Error en el servidor.");
    } finally {
      recaptchaRef.current.reset();
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-12 2xl:py-28 px-4 sm:px-8 max-w-3xl mx-auto w-full">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-center text-4xl md:text-4xl 2xl:text-5xl font-extrabold mb-6`}
      >
        <span className={`${AbrilFatface.className}  text-dk_primary `}>
          Sumate{" "}
        </span>
        al equipo
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-6 gap-8"
      >
        <div className="flex flex-col gap-2 mb-4 md:mb-4 2xl:mb-4">
          <label className="text-sm font-semibold">Nombre</label>
          <input
            name="nombre"
            placeholder="Juan"
            required
            className="h-10 p-4 rounded-lg bg-gray-100"
          />
        </div>
        <div className="flex flex-col gap-2 mb- md:mb-2 2xl:mb-4">
          <label className="text-sm font-semibold">Apellido</label>
          <input
            name="apellido"
            placeholder="Doe"
            required
            className="h-10 p-4 rounded-lg bg-gray-100"
          />
        </div>

        <div className="flex flex-col gap-2 mb-4 md:mb-2 2xl:mb-4">
          <label className="text-sm font-semibold">Asunto</label>
          <input
            name="mensaje"
            placeholder="PUESTO: ..."
            required
            className="h-10 p-4 rounded-lg bg-gray-100"
          />
        </div>

        <div className="flex flex-col gap-2 mb-4 md:mb-2 2xl:mb-4">
          <label className="text-sm font-semibold">Mensaje</label>
          <textarea
            name="mensaje"
            placeholder="Quiero formar parte de Blindaje..."
            required
            rows="4"
            className="p-4 rounded-lg bg-gray-100"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">
            Adjuntar CV / archivo (PDF)
          </label>
          <input
            type="file"
            name="archivo"
            accept="application/pdf"
            required
            className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-1 file:border-dk_primary file:bg-gray-100 click:file:bg-dk_primary"
          />
        </div>
        <MainButton
          label={loading ? "Enviando..." : "Enviar →"}
          ariaLabel="Enviar el formulario"
        />
      </motion.form>

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      />
    </section>
  );
};

export default ContactForm;
