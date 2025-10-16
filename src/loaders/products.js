
// Loader que usa el servicio local de productos
import { getProducts } from '../services/product/index.js';

export async function productsLoader({ request } = {}) {
  try {
    const url = request ? new URL(request.url) : null;
    const q = url ? url.searchParams.get('q') : undefined;
    const category = url ? url.searchParams.get('category') : undefined;
    const minStr = url ? url.searchParams.get('minPrice') : undefined;
    const maxStr = url ? url.searchParams.get('maxPrice') : undefined;

    const minPrice = minStr !== null && minStr !== undefined && minStr !== '' ? Number(minStr) : undefined;
    const maxPrice = maxStr !== null && maxStr !== undefined && maxStr !== '' ? Number(maxStr) : undefined;

    const data = await getProducts({ q, category });

    // Filtro de rango de precios (si se provee)
    let filtered = Array.isArray(data) ? [...data] : [];
    if (Number.isFinite(minPrice)) {
      filtered = filtered.filter((p) => typeof p.price === 'number' && p.price >= minPrice);
    }
    if (Number.isFinite(maxPrice)) {
      filtered = filtered.filter((p) => typeof p.price === 'number' && p.price <= maxPrice);
    }

    // Normalizamos al shape esperado por la UI (title/image)
    const normalized = filtered.map((p) => ({
      ...p,
      title: p.title ?? p.name,
      image: p.image ?? p.thumbnail ?? null,
    }));
    return normalized;
  } catch (e) {
    console.error(e);
    return [];
  }
}
