import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/registro">Registrarse</Link></li>
      <li><Link to="/donaciones">Donaciones</Link></li>
    </ul>
  </nav>
);

export default Navbar;
