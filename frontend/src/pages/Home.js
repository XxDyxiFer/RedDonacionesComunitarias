import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Red de Donaciones Comunitarias</h1>
      <p>Conecta a quienes desean ayudar con quienes más lo necesitan.</p>
      <Link to="/registro">
        <button style={{ padding: '10px 20px', marginTop: '1rem' }}>
          Registrarse
        </button>
      </Link>
    </div>
  );
};

export default Home;
