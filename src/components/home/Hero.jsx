
import { Link } from "react-router";

export default function Hero({ message }) {

    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <h1>Tu Destino Gaming Definitivo</h1>
                    <p className="lead">{message}</p>
                    <div className="cta-buttons">
                        <Link className="btn-primary" to="/productos">Explorar Productos</Link>
                        <Link className="btn-secondary" to="/productos?category=OF">Ver Ofertas</Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80"
                        alt="Interior de tienda gaming con luces LED y equipos gaming"
                        width="700" height="467" />
                </div>
            </div>
        </section>
    )
}
