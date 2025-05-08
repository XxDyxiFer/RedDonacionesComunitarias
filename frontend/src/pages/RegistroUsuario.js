import React, { useState } from 'react';

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos registrados:', formData);
    alert('Usuario registrado (simulado)');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input type="text" name="nombre" onChange={handleChange} required />
        </div>
        <div>
          <label>Correo:</label><br />
          <input type="email" name="correo" onChange={handleChange} required />
        </div>
        <div>
          <label>Contraseña:</label><br />
          <input type="password" name="contraseña" onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Registrarse</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
