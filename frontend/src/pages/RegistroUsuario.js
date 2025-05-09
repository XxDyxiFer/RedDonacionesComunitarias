// RegistroUsuario.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Necesitas instalar axios si no lo has hecho

function RegistroUsuario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/usuarios/registro', {
        nombre,
        correo,
        contrasena
      });

      if (response.status === 201 || response.status === 200) {
        alert('Registro exitoso');
        navigate('/perfil'); // Redirige al perfil después del registro
      } else {
        alert('Error al registrar usuario');
      }
    } catch (error) {
      console.error(error);
      alert('Error en el servidor o datos inválidos');
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegistro}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        
        <label>Correo:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        
        <label>Contraseña:</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
        
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistroUsuario;
