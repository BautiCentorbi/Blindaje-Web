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

    // Guarda el contacto en la Audience de Resend, para poder
    // enviarle la campaña de lanzamiento más adelante. Usa una API
    // key separada (con permiso de Audience/Contacts) porque
    // RESEND_API_KEY está restringida a solo enviar emails. La API
    // no lanza excepción en errores: devuelve { data, error }, y
    // "create" hace upsert silencioso (no avisa si ya existía), por
    // eso chequeamos con "get" antes de crear.
    let alreadyRegistered = false;
    if (process.env.RESEND_WAITLIST_API_KEY && process.env.RESEND_WAITLIST_AUDIENCE_ID) {
      const resendContacts = new Resend(process.env.RESEND_WAITLIST_API_KEY);
      const audienceId = process.env.RESEND_WAITLIST_AUDIENCE_ID;

      const { data: existing } = await resendContacts.contacts.get({
        audienceId,
        email,
      });
      alreadyRegistered = Boolean(existing);

      if (!alreadyRegistered) {
        const { error: contactError } = await resendContacts.contacts.create({
          email,
          unsubscribed: false,
          audienceId,
        });

        if (contactError) {
          return NextResponse.json(
            { error: "No pudimos guardar tu email." },
            { status: 500 }
          );
        }
      }
    }

    // Solo mandamos mails en el alta nueva: ni la notificación interna
    // ni la confirmación al interesado deben repetirse en reintentos
    // con el mismo email.
    if (!alreadyRegistered) {
      await resend.emails.send({
        from: "Blindaje Digital <noreply@blindaje.com.ar>",
        to: process.env.RESEND_TO_SEGURIDAD,
        subject: "Nuevo interesado en Blindaje Digital",
        html: `
        <p>Un visitante del sitio quiere que le avisen cuando Blindaje Digital esté disponible.</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
      `,
      });

      await resend.emails.send({
        from: "Blindaje Digital <noreply@blindaje.com.ar>",
        to: email,
        subject: "Te anotamos en la lista de Blindaje Digital",
        html: `
        <p>¡Gracias por tu interés en Blindaje Digital!</p>
        <p>Quedaste anotado en nuestra lista de espera. Te vamos a avisar por este mismo email en cuanto la plataforma esté disponible.</p>
        <p>— Equipo Blindaje</p>
      `,
      });
    }

    return NextResponse.json({ ok: true, alreadyRegistered });
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
