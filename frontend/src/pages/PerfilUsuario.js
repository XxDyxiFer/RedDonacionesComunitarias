import React, { useEffect, useState } from "react";
import { obtenerUsuarios, crearUsuario } from "../services/UsuarioService";

const PerfilUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioNuevo, setUsuarioNuevo] = useState({ nombre: "", correo: "" });

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const data = await obtenerUsuarios();
    setUsuarios(data);
  };

  const handleChange = (e) => {
    setUsuarioNuevo({ ...usuarioNuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearUsuario(usuarioNuevo);
    setUsuarioNuevo({ nombre: "", correo: "" });
    cargarUsuarios(); // actualiza la lista
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          value={usuarioNuevo.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          name="correo"
          value={usuarioNuevo.correo}
          onChange={handleChange}
          placeholder="Correo"
        />
        <button type="submit">Registrar</button>
      </form>

      <h2>Usuarios Registrados</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.correo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfilUsuario;
