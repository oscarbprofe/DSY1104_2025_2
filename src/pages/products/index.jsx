import { useState, useEffect } from "react";
import { useLoaderData } from "react-router"
import "./products.css"

export default function Products() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosFromServer = useLoaderData()
    setProductos(productosFromServer)
  }, [])   // Este useEffect se ejecuta solo una vez al montar el componente

  useEffect(() => {
    const productosFromServer = useLoaderData()
    setProductos(productosFromServer)
  })   // Este useEffect se ejecuta en cada renderizado

  useEffect(() => {
    const productosFromServer = useLoaderData()
    setProductos(productosFromServer)
  }, [productos])   // Este useEffect se ejecuta cada vez que cambia productos

  useEffect(() => {
  // Código al montar

  return () => {
    // Código al desmontar (cleanup)
    console.log("Componente desmontado");
  };
}, []);

  console.log(productos);
  return (
    <div>
      <h1>Productos</h1>
      <div className="products-grid">
        {productos.map(producto => (
          <div key={producto.id} className="product-card">
            <h3>{producto.title}</h3>
            <p className="product-price">Precio: ${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}