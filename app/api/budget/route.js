import { Resend } from "resend";
import { NextResponse } from "next/server";
import { validateFormFields } from "@/lib/valideteFormFields.js";
import { renderEmailLayout } from "@/lib/emailTemplate.js";

function sanitize(input) {
  return input.replace(/[<>&'"]/g, (c) => {
    return {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&#39;",
      '"': "&quot;",
    }[c];
  });
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Validar reCAPTCHA
    const token = formData.get("token");
    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_PRIVATE_KEY,
          response: token,
        }),
      }
    ).then((res) => res.json());

    if (!captchaRes.success) {
      return NextResponse.json({ error: "Captcha inválido" }, { status: 400 });
    }

    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const tipoCliente = formData.get("tipo_cliente");
    const asunto = formData.get("asunto");
    const mensaje = formData.get("mensaje");

    const error = validateFormFields({ nombre, apellido, email, asunto, mensaje });
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Cotización Blindaje <noreply@blindaje.com.ar>",
      to: process.env.RESEND_TO_SEGURIDAD,
      subject: `${asunto}`,
      html: renderEmailLayout({
        eyebrow: "Nueva solicitud de cotización",
        heading: "Alguien quiere pedir presupuesto 💬",
        intro: "Llegó una nueva consulta desde el formulario de cotización del sitio.",
        rows: [
          { label: "Nombre", value: `${sanitize(nombre)} ${sanitize(apellido)}` },
          { label: "Email", value: `<a href="mailto:${sanitize(email)}" style="color:#ef781d;text-decoration:none;">${sanitize(email)}</a>` },
          { label: "Teléfono", value: sanitize(telefono) },
          { label: "Tipo de cliente", value: sanitize(tipoCliente || "No especificado") },
          { label: "Asunto", value: sanitize(asunto) },
        ],
        messageBlock: { label: "Mensaje", value: sanitize(mensaje) },
        cta: { label: "Responder por email", href: `mailto:${sanitize(email)}` },
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
