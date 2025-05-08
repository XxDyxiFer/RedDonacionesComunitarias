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
<div className="hero-section">
  <h1>¡Transforma vidas donando lo que ya no usas!</h1>
  <p>Conectamos donantes con comunidades necesitadas en Perú</p>
  <button className="btn-donar">Publicar Donación</button>
</div>
export default Home;
