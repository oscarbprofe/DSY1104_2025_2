// Importar datos
import { CATEGORIES_LG } from '../js/db/categorias.js';
import { PRODUCTS_LG } from '../js/db/productos.js';

// Configuración de la paginación
const ITEMS_PER_PAGE = 10;
let currentPage = 1;
let currentCategory = null;
let currentProducts = [...PRODUCTS_LG];

// Función para renderizar las categorías
function renderizarCategorias() {
    const categoriesList = document.getElementById('categories-list');
    if (!categoriesList) return;

    categoriesList.innerHTML = CATEGORIES_LG.map(cat => `
        <li>
            <a href="#" data-category="${cat.id}" ${currentCategory === cat.id ? 'aria-current="page"' : ''}>
                <span class="icon" aria-hidden="true">${cat.icono}</span>
                ${cat.nombre}
            </a>
        </li>
    `).join('');

    // Eventos de categorías
    categoriesList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryId = link.dataset.category;
            currentCategory = categoryId;
            currentPage = 1;
            filterAndRenderProducts();
        });
    });
}

// Función para filtrar productos
function filterProducts() {
    let filtered = [...PRODUCTS_LG];
    
    // Filtrar por categoría
    if (currentCategory) {
        filtered = filtered.filter(product => product.categoriaId === currentCategory);
    }

    // Filtrar por precio máximo
    const maxPrice = document.getElementById('max-price').value;
    filtered = filtered.filter(product => product.precioCLP <= maxPrice);

    // Filtrar por stock
    const inStockOnly = document.getElementById('in-stock').checked;
    if (inStockOnly) {
        filtered = filtered.filter(product => product.stock > 0);
    }

    // Ordenar productos
    const sortBy = document.getElementById('sort-products').value;
    switch (sortBy) {
        case 'price-asc':
            filtered.sort((a, b) => a.precioCLP - b.precioCLP);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.precioCLP - a.precioCLP);
            break;
        case 'name-asc':
            filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'featured':
            filtered.sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
            break;
    }

    return filtered;
}

// Función para renderizar los productos
function renderProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = products.slice(start, start + ITEMS_PER_PAGE);

    productsGrid.innerHTML = paginatedProducts.map(prod => `
        <article class="card">
            <div class="thumb">
                <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
            </div>
            <h3>${prod.nombre}</h3>
            <p class="muted">${prod.descripcion}</p>
            <div class="product-meta">
                <span class="stock ${prod.stock > 0 ? 'in-stock' : 'out-stock'}">
                    ${prod.stock > 0 ? 'En stock' : 'Sin stock'}
                </span>
                <div class="rating">★ ${prod.rating}</div>
            </div>
            <div class="actions">
                <span class="price">$${prod.precioCLP.toLocaleString()}</span>
                <button class="btn-outline" type="button" 
                    onclick="agregarAlCarrito('${prod.code}')"
                    ${prod.stock === 0 ? 'disabled' : ''}>
                    Añadir
                </button>
            </div>
        </article>
    `).join('');
}

// Función para renderizar la paginación
function renderPagination(totalProducts) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);
    const pageNumbers = document.getElementById('page-numbers');
    
    // Botones de navegación
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;

    // Números de página
    let pages = [];
    if (totalPages <= 5) {
        pages = Array.from({length: totalPages}, (_, i) => i + 1);
    } else {
        if (currentPage <= 3) {
            pages = [1, 2, 3, 4, '...', totalPages];
        } else if (currentPage >= totalPages - 2) {
            pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
    }

    pageNumbers.innerHTML = pages.map(page => {
        if (page === '...') {
            return '<span class="ellipsis">...</span>';
        }
        return `
            <button type="button"
                ${page === currentPage ? 'aria-current="true"' : ''}
                onclick="goToPage(${page})">
                ${page}
            </button>
        `;
    }).join('');
}

// Función para filtrar y renderizar productos
function filterAndRenderProducts() {
    currentProducts = filterProducts();
    renderProducts(currentProducts);
    renderPagination(currentProducts.length);
    updateActiveCategory();
}

// Función para actualizar la categoría activa
function updateActiveCategory() {
    document.querySelectorAll('#categories-list a').forEach(link => {
        if (link.dataset.category === currentCategory) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

// Función para ir a una página específica
window.goToPage = function(page) {
    currentPage = page;
    filterAndRenderProducts();
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar categorías
    renderizarCategorias();

    // Inicializar filtros
    document.getElementById('max-price').addEventListener('input', (e) => {
        e.target.nextElementSibling.querySelector('output').value = e.target.value;
        filterAndRenderProducts();
    });

    document.getElementById('in-stock').addEventListener('change', filterAndRenderProducts);
    document.getElementById('sort-products').addEventListener('change', filterAndRenderProducts);

    // Botones de paginación
    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            filterAndRenderProducts();
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        const totalPages = Math.ceil(currentProducts.length / ITEMS_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            filterAndRenderProducts();
        }
    });

    // Renderizar productos iniciales
    filterAndRenderProducts();
});
