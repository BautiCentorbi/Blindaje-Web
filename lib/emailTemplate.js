const BRAND_COLOR = "#ef781d";
const TEXT_COLOR = "#1f2328";
const MUTED_COLOR = "#6b7280";
const BORDER_COLOR = "#e5e7eb";
const BG_COLOR = "#f4f4f5";
const LOGO_URL = "https://blindaje.com.ar/images/email/Imagotipo_Blindaje_White.png";

/**
 * Arma el HTML de un mail transaccional con la identidad de Blindaje.
 * Usa estilos inline y layout de tablas a propósito, para que se vea
 * bien en la mayor cantidad posible de clientes de correo (Gmail,
 * Outlook, Apple Mail, etc.), que no soportan CSS moderno.
 *
 * @param {Object} opts
 * @param {string} opts.eyebrow - Texto chico arriba del título (ej. "Nuevo mensaje").
 * @param {string} opts.heading - Título principal del mail.
 * @param {string} [opts.intro] - Párrafo de introducción (ya sanitizado si viene de un form).
 * @param {{label: string, value: string}[]} [opts.rows] - Datos en formato tabla (Nombre, Email, etc.).
 * @param {{label: string, value: string}} [opts.messageBlock] - Bloque de texto largo (ej. el mensaje del form).
 * @param {{label: string, href: string}} [opts.cta] - Botón de acción opcional.
 * @param {string} [opts.footerNote] - Nota chica al pie, debajo de los datos de contacto.
 */
export function renderEmailLayout({
  eyebrow,
  heading,
  intro,
  rows = [],
  messageBlock,
  cta,
  footerNote,
}) {
  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid ${BORDER_COLOR};font-size:13px;color:${MUTED_COLOR};font-weight:600;text-transform:uppercase;letter-spacing:0.03em;white-space:nowrap;vertical-align:top;width:110px;">
            ${row.label}
          </td>
          <td style="padding:10px 0 10px 16px;border-bottom:1px solid ${BORDER_COLOR};font-size:15px;color:${TEXT_COLOR};">
            ${row.value}
          </td>
        </tr>`
    )
    .join("");

  const messageBlockHtml = messageBlock
    ? `
      <tr>
        <td style="padding-top:20px;">
          <p style="margin:0 0 6px;font-size:13px;color:${MUTED_COLOR};font-weight:600;text-transform:uppercase;letter-spacing:0.03em;">
            ${messageBlock.label}
          </p>
          <p style="margin:0;padding:14px 16px;background:${BG_COLOR};border-radius:10px;font-size:15px;line-height:1.6;color:${TEXT_COLOR};white-space:pre-wrap;">
            ${messageBlock.value}
          </p>
        </td>
      </tr>`
    : "";

  const ctaHtml = cta
    ? `
      <tr>
        <td style="padding-top:28px;">
          <a href="${cta.href}" target="_blank" style="display:inline-block;background:${BRAND_COLOR};color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;letter-spacing:0.02em;text-transform:uppercase;padding:14px 28px;border-radius:10px;">
            ${cta.label}
          </a>
        </td>
      </tr>`
    : "";

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${heading}</title>
  </head>
  <body style="margin:0;padding:0;background:${BG_COLOR};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG_COLOR};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BORDER_COLOR};">
            <tr>
              <td style="background:${BRAND_COLOR};padding:28px 32px;">
                <img
                  src="${LOGO_URL}"
                  width="220"
                  height="85"
                  alt="Blindaje — Seguridad Privada Integral"
                  style="display:block;width:220px;max-width:60%;height:auto;border:0;outline:none;text-decoration:none;"
                />
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      ${
                        eyebrow
                          ? `<p style="margin:0 0 8px;font-size:12px;font-weight:700;color:${BRAND_COLOR};text-transform:uppercase;letter-spacing:0.06em;">${eyebrow}</p>`
                          : ""
                      }
                      <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:${TEXT_COLOR};">
                        ${heading}
                      </h1>
                      ${
                        intro
                          ? `<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:${TEXT_COLOR};">${intro}</p>`
                          : ""
                      }
                    </td>
                  </tr>
                  ${
                    rowsHtml
                      ? `<tr><td><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table></td></tr>`
                      : ""
                  }
                  ${messageBlockHtml}
                  ${ctaHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:${BG_COLOR};border-top:1px solid ${BORDER_COLOR};">
                <p style="margin:0;font-size:12px;line-height:1.6;color:${MUTED_COLOR};">
                  ${footerNote || "Blindaje — Seguridad Privada Integral · Mendoza, Argentina"}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
