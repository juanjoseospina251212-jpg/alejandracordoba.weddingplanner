export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { nombre, email, telefono, fecha, ubicacion, invitados, mensaje } = req.body;

    // Validación básica (mínimo esfuerzo digno)
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // Aquí recibes el lead
    const nuevoLead = {
      nombre,
      email,
      telefono,
      fecha,
      ubicacion,
      invitados,
      mensaje,
      fechaCreacion: new Date().toISOString()
    };

    // 🔥 De momento solo lo mostramos (pero YA está listo para escalar)
    console.log("Nuevo lead recibido:");
    console.log(nuevoLead);

    // Respuesta al frontend
    return res.status(200).json({
      success: true,
      message: "Lead recibido correctamente"
    });

  } catch (error) {
    console.error("Error en el servidor:", error);

    return res.status(500).json({
      success: false,
      error: "Error interno del servidor"
    });
  }
}
