# Products Loader

Este documento explica cómo usar el loader de productos y qué comportamiento ofrece al integrarse con el servicio local que simula un backend.

## Resumen
- Origen de datos: `database/products.js` (ESM, `export default`).
- Service: `src/services/product/index.js` (simula latencia y filtros básicos en memoria).
- Loader: `src/loaders/products.js` (lee query params, usa el service y normaliza datos).

## Importación en rutas
```js
// src/routes.jsx
import { productsLoader } from './loaders/products';

const routes = [
  {
    path: '/products',
    loader: productsLoader,
    // element: <Products />
  }
];
```

## API del Loader
El loader acepta parámetros en la URL para filtrar resultados y devuelve un array de productos normalizados para la UI.

Parámetros de consulta soportados:
- `q`: texto a buscar en `name`/`description`/`category` (case‑insensitive).
- `category`: nombre exacto de la categoría (case‑insensitive).
- `minPrice`: precio mínimo (número).
- `maxPrice`: precio máximo (número).

Ejemplos de uso:
- `/products?q=galaxy`
- `/products?category=Smartphone&minPrice=500&maxPrice=1200`

## Forma de los datos devueltos
Cada producto es normalizado para asegurar la presencia de ciertas claves usadas por la UI:
- `title`: si no existe, se deriva de `name` del dataset.
- `image`: si no existe `thumbnail`, se usa `image` (o `null`).

Ejemplo de item devuelto:
```js
{
  id: 1,
  title: 'Smartphone Samsung Galaxy S23', // derivado de name
  name: 'Smartphone Samsung Galaxy S23',
  description: 'Pantalla AMOLED 6.1, cámara triple, 128GB almacenamiento',
  category: 'Smartphone',
  price: 899,
  stock: 15,
  image: 's23.jpg'
}
```

## Ejemplo de componente con filtros
El siguiente componente muestra cómo leer los productos del loader y controlar filtros desde la UI usando parámetros de la URL.

```jsx
// src/pages/products/FiltersExample.jsx
import { useState } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router';

export default function ProductsWithFilters() {
  const products = useLoaderData() ?? [];
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    q: searchParams.get('q') ?? '',
    category: searchParams.get('category') ?? '',
    minPrice: searchParams.get('minPrice') ?? '',
    maxPrice: searchParams.get('maxPrice') ?? ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (form.q) params.set('q', form.q);
    if (form.category) params.set('category', form.category);
    if (form.minPrice) params.set('minPrice', form.minPrice);
    if (form.maxPrice) params.set('maxPrice', form.maxPrice);
    navigate(`/products?${params.toString()}`);
  };

  return (
    <div>
      <h1>Productos</h1>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 600 }}>
        <input
          name="q"
          placeholder="Buscar..."
          value={form.q}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Categoría (p. ej. Smartphone)"
          value={form.category}
          onChange={handleChange}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            name="minPrice"
            type="number"
            placeholder="Precio mínimo"
            value={form.minPrice}
            onChange={handleChange}
          />
          <input
            name="maxPrice"
            type="number"
            placeholder="Precio máximo"
            value={form.maxPrice}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Aplicar filtros</button>
      </form>

      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12, marginTop: 16 }}>
        {products.map((p) => (
          <article key={p.id} className="product-card" style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
            <h3 style={{ margin: '4px 0' }}>{p.title}</h3>
            <p style={{ margin: 0 }}>Precio: ${p.price}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
```

Configuración de la ruta para usar el componente de ejemplo:

```js
// src/routes.jsx
import ProductsWithFilters from './pages/products/FiltersExample.jsx';
import { productsLoader } from './loaders/products';

export default [
  {
    path: '/products',
    element: <ProductsWithFilters />,
    loader: productsLoader,
  },
];
```

## Servicio subyacente
El loader delega en el service:
- Archivo: `src/services/product/index.js`
- Métodos usados: `getProducts({ q, category })`
- Comportamiento: simula latencia (~300ms), filtra por `q` y `category` y retorna una copia en memoria del dataset.

## Notas
- El dataset también está disponible como JSON en `database/products.json` para tooling o pruebas.
- Si agregas nuevos campos al dataset, el loader los propagará tal cual, manteniendo la normalización de `title` e `image`.
- Para filtros adicionales, se pueden extender tanto el service como el loader de forma similar a `minPrice`/`maxPrice`.
