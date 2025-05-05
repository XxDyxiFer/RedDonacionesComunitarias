const API_URL = "http://localhost:8080/api/usuarios"; //modificar

export async function obtenerUsuarios() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function crearUsuario(usuario) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return response.json();
}
