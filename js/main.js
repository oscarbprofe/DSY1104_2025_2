// Importar datos
import { CATEGORIES_LG } from './db/categorias.js';
import { PRODUCTS_LG } from './db/productos.js';
import { USUARIOS } from './db/usuarios.js';

// Función para inicializar datos en localStorage
function initializeLocalStorage() {
    try {
        // Forzar la inicialización de los datos
        console.log('Inicializando datos en localStorage...');

        localStorage.setItem('categorias', JSON.stringify(CATEGORIES_LG));
        console.log('Categorías guardadas:', CATEGORIES_LG.length);

        localStorage.setItem('productos', JSON.stringify(PRODUCTS_LG));
        console.log('Productos guardados:', PRODUCTS_LG.length);

        localStorage.setItem('usuarios', JSON.stringify(USUARIOS));
        console.log('Usuarios guardados:', USUARIOS.length);

        if (!localStorage.getItem('carrito')) {
            localStorage.setItem('carrito', JSON.stringify([]));
            console.log('Carrito inicializado');
        }

        console.log('Inicialización completada exitosamente');
    } catch (error) {
        console.error('Error al inicializar localStorage:', error);
    }
}

// Función para renderizar las categorías
function renderizarCategorias() {
    const tilesContainer = document.querySelector('.tiles');
    if (!tilesContainer) return;

    tilesContainer.innerHTML = CATEGORIES_LG.map(cat => `
        <li>
            <a class="tile" href="./productos.html?cat=${cat.id}">
                <div class="header-wrapper">
                    <div class="icon" aria-hidden="true">${cat.icono}</div>
                    <strong>${cat.nombre}</strong>
                </div>
                <span class="muted">${cat.descripcion}</span>
            </a>
        </li>
    `).join('');
}

// Función para renderizar productos destacados
function renderizarDestacados() {
    const featuredGrid = document.getElementById('featured-grid');
    if (!featuredGrid) return;

    const destacados = PRODUCTS_LG.filter(p => p.destacado);
    console.log(destacados)
    featuredGrid.innerHTML = destacados.map(prod => `
        <article class="card">
            <div class="thumb" aria-hidden="true">
            <img src="${prod.imagen}" alt="${prod.nombre}" />
            </div>
            <h3>${prod.nombre}</h3>
            <p class="muted">${prod.descripcion}</p>
            <div class="actions">
                <span class="price">$${prod.precio}</span>
                <button class="btn-outline" type="button" onclick="agregarAlCarrito(${prod.id})">Añadir</button>
            </div>
        </article>
    `).join('');
}

// Función para agregar al carrito
function agregarAlCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const producto = PRODUCTS_LG.find(p => p.id === idProducto);

    if (producto) {
        const itemExistente = carrito.find(item => item.id === idProducto);
        if (itemExistente) {
            itemExistente.cantidad++;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1
            });
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
    }
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById('cart-count');
    if (!contador) return;

    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    contador.textContent = total;
}

// Función para obtener datos actualizados
function getDatosFromLocalStorage() {
    return {
        categorias: JSON.parse(localStorage.getItem('categorias') || '[]'),
        productos: JSON.parse(localStorage.getItem('productos') || '[]'),
        usuarios: JSON.parse(localStorage.getItem('usuarios') || '[]')
    };
}

// Funcionalidad del selector de tema
function initThemeSelector() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const currentThemeSpan = document.getElementById('current-theme');
    const themeOptions = document.querySelectorAll('.theme-option');
    const html = document.documentElement;

    if (!themeToggle || !themeMenu) return; // Si el selector de tema está comentado, salir

    // Configuración de temas
    const themes = {
        huerto: 'Huerto Hogar',
        gamer: 'Level-Up Gamer',
        pasteleria: 'Pastelería'
    };

    // Obtener tema actual del localStorage o usar el por defecto
    let currentTheme = localStorage.getItem('selectedTheme') || 'pasteleria';

    // Función para aplicar el tema
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        if (currentThemeSpan) {
            currentThemeSpan.textContent = themes[theme];
        }

        themeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            }
        });

        localStorage.setItem('selectedTheme', theme);
        currentTheme = theme;
    }

    // Aplicar tema inicial
    applyTheme(currentTheme);

    // Toggle del menú de temas
    themeToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = themeMenu.classList.contains('show');
        themeMenu.classList.toggle('show');
        themeToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function (e) {
        if (!themeToggle.contains(e.target) && !themeMenu.contains(e.target)) {
            themeMenu.classList.remove('show');
            themeToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Selección de tema
    themeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedTheme = this.getAttribute('data-theme');
            applyTheme(selectedTheme);
            themeMenu.classList.remove('show');
            themeToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Teclado: ESC para cerrar el menú
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && themeMenu.classList.contains('show')) {
            themeMenu.classList.remove('show');
            themeToggle.setAttribute('aria-expanded', 'false');
            themeToggle.focus();
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Primero inicializamos el localStorage
    initializeLocalStorage();

    // Luego inicializamos todas las funcionalidades
    renderizarCategorias();
    renderizarDestacados();
    actualizarContadorCarrito();
    initThemeSelector();

    console.log('Aplicación inicializada correctamente');
});
