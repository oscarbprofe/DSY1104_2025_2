/**
 * ===============================================
 * GUÍA COMPLETA: JAVASCRIPT DOM Y LOCALSTORAGE
 * ===============================================
 * 
 * Este archivo demuestra:
 * 1. Selectores de elementos del DOM
 * 2. Manipulación de estilos CSS
 * 3. Creación dinámica de elementos HTML
 * 4. Uso de LocalStorage para persistencia de datos
 */

// ===============================================
// VARIABLES GLOBALES Y CONFIGURACIÓN
// ===============================================

let contadorElementos = 0;
let elementosSeleccionados = [];
let datosStorage = {};

// Colores para cambios dinámicos
const colores = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
let indiceColor = 0;

// ===============================================
// FUNCIONES DE UTILIDAD
// ===============================================

/**
 * Función para agregar entradas al log de actividades
 */
function agregarAlLog(mensaje, tipo = 'info') {
    const logContainer = document.getElementById('log-actividades');
    const entrada = document.createElement('div');
    entrada.className = 'log-entry';
    
    const iconos = {
        'info': '🔵',
        'success': '🟢',
        'warning': '🟡',
        'error': '🔴'
    };
    
    entrada.innerHTML = `${iconos[tipo]} ${mensaje}`;
    logContainer.appendChild(entrada);
    
    // Mantener solo las últimas 10 entradas
    const entradas = logContainer.querySelectorAll('.log-entry');
    if (entradas.length > 10) {
        logContainer.removeChild(entradas[0]);
    }
    
    // Scroll automático hacia abajo
    logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * Función para actualizar la información del selector usado
 */
function actualizarInfoSelector(metodo, elementos) {
    const infoSelector = document.getElementById('info-selector');
    const cantidad = Array.isArray(elementos) ? elementos.length : (elementos ? 1 : 0);
    
    infoSelector.innerHTML = `
        <h4>Método: ${metodo}</h4>
        <p><strong>Elementos encontrados:</strong> ${cantidad}</p>
        <p><strong>Tipo de retorno:</strong> ${Array.isArray(elementos) ? 'Array/NodeList' : 'Element'}</p>
        <div class="codigo-pequeno">
            <code>${metodo === 'getElementById' ? 
                'document.getElementById(\'id\')' : 
                metodo === 'querySelector' ?
                'document.querySelector(\'selector\')' :
                metodo === 'querySelectorAll' ?
                'document.querySelectorAll(\'selector\')' :
                'document.getElementsByClassName(\'clase\')'
            }</code>
        </div>
    `;
}

/**
 * Función para actualizar la información de cambios CSS
 */
function actualizarInfoCSS(cambio) {
    const infoCSS = document.getElementById('info-css');
    const tiempo = new Date().toLocaleTimeString();
    
    infoCSS.innerHTML += `
        <div class="cambio-css">
            <strong>[${tiempo}]</strong> ${cambio}
        </div>
    `;
    
    // Limitar a 8 entradas
    const cambios = infoCSS.querySelectorAll('.cambio-css');
    if (cambios.length > 8) {
        infoCSS.removeChild(cambios[0]);
    }
}

/**
 * Función para actualizar la información del LocalStorage
 */
function actualizarInfoStorage() {
    const infoStorage = document.getElementById('info-storage');
    const datos = { ...localStorage };
    
    if (Object.keys(datos).length === 0) {
        infoStorage.innerHTML = '<p>LocalStorage vacío</p>';
        return;
    }
    
    let html = '<div class="storage-data">';
    for (const [clave, valor] of Object.entries(datos)) {
        html += `
            <div class="storage-item">
                <strong>${clave}:</strong> ${valor}
            </div>
        `;
    }
    html += '</div>';
    
    infoStorage.innerHTML = html;
}

// ===============================================
// SELECTORES DE ELEMENTOS
// ===============================================

/**
 * Demostración de getElementById
 */
function demoGetElementById() {
    const elemento = document.getElementById('parrafo-especial');
    
    if (elemento) {
        elemento.classList.add('seleccionado');
        actualizarInfoSelector('getElementById', elemento);
        agregarAlLog('Elemento seleccionado con getElementById', 'success');
        
        // Remover la clase después de 2 segundos
        setTimeout(() => {
            elemento.classList.remove('seleccionado');
        }, 2000);
    }
}

/**
 * Demostración de querySelector
 */
function demoQuerySelector() {
    const elemento = document.querySelector('.texto-demo');
    
    if (elemento) {
        elemento.classList.add('resaltado');
        actualizarInfoSelector('querySelector', elemento);
        agregarAlLog('Primer elemento seleccionado con querySelector', 'success');
        
        setTimeout(() => {
            elemento.classList.remove('resaltado');
        }, 2000);
    }
}

/**
 * Demostración de querySelectorAll
 */
function demoQuerySelectorAll() {
    const elementos = document.querySelectorAll('.caja-demo');
    
    elementos.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.classList.add('seleccionado');
            setTimeout(() => {
                elemento.classList.remove('seleccionado');
            }, 1000);
        }, index * 300);
    });
    
    actualizarInfoSelector('querySelectorAll', Array.from(elementos));
    agregarAlLog(`${elementos.length} elementos seleccionados con querySelectorAll`, 'success');
}

/**
 * Demostración de getElementsByClassName
 */
function demoGetElementsByClassName() {
    const elementos = document.getElementsByClassName('texto-demo');
    
    Array.from(elementos).forEach((elemento, index) => {
        setTimeout(() => {
            elemento.style.backgroundColor = colores[index % colores.length];
            elemento.style.color = 'white';
            elemento.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                elemento.style.backgroundColor = '';
                elemento.style.color = '';
                elemento.style.transform = '';
            }, 1500);
        }, index * 200);
    });
    
    actualizarInfoSelector('getElementsByClassName', Array.from(elementos));
    agregarAlLog(`${elementos.length} elementos seleccionados con getElementsByClassName`, 'success');
}

// ===============================================
// MANIPULACIÓN DE ESTILOS CSS
// ===============================================

/**
 * Cambiar colores de elementos aleatoriamente
 */
function cambiarColores() {
    const elementos = document.querySelectorAll('.caja-demo');
    
    elementos.forEach(elemento => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        elemento.style.backgroundColor = colorAleatorio;
        elemento.style.transition = 'all 0.5s ease';
    });
    
    actualizarInfoCSS('Colores cambiados con style.backgroundColor');
    agregarAlLog('Colores de cajas cambiados aleatoriamente', 'success');
}

/**
 * Cambiar tamaño de elementos
 */
function cambiarTamano() {
    const elementos = document.querySelectorAll('.texto-demo');
    
    elementos.forEach((elemento, index) => {
        if (elemento.classList.contains('grande')) {
            elemento.classList.remove('grande');
            elemento.style.fontSize = '';
            elemento.style.padding = '';
        } else {
            elemento.classList.add('grande');
        }
    });
    
    actualizarInfoCSS('Tamaño cambiado con classList.toggle("grande")');
    agregarAlLog('Tamaño de párrafos modificado', 'success');
}

/**
 * Toggle de clase activa
 */
function toggleClase() {
    const elementos = document.querySelectorAll('.caja-demo');
    
    elementos.forEach(elemento => {
        elemento.classList.toggle('activo');
    });
    
    actualizarInfoCSS('Clase "activo" toggleada con classList.toggle()');
    agregarAlLog('Clase "activo" aplicada/removida de cajas', 'success');
}

/**
 * Reset de todos los estilos
 */
function resetEstilos() {
    const elementos = document.querySelectorAll('.texto-demo, .caja-demo');
    
    elementos.forEach(elemento => {
        // Remover todas las clases personalizadas
        elemento.classList.remove('seleccionado', 'resaltado', 'grande', 'activo');
        
        // Reset estilos inline
        elemento.style.backgroundColor = '';
        elemento.style.color = '';
        elemento.style.fontSize = '';
        elemento.style.padding = '';
        elemento.style.transform = '';
        elemento.style.transition = '';
    });
    
    actualizarInfoCSS('Todos los estilos reseteados');
    agregarAlLog('Todos los estilos han sido reseteados', 'warning');
}

// ===============================================
// CREACIÓN DINÁMICA DE ELEMENTOS
// ===============================================

/**
 * Crear un elemento simple
 */
function crearElemento() {
    contadorElementos++;
    
    const contenedor = document.getElementById('elementos-nuevos');
    
    // Crear elemento div
    const nuevoElemento = document.createElement('div');
    nuevoElemento.className = 'elemento-dinamico';
    nuevoElemento.textContent = `Elemento creado dinámicamente #${contadorElementos}`;
    
    // Agregar atributos personalizados
    nuevoElemento.setAttribute('data-numero', contadorElementos);
    nuevoElemento.setAttribute('data-creado', new Date().toLocaleTimeString());
    
    // Event listener para interacción
    nuevoElemento.addEventListener('click', function() {
        this.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        agregarAlLog(`Elemento #${contadorElementos} clickeado`, 'info');
    });
    
    // Agregar al DOM
    contenedor.appendChild(nuevoElemento);
    
    agregarAlLog(`Elemento #${contadorElementos} creado con createElement()`, 'success');
}

/**
 * Crear una lista dinámica
 */
function crearLista() {
    contadorElementos++;
    
    const contenedor = document.getElementById('elementos-nuevos');
    
    // Crear contenedor de la lista
    const listaContainer = document.createElement('div');
    listaContainer.className = 'lista-dinamica';
    
    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = `Lista Dinámica #${contadorElementos}`;
    listaContainer.appendChild(titulo);
    
    // Crear lista
    const lista = document.createElement('ul');
    
    // Datos de ejemplo
    const items = [
        'Item creado con createElement()',
        'appendChild() para agregar al DOM',
        'addEventListener() para interactividad',
        'setAttribute() para atributos personalizados'
    ];
    
    items.forEach((texto, index) => {
        const li = document.createElement('li');
        li.textContent = texto;
        li.style.animationDelay = `${index * 0.1}s`;
        lista.appendChild(li);
    });
    
    listaContainer.appendChild(lista);
    contenedor.appendChild(listaContainer);
    
    agregarAlLog(`Lista dinámica #${contadorElementos} creada`, 'success');
}

/**
 * Crear una tarjeta compleja
 */
function crearCard() {
    contadorElementos++;
    
    const contenedor = document.getElementById('elementos-nuevos');
    
    // Crear la tarjeta usando innerHTML para demostrar ambos métodos
    const card = document.createElement('div');
    card.className = 'card-dinamica';
    
    card.innerHTML = `
        <h4>Tarjeta Dinámica #${contadorElementos}</h4>
        <p>Esta tarjeta fue creada usando innerHTML</p>
        <p><strong>Hora de creación:</strong> ${new Date().toLocaleString()}</p>
        <button class="btn-card" onclick="eliminarCard(this)">Eliminar Tarjeta</button>
    `;
    
    // Agregar evento con addEventListener
    const boton = card.querySelector('.btn-card');
    boton.style.background = '#e74c3c';
    boton.style.color = 'white';
    boton.style.border = 'none';
    boton.style.padding = '8px 16px';
    boton.style.borderRadius = '4px';
    boton.style.cursor = 'pointer';
    
    contenedor.appendChild(card);
    
    agregarAlLog(`Tarjeta dinámica #${contadorElementos} creada con innerHTML`, 'success');
}

/**
 * Función para eliminar tarjeta (llamada desde el botón)
 */
function eliminarCard(boton) {
    const card = boton.closest('.card-dinamica');
    if (card) {
        card.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            card.remove();
            agregarAlLog('Tarjeta eliminada del DOM', 'warning');
        }, 500);
    }
}

/**
 * Limpiar todos los elementos creados
 */
function limpiarElementos() {
    const contenedor = document.getElementById('elementos-nuevos');
    
    // Animación de salida para todos los elementos
    const elementos = contenedor.children;
    Array.from(elementos).forEach((elemento, index) => {
        setTimeout(() => {
            elemento.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                if (elemento.parentNode) {
                    elemento.remove();
                }
            }, 300);
        }, index * 100);
    });
    
    // Reset contador
    setTimeout(() => {
        contadorElementos = 0;
        agregarAlLog('Todos los elementos dinámicos eliminados', 'warning');
    }, (elementos.length * 100) + 500);
}

// ===============================================
// LOCALSTORAGE
// ===============================================

/**
 * Guardar dato en LocalStorage
 */
function guardarDato() {
    const inputClave = document.getElementById('input-clave');
    const inputValor = document.getElementById('input-valor');
    
    const clave = inputClave.value.trim();
    const valor = inputValor.value.trim();
    
    if (!clave || !valor) {
        agregarAlLog('Por favor ingresa tanto clave como valor', 'error');
        return;
    }
    
    // Guardar en localStorage
    localStorage.setItem(clave, valor);
    
    // También guardar con metadatos
    const datoCompleto = {
        valor: valor,
        fechaCreacion: new Date().toLocaleString(),
        tipo: typeof valor
    };
    
    localStorage.setItem(`meta_${clave}`, JSON.stringify(datoCompleto));
    
    // Limpiar inputs
    inputClave.value = '';
    inputValor.value = '';
    
    // Actualizar visualización
    actualizarInfoStorage();
    agregarAlLog(`Dato guardado: ${clave} = ${valor}`, 'success');
}

/**
 * Cargar todos los datos del LocalStorage
 */
function cargarDatos() {
    const datos = { ...localStorage };
    const cantidad = Object.keys(datos).length;
    
    if (cantidad === 0) {
        agregarAlLog('LocalStorage está vacío', 'warning');
        return;
    }
    
    // Crear una ventana modal simple para mostrar datos
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    const contenido = document.createElement('div');
    contenido.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 10px;
        max-width: 600px;
        max-height: 80%;
        overflow-y: auto;
    `;
    
    let html = '<h3>Datos en LocalStorage:</h3>';
    for (const [clave, valor] of Object.entries(datos)) {
        if (!clave.startsWith('meta_')) {
            html += `
                <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;">
                    <strong>${clave}:</strong> ${valor}
                </div>
            `;
        }
    }
    
    html += '<button onclick="this.closest(\'div\').parentElement.remove()">Cerrar</button>';
    contenido.innerHTML = html;
    
    modal.appendChild(contenido);
    document.body.appendChild(modal);
    
    agregarAlLog(`${cantidad} datos cargados del LocalStorage`, 'info');
}

/**
 * Limpiar LocalStorage
 */
function limpiarStorage() {
    const confirmacion = confirm('¿Estás seguro de que quieres limpiar todo el LocalStorage?');
    
    if (confirmacion) {
        localStorage.clear();
        actualizarInfoStorage();
        agregarAlLog('LocalStorage limpiado completamente', 'warning');
    }
}

// ===============================================
// EVENT LISTENERS Y INICIALIZACIÓN
// ===============================================

/**
 * Función de inicialización cuando el DOM está listo
 */
function inicializar() {
    // Selectores de elementos
    document.getElementById('btn-getElementById').addEventListener('click', demoGetElementById);
    document.getElementById('btn-querySelector').addEventListener('click', demoQuerySelector);
    document.getElementById('btn-querySelectorAll').addEventListener('click', demoQuerySelectorAll);
    document.getElementById('btn-getElementsByClass').addEventListener('click', demoGetElementsByClassName);
    
    // Manipulación CSS
    document.getElementById('btn-cambiar-color').addEventListener('click', cambiarColores);
    document.getElementById('btn-cambiar-tamaño').addEventListener('click', cambiarTamano);
    document.getElementById('btn-toggle-clase').addEventListener('click', toggleClase);
    document.getElementById('btn-reset-estilos').addEventListener('click', resetEstilos);
    
    // Creación de elementos
    document.getElementById('btn-crear-elemento').addEventListener('click', crearElemento);
    document.getElementById('btn-crear-lista').addEventListener('click', crearLista);
    document.getElementById('btn-crear-card').addEventListener('click', crearCard);
    document.getElementById('btn-limpiar-elementos').addEventListener('click', limpiarElementos);
    
    // LocalStorage
    document.getElementById('btn-guardar-dato').addEventListener('click', guardarDato);
    document.getElementById('btn-cargar-datos').addEventListener('click', cargarDatos);
    document.getElementById('btn-limpiar-storage').addEventListener('click', limpiarStorage);
    
    // Event listeners para inputs (Enter para guardar)
    document.getElementById('input-valor').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            guardarDato();
        }
    });
    
    // Cargar datos iniciales del localStorage
    actualizarInfoStorage();
    
    // Agregar algunos datos de ejemplo si el localStorage está vacío
    if (localStorage.length === 0) {
        localStorage.setItem('ejemplo_1', 'Dato de ejemplo');
        localStorage.setItem('ejemplo_2', 'Otro dato de ejemplo');
        localStorage.setItem('configuracion', JSON.stringify({tema: 'claro', idioma: 'es'}));
        actualizarInfoStorage();
    }
    
    agregarAlLog('Aplicación inicializada correctamente', 'success');
    
    // Demostración automática inicial
    setTimeout(() => {
        agregarAlLog('¡Haz clic en cualquier botón para ver ejemplos en acción!', 'info');
    }, 1000);
}

// ===============================================
// FUNCIONES ADICIONALES DE DEMOSTRACIÓN
// ===============================================

/**
 * Función para demostrar manipulación avanzada del DOM
 */
function demostracionAvanzada() {
    // Crear elementos con diferentes métodos
    const contenedor = document.getElementById('elementos-nuevos');
    
    // Método 1: createElement + appendChild
    const div1 = document.createElement('div');
    div1.textContent = 'Creado con createElement';
    div1.className = 'elemento-dinamico';
    contenedor.appendChild(div1);
    
    // Método 2: innerHTML
    contenedor.innerHTML += '<div class="elemento-dinamico">Creado con innerHTML</div>';
    
    // Método 3: insertAdjacentHTML
    contenedor.insertAdjacentHTML('beforeend', '<div class="elemento-dinamico">Creado con insertAdjacentHTML</div>');
    
    agregarAlLog('Demostración de diferentes métodos de creación', 'info');
}

/**
 * Exportar función global para eliminar tarjetas
 */
window.eliminarCard = eliminarCard;

// ===============================================
// INICIALIZACIÓN
// ===============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializar);

// También agregar una animación CSS para fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.8); }
    }
    
    .cambio-css {
        padding: 5px;
        margin: 3px 0;
        background: rgba(52, 152, 219, 0.1);
        border-radius: 3px;
        font-size: 0.9rem;
    }
    
    .storage-item {
        padding: 5px;
        margin: 3px 0;
        background: rgba(46, 204, 113, 0.1);
        border-radius: 3px;
        font-size: 0.9rem;
    }
    
    .codigo-pequeno {
        background: #2c3e50;
        color: #ecf0f1;
        padding: 8px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.8rem;
        margin-top: 8px;
    }
`;
document.head.appendChild(style);
