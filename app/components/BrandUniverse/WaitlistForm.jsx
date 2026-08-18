"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Send } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;
    setStatus("loading");

    try {
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
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
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

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      />

      {status === "error" && (
        <p className="text-xs text-white/90 sm:w-full">
          No pudimos guardar tu email. Probá de nuevo en un momento.
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;
