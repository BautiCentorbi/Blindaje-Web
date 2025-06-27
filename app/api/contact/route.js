import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Buffer } from "buffer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const archivo = formData.get("archivo");

    // Validar reCAPTCHA
    const token = formData.get("token");
    console.log("TOKEN RECIBIDO:", token);
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

    console.log("Respuesta de Google CAPTCHA:", captchaRes); // <--- MOSTRÁ ESTO

    if (!captchaRes.success) {
      return NextResponse.json({ error: "Captcha inválido" }, { status: 400 });
    }

    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const asunto = formData.get("asunto");
    const mensaje = formData.get("mensaje");

    if (!archivo || typeof archivo.arrayBuffer !== "function") {
      return NextResponse.json(
        { error: "Archivo inválido o faltante" },
        { status: 400 }
      );
    }

    if (archivo.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Formato de archivo no permitido" },
        { status: 400 }
      );
    }

    if (archivo.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Archivo demasiado grande" },
        { status: 400 }
      );
    }

    const archivoBuffer = Buffer.from(await archivo.arrayBuffer());

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Enviando email con Resend...')

    const response = await resend.emails.send({
      from: "Formulario Blindaje <noreply@blindaje.com.ar>",
      to: process.env.RESENT_TO_RRHH,
      subject: `Nuevo mensaje: ${asunto}`,
      html: `
      <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
      attachments: [
        {
          filename: archivo.name,
          content: archivoBuffer.toString("base64"),
        },
      ],
    });

    console.log('Respuesta de resend:', response)

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log("Error en el servidor", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
