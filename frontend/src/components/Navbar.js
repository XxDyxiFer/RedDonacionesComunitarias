import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/donar">Dar Donación</Link></li>
        <li><Link to="/requerir">Requerir Donación</Link></li>
      </ul>
    </nav>
  );
}
