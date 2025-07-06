import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Buffer } from "buffer";
import { validateFormFields } from "@/lib/valideteFormFields.js";
import { validateFormFile } from "@/lib/validateFile.js";

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
    const asunto = formData.get("asunto");
    const mensaje = formData.get("mensaje");

    const error = validateFormFields({ nombre, apellido, asunto, mensaje });
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
      html: `
      <p><strong>Nombre:</strong> ${sanitize(nombre)} ${sanitize(apellido)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${sanitize(mensaje)}</p>
    `,
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
