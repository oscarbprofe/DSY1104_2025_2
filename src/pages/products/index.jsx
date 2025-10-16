import { useLoaderData } from "react-router"
import "./products.css"

export default function Products() {
  const productos = useLoaderData() ?? []

  return (
    <div>
      <h1>Productos</h1>
      {productos.length === 0 ? (
        <div className="loading-container">No hay productos para mostrar</div>
      ) : (
        <div className="products-grid">
          {productos.map((producto) => (
            <div key={producto.id ?? producto.title} className="product-card">
              {producto.image && (
                <img
                  src={producto.image}
                  alt={producto.title}
                  style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 12 }}
                />
              )}
              <h3>{producto.title}</h3>
              {typeof producto.price !== "undefined" && (
                <p className="product-price">Precio: ${producto.price}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

