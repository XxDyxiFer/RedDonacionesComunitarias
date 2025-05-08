import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#ddd', padding: '1rem' }}>
      <Link to="/" style={{ margin: '0 1rem' }}>Inicio</Link>
      <Link to="/registro" style={{ margin: '0 1rem' }}>Registro</Link>
      <Link to="/donaciones" style={{ margin: '0 1rem' }}>Donaciones</Link>
    </nav>
  );
};

export default Navbar;
