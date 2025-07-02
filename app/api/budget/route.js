import { Resend } from "resend";
import { NextResponse } from "next/server";

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
    const asunto = formData.get("asunto");
    const mensaje = formData.get("mensaje");

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Formulario Blindaje <noreply@blindaje.com.ar>",
      to: process.env.RESEND_TO_SEGURIDAD,
      subject: `Nuevo mensaje: ${asunto}`,
      html: `
      <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
