
export default function Hero({ message }) {

    return (

        <section class="hero">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <h1>Tu Destino Gaming Definitivo</h1>
                    <p class="lead">{message}</p>
                    <div class="cta-buttons">
                        <a class="btn-primary" href="./productos.html">Explorar Productos</a>
                        <a class="btn-secondary" href="./productos.html?cat=OF">Ver Ofertas</a>
                    </div>
                </div>
                <div class="hero-visual" aria-hidden="true">
                    <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80"
                        alt="Interior de tienda gaming con luces LED y equipos gaming"
                        width="700" height="467" />
                </div>
            </div>
        </section>
    )
}