import { useLoaderData } from "react-router"

export default function Home() {
  const { message } = useLoaderData()
  
  return (
    <div>
      <h1>{message}</h1>
      <p>Explora nuestra selección de productos</p>
    </div>
  )
}