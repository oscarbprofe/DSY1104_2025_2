import { useLoaderData } from "react-router"
import "./products.css"

export default function Products() {
  const productos = useLoaderData()

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