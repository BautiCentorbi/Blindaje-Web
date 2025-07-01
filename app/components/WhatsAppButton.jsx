import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/5492613833783?text=Hola%2C%20quisiera%20consultar%20por%20servicios%20de%20seguridad%20en%20mi%20empresa"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all"
    >
      <FaWhatsapp className="w-7 h-7" />
    </Link>
  );
};

export default WhatsAppButton;
