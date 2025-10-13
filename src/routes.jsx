import { createBrowserRouter } from 'react-router'
import Root from './pages/root'
import Home from './pages/home/index'
import Products from './pages/products/index'
import { productsLoader } from './loaders/products'
import { homeLoader } from './loaders/home'
import NewProduct from './pages/products/NewProduct'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,  // Esta será nuestra ruta principal "/"
        Component: Home,
        loader: homeLoader,
      },
      {
        path: "productos",
        children: [
          {
            index: true,  // Esta será "/productos"
            Component: Products,
            loader: productsLoader,
          },
          {
            path:"nuevo",
            Component: NewProduct,
          },
          {
            path: ":id",  // Esta será "/productos/:id"
            Component: null, // Todavía no implementado
            loader: null,   // Todavía no implementado
          }
        ]
      }
    ]
  }
])