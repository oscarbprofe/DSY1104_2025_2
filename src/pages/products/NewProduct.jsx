import React, { useState } from 'react';

export default function NewProduct() {
  const [form, setForm] = useState({
    title: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar el producto a tu backend o mostrarlo en consola
    alert(`Producto creado: ${form.title}, Precio: ${form.price}, Categoría: ${form.category}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Crear nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nombre:</label><br />
          <input name="title" value={form.title} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Precio:</label><br />
          <input name="price" type="number" value={form.price} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Categoría:</label><br />
          <input name="category" value={form.category} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        <button type="submit">Crear producto</button>
      </form>
    </div>
  );
}
