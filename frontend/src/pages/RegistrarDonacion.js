// src/pages/RegistrarDonacion.js
import React, { useState } from "react";

const RegistrarDonacion = ({ onAgregar }) => {
  const [donacion, setDonacion] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    estado: "Disponible"
  });

  const handleChange = (e) => {
    setDonacion({ ...donacion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(donacion); // lo pasamos al padre
    setDonacion({ nombre: "", descripcion: "", categoria: "", estado: "Disponible" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Donación</h2>
      <input name="nombre" placeholder="Nombre" value={donacion.nombre} onChange={handleChange} />
      <input name="descripcion" placeholder="Descripción" value={donacion.descripcion} onChange={handleChange} />
      <input name="categoria" placeholder="Categoría" value={donacion.categoria} onChange={handleChange} />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default RegistrarDonacion;
