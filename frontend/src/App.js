// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './assets/styles/global.css'; // ✅ Importación corregida
import RegistroUsuario from './pages/RegistroUsuario';
import ListaDonaciones from './pages/ListaDonaciones'; // o Donaciones


function Home() {
  return (
    <div className="app-container">
      <h1>Red de Donaciones Comunitarias</h1>
      <p>Conecta a quienes desean ayudar con quienes más lo necesitan.</p>
      <Link to="/registro" className="btn-register">Registrarse</Link>
    </div>
  );
}

function App() {
  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/donaciones');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/donaciones">Donaciones</Link>
      </nav>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/registro" element={<RegistroUsuario />} />
  <Route path="/donaciones" element={<ListaDonaciones />} />
</Routes>

    </Router>
  );
}

export default App;
