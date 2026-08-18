"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Send } from "lucide-react";
import { useToast } from "@/app/components/ui/ToastProvider";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [mounted, setMounted] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef(null);
  const { showToast } = useToast();

  // Portal + carga diferida: el badge fijo del reCAPTCHA de Google
  // se rompe si un ancestro tiene "transform" (como los motion.div
  // de esta tarjeta), así que lo montamos directo en <body>. Y solo
  // lo cargamos cuando alguien interactúa con el campo, para no
  // sumarle el peso del script de Google a cada visita de la home.
  useEffect(() => setMounted(true), []);

  const ensureRecaptcha = () => {
    if (!recaptchaReady) setRecaptchaReady(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;
    setStatus("loading");

    try {
      if (!recaptchaRef.current) {
        // No debería pasar (el campo ya lo dispara al enfocarlo),
        // pero si pasa, lo montamos y le pedimos un reintento.
        ensureRecaptcha();
        throw new Error("Danos un segundo y volvé a intentar.");
      }
      const token = await recaptchaRef.current.executeAsync();
      const formData = new FormData();
      formData.append("email", email);
      formData.append("token", token);

      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.ok) {
        setStatus("success");
        showToast({
          message: result.alreadyRegistered
            ? "Ya estabas anotado en la lista de Blindaje Digital. Te vamos a avisar igual."
            : "¡Listo! Te avisamos por email cuando Blindaje Digital esté disponible.",
          type: "success",
        });
      } else {
        setStatus("idle");
        showToast({
          message: result.error || "No pudimos guardar tu email.",
          type: "error",
        });
      }
    } catch (error) {
      setStatus("idle");
      showToast({
        message:
          error?.message === "Danos un segundo y volvé a intentar."
            ? error.message
            : "No pudimos guardar tu email. Probá de nuevo en un momento.",
        type: "error",
      });
    } finally {
      recaptchaRef.current?.reset();
    }
  };

  if (status === "success") {
    return (
      <p className="mt-6 text-sm font-semibold text-white/90">
        ¡Listo! Te avisamos por email cuando esté disponible.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col sm:flex-row gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Tu email
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={ensureRecaptcha}
        placeholder="tu@email.com"
        className="flex-1 min-w-0 h-10 px-3 rounded-lg bg-white/15 placeholder-white/60 text-white text-sm ring-1 ring-white/30 focus:outline-none focus:ring-white/60"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Quiero enterarme cuando esté disponible"
        className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white/15 hover:bg-white/25 ring-1 ring-white/30 text-sm font-semibold uppercase tracking-wide transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Avisame"}
        <Send className="w-4 h-4" />
      </button>

      {mounted &&
        recaptchaReady &&
        createPortal(
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          />,
          document.body
        )}
    </form>
  );
};

export default WaitlistForm;
