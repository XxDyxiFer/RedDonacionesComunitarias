<form className="form-donacion">
  <label>Nombre del Objeto*</label>
  <input type="text" required />

  <label>Categoría*</label>
  <select required>
    <option>Alimentos</option>
    <option>Ropa</option>
    <option>Útiles Escolares</option>
  </select>

  <label>Descripción*</label>
  <textarea required></textarea>

  <label>Fecha de Disponibilidad*</label>
  <input type="date" required />

  <button type="submit">Publicar Donación</button>
</form>