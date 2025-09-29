import { useLoaderData } from "react-router"
import Button from 'react-bootstrap/Button';
import Hero from "../../components/home/Hero";

export default function Home() {
  const { message } = useLoaderData()
  
  return (
    <Hero message={message} />
  )
}