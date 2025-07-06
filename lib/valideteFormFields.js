export function validateFormFields({ nombre, apellido, asunto, mensaje }) {
  if (!nombre || !apellido || !asunto || !mensaje) {
    return "Todos los campos son obligatorios.";
  }

  const campos = [nombre, apellido, asunto, mensaje];
  const tieneHTML = campos.some((campo) =>
    /<[^>]*>/.test(campo)
  );

  if (tieneHTML) return "El contenido no puede tener etiquetas HTML.";

  return null;
}
