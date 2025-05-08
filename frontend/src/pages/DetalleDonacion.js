import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleDonacion() {
  const { id } = useParams();
  
  // Datos de ejemplo ( reemplazar con datos reales backend)
  const donacion = {
    id: 1,
    nombre: "Caja de alimentos",
    descripcion: "Contiene arroz, frijoles y aceite",
    categoria: "Alimentos",
    estado: "Disponible",
    fechaExpiracion: "2023-12-31"
  };

  return (
    <div className="detalle-donacion">
      <h2>{donacion.nombre}</h2>
      <p><strong>Categoría:</strong> {donacion.categoria}</p>
      <p><strong>Descripción:</strong> {donacion.descripcion}</p>
      <p><strong>Disponible hasta:</strong> {donacion.fechaExpiracion}</p>
      <button className="btn-solicitar">Solicitar este artículo</button>
    </div>
  );
}

export default DetalleDonacion;