// routes.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegistroUsuario from './pages/RegistroUsuario';
import PerfilUsuario from './pages/PerfilUsuario';
import ListaDonaciones from './pages/ListaDonaciones';
import DetalleDonacion from './pages/DetalleDonacion';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/registro" element={<RegistroUsuario />} />
    <Route path="/perfil" element={<PerfilUsuario />} />
    <Route path="/donaciones" element={<ListaDonaciones />} />
    <Route path="/donacion/:id" element={<DetalleDonacion />} />
  </Routes>
);

export default AppRoutes;
