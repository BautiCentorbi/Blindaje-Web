import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./components/ContactForm.jsx";
import { Linkedin, LinkedinIcon, MailIcon } from "lucide-react";

export default function Contact() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:px-18 lg:px-24 xl:48 md:py-12">
      <ContactForm />
      <article className="flex flex-col pb-12 md:py-12 2xl:py-28 mx-6 gap-6 md:gap-4 2xl:gap-6">
        <h1 className="text-center text-3xl md:text-4xl 2xl:text-5xl font-extrabold mb-2 md:mb-6">
          Contactanos
        </h1>
        <div className="flex flex-col shadow-xl shadow-black/15 bg-white dk:text-white rounded-lg p-4 md:p-6 2xl:p-8 gap-4">
          <FaWhatsapp className="w-10 h-10 md:w-8 md:h-8 2xl:w-10 2xl:h-10 fill-green-600" />
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Nuestros Whatsapp:</h3>
            <div className="flex gap-2 mb-2">
              <a
                href="https://wa.me/5492613833783"
                className="text-green-600 font-bold"
              >
                +54 9 261 383 3783
              </a>
            </div>
            <div className="flex gap-2 mb-2">
              <a
                href="https://wa.me/5492612062425"
                className="text-green-600 font-bold"
              >
                +54 9 261 206 2425
              </a>{" "}
            </div>
            <div className="flex gap-2">
              <a
                href="https://wa.me/5492634598916"
                className="text-green-600 font-bold"
              >
                +54 9 263 459 8916
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-xl shadow-black/15 bg-white dk:text-white rounded-lg p-4 md:p-6 2xl:p-8 gap-4">
          <MailIcon className="w-10 h-10 md:w-8 md:h-8 2xl:w-10 2xl:h-10 text-dk_primary" />
          <div>
            <h3 className="text-xl font-bold">Correo Electrónico:</h3>
            <a
              href="mailto:seguridad@blindaje.com.ar"
              className="text-dk_primary font-bold"
            >
              seguridad@blindaje.com.ar
            </a>
          </div>
        </div>
        <div className="flex flex-col shadow-xl shadow-black/15 bg-white dk:text-white rounded-lg p-4 md:p-6 2xl:p-8 gap-4">
          <FaLinkedinIn className="w-10 h-10 md:w-8 md:h-8 2xl:w-10 2xl:h-10 fill-blue-600" />
          <div>
            <h3 className="text-xl font-bold">Nuestro Linkedin:</h3>
            <a
              href="https://wa.me/5491122345678"
              className="text-blue-600 font-bold"
            >
              Blindaje - Seguridad Privada
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
