import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import RegistroUsuario from './pages/RegistroUsuario';
import PerfilUsuario from './pages/PerfilUsuario';
import ListaDonaciones from './pages/ListaDonaciones';
import DetalleDonacion from './pages/DetalleDonacion';
import RegistrarDonacion from './pages/RegistrarDonacion';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/registro" element={<RegistroUsuario />} />
    <Route path="/perfil" element={<PerfilUsuario />} />
    <Route path="/donaciones" element={<ListaDonaciones />} />
    <Route path="/donacion/:id" element={<DetalleDonacion />} />
    <Route path="/registrar-donacion" element={<RegistrarDonacion />} />
  </Routes>
);

export default AppRoutes;
  