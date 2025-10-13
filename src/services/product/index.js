// Servicio de productos: simula un backend leyendo de la base local ESM
// Fuente de datos: /database/products.js (export default)

import products from '../../../database/products.js';

// Copia en memoria para simular un backend (evitamos mutar el import directamente)
const inMemory = Array.isArray(products) ? [...products] : [];

const delay = (ms = 300) => new Promise((res) => setTimeout(res, ms));

export async function getProducts({ q, category } = {}) {
  await delay();
  let data = [...inMemory];

  if (category) {
    const cat = String(category).toLowerCase();
    data = data.filter((p) => String(p.category || '').toLowerCase() === cat);
  }

  if (q) {
    const term = String(q).toLowerCase();
    data = data.filter((p) =>
      [p.name, p.description, p.category]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term))
    );
  }

  return data;
}

export async function getProductById(id) {
  await delay();
  const numId = typeof id === 'string' ? Number(id) : id;
  return inMemory.find((p) => p.id === numId) ?? null;
}

// Operaciones de escritura en memoria (opcionales)
export async function createProduct(product) {
  await delay();
  const nextId = inMemory.reduce((m, p) => Math.max(m, p.id || 0), 0) + 1;
  const nuevo = { id: nextId, ...product };
  inMemory.push(nuevo);
  return nuevo;
}

export async function updateProduct(id, updates) {
  await delay();
  const numId = typeof id === 'string' ? Number(id) : id;
  const idx = inMemory.findIndex((p) => p.id === numId);
  if (idx === -1) return null;
  inMemory[idx] = { ...inMemory[idx], ...updates };
  return inMemory[idx];
}

export async function deleteProduct(id) {
  await delay();
  const numId = typeof id === 'string' ? Number(id) : id;
  const idx = inMemory.findIndex((p) => p.id === numId);
  if (idx === -1) return false;
  inMemory.splice(idx, 1);
  return true;
}

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
