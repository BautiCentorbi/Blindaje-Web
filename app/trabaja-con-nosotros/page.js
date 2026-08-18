import ContactForm from "./components/ContactForm.jsx";

export const metadata = {
  title: "Trabajá con nosotros",
  description:
    "Sumate al equipo de Blindaje. Postulate a nuestras búsquedas laborales en seguridad privada en Mendoza y dejanos tus datos y tu CV.",
  keywords: [
    "Trabajá con nosotros Blindaje",
    "Empleo seguridad privada Mendoza",
    "Búsqueda laboral guardias Mendoza",
    "Sumate al equipo Blindaje",
    "Blindaje Mendoza",
  ],
  openGraph: {
    title: "Trabajá con nosotros | Blindaje",
    description:
      "Sumate al equipo de Blindaje. Postulate a nuestras búsquedas laborales en seguridad privada en Mendoza.",
    url: "https://blindaje.com.ar/trabaja-con-nosotros",
    siteName: "Blindaje",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trabajá con nosotros en Blindaje",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trabajá con nosotros | Blindaje",
    description:
      "Postulate a nuestras búsquedas laborales en seguridad privada en Mendoza.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TrabajaConNosotros() {
  return (
    <section className="flex items-center justify-center md:px-18 lg:px-24 xl:48 md:py-12">
      <ContactForm />
    </section>
  );
}
