export function validateFormFile(archivo) {
  if (!archivo || archivo.type !== "application/pdf") {
    return "Debe subir un archivo PDF válido.";
  }

  if (!archivo.name.endsWith(".pdf")) {
    return "El archivo debe tener extensión .pdf.";
  }

  if (archivo.size > 5 * 1024 * 1024) {
    return "El archivo es demasiado grande (máx 5MB).";
  }

  return null; // si todo está bien
}
