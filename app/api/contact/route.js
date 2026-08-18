import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Buffer } from "buffer";
import { validateFormFields } from "@/lib/valideteFormFields.js";
import { validateFormFile } from "@/lib/validateFile.js";
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
    const archivo = formData.get("archivo");

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
    const asunto = formData.get("asunto");
    const mensaje = formData.get("mensaje");

    const error = validateFormFields({ nombre, apellido, email, telefono, asunto, mensaje });
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const fileError = validateFormFile(archivo); // solo en contacto
    if (fileError) {
      return NextResponse.json({ error: fileError }, { status: 400 });
    }
    if (!archivo || typeof archivo.arrayBuffer !== "function") {
      return NextResponse.json(
        { error: "Archivo inválido o faltante" },
        { status: 400 }
      );
    }

    const archivoBuffer = Buffer.from(await archivo.arrayBuffer());

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Formulario Blindaje <noreply@blindaje.com.ar>",
      to: process.env.RESEND_TO_RRHH,
      subject: `${asunto}`,
      html: renderEmailLayout({
        eyebrow: "Nueva postulación",
        heading: "Alguien quiere sumarse al equipo 👋",
        intro: "Llegó una nueva postulación desde \"Trabajá con nosotros\". El CV va adjunto a este email.",
        rows: [
          { label: "Nombre", value: `${sanitize(nombre)} ${sanitize(apellido)}` },
          { label: "Email", value: `<a href="mailto:${sanitize(email)}" style="color:#ef781d;text-decoration:none;">${sanitize(email)}</a>` },
          { label: "Teléfono", value: sanitize(telefono) },
          { label: "Asunto", value: sanitize(asunto) },
        ],
        messageBlock: { label: "Mensaje", value: sanitize(mensaje) },
        cta: { label: "Responder por email", href: `mailto:${sanitize(email)}` },
      }),
      attachments: [
        {
          filename: archivo.name,
          content: archivoBuffer.toString("base64"),
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
