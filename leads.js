export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  console.log("Nuevo mensaje:", { nombre, email, mensaje });

  return res.status(200).json({ success: true });
}
