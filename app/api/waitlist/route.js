import { Resend } from "resend";
import { NextResponse } from "next/server";

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    const email = formData.get("email");

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Ingresá un email válido." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Blindaje Digital <noreply@blindaje.com.ar>",
      to: process.env.RESEND_TO_SEGURIDAD,
      subject: "Nuevo interesado en Blindaje Digital",
      html: `
      <p>Un visitante del sitio quiere que le avisen cuando Blindaje Digital esté disponible.</p>
      <p><strong>Email:</strong> ${sanitize(email)}</p>
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
