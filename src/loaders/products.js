
// Simulamos una lista de productos
const productos = [
  { id: 1, nombre: 'Producto 1', precio: 100 },
  { id: 2, nombre: 'Producto 2', precio: 200 },
  { id: 3, nombre: 'Producto 3', precio: 300 },
]

export async function productsLoader() {
  // Simulamos una llamada a API
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    return data.products;
  } catch (e) {
    console.error(e);
    return [];
  }
}