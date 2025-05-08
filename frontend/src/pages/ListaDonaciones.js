<div className="donaciones-container">
  <div className="filtros">
    <select>
      <option>Categoría (Alimentos, Ropa, etc.)</option>
    </select>
    <input type="text" placeholder="Buscar por nombre..." />
  </div>
  <table className="tabla-donaciones">
    <thead>
      <tr>
        <th>Objeto</th>
        <th>Descripción</th>
        <th>Categoría</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {donaciones.map((donacion) => (
        <tr key={donacion.id}>
          <td>{donacion.nombre}</td>
          <td>{donacion.descripcion}</td>
          <td>{donacion.categoria}</td>
          <td>{donacion.estado}</td>
          <td><button className="btn-solicitar">Solicitar</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>