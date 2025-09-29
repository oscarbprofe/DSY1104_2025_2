import { NavLink, Outlet, useNavigation } from "react-router"

import "./root.css"
import NavBarRoot from "../components/root/NavBarRoot"

export default function Root() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  return (
    <div className="root-layout">
      <NavBarRoot />
      <main className="main-content">
        {isLoading ? (
          <div className="loading-container">
            <p>Cargando...</p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <footer>
        Soy el footer
      </footer>
    </div>
  )
}