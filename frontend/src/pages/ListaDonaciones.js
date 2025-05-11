import React, { useState } from 'react';
import RegistrarDonacion from './RegistrarDonacion';

function ListaDonaciones() {
  const [donaciones, setDonaciones] = useState([]);

  const agregarDonacion = (nueva) => {
    setDonaciones([...donaciones, { ...nueva, id: donaciones.length + 1 }]);
  };

  return (
    <div>
      <RegistrarDonacion onAgregar={agregarDonacion} />

      <h2>Donaciones Disponibles</h2>
      <table>
        <thead>
          <tr>
            <th>Objeto</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {donaciones.map((d) => (
            <tr key={d.id}>
              <td>{d.nombre}</td>
              <td>{d.descripcion}</td>
              <td>{d.categoria}</td>
              <td>{d.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaDonaciones;
