// app/components/footers/NAP.tsx
export default function NAP() {
  return (
    <section
      className="grid gap-2 text-sm text-gray-400"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Blindaje — Seguridad Privada Integral" />
      <p itemProp="brand" className="font-medium text-neutral-100 text-center">
        Blindaje — Seguridad Privada Integral
      </p>
      <div className="flex gap-4 items-center justify-center">
        <p>
          <a
            href="tel:+54261XXXXXXX"
            itemProp="telephone"
            className="underline"
          >
            +54 261-383-3783
          </a>
          {"  "}·{"  "}
          <a
            href="https://wa.me/542613833783?text=Hola%20Blindaje%2C%20quisiera%20hacer%20una%20consulta%20sobre%20seguridad%20privada."
            target="_blank"
            rel="noopener"
            className="underline"
          >
            WhatsApp
          </a>
        </p>

        <p>
          <a
            href="mailto:contacto@blindaje.com.ar"
            itemProp="email"
            className="underline"
          >
            contacto@blindaje.com.ar
          </a>
        </p>
      </div>
      <p>
        Godoy Cruz · Guaymallén · Luján de Cuyo · Maipú · Gran Mendoza · San
        Martín · Junín · Rivadavia
      </p>
    </section>
  );
}
