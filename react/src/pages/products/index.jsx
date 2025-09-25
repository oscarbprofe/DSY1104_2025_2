import { useLoaderData } from "react-router"
import "./products.css"

export default function Products() {
  const { productos } = useLoaderData()
  
  return (
    <div>
      <h1>Productos</h1>
      <div className="products-grid">
        {productos.map(producto => (
          <div key={producto.id} className="product-card">
            <h3>{producto.nombre}</h3>
            <p className="product-price">Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}