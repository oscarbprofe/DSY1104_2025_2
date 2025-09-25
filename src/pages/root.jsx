import { NavLink, Outlet, useNavigation } from "react-router"
import "./root.css"

export default function Root() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  return (
    <div className="root-layout">
      <nav className="root-nav">
        <NavLink 
          to="/" 
          end
          className={({ isActive, isPending }) =>
            `nav-link ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/productos" 
          end
          className={({ isActive, isPending }) =>
            `nav-link ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`
          }
        >
          Productos
        </NavLink>
      </nav>
      <main className="main-content">
        {isLoading ? (
          <div className="loading-container">
            <p>Cargando...</p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  )
}