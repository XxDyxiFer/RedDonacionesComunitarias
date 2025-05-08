import React, { useState } from "react";
import { crearUsuario } from "../services/UsuarioService";

const FormularioCrearUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoUsuario = await crearUsuario(usuario);
      console.log("Usuario creado:", nuevoUsuario);
      alert("Usuario registrado con éxito");
      setUsuario({ nombre: "", correo: "" }); // limpiar
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={usuario.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo"
        value={usuario.correo}
        onChange={handleChange}
        required
      />
      <button type="submit">Registrar Usuario</button>
    </form>
  );
};

export default FormularioCrearUsuario;
