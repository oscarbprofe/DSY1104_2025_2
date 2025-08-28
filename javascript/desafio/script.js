// ===============================================
// LA LEYENDA DEL CÓDIGO PERDIDO - LÓGICA PRINCIPAL
// Juego educativo de JavaScript para estudiantes de 2º año
// ===============================================
// 📚 INSTRUCCIONES PARA ESTUDIANTES:
// Este juego tiene funciones INCOMPLETAS que ustedes deben programar.
// Busquen los comentarios "TODO:" para saber qué completar.
// ¡Su misión es hacer que el juego funcione completamente!
// ===============================================

// Estado global del juego
const gameState = {
    // Información del héroe
    heroe: {
        nombre: '',
        clase: '',
        vida: 100,
        vidaMaxima: 100,
        fragmentos: [false, false, false, false], // 4 fragmentos para completar
        avatar: '🧙‍♂️' // Por defecto
    },
    
    // Estado del juego
    pantallaActual: 'inicio',
    desafioActual: 0,
    intentos: 0,
    maxIntentos: 3,
    
    // TODO: ESTUDIANTES - Completen las respuestas correctas
    respuestas: {
        acertijo: 'while',  // ¿Cuál es la respuesta correcta del poema?
        logica: 16,         // ¿Qué número falta en la secuencia: 2, 4, 8, ?, 32, 64?
        secuencia: ['rojo', 'azul', 'verde', 'amarillo'], // Secuencia del ritual mágico
        preguntaFinal: 'html' // ¿Qué lenguaje usó Tim Berners-Lee para la primera web?
    },
    
    // Estado específico del desafío de secuencia
    ritual: {
        secuenciaCorrecta: ['rojo', 'azul', 'verde', 'amarillo'],
        secuenciaJugador: [],
        mostrandoSecuencia: false,
        indicePorMostrar: 0
    }
};

// Configuraciones de las clases de héroe
const clasesHeroe = {
    'mago': {
        nombre: 'Mago del Código',
        avatar: '🧙‍♂️',
        descripcion: 'Maestro de las funciones mágicas',
        vidaExtra: 0
    },
    'guerrero': {
        nombre: 'Guerrero Debug',
        avatar: '⚔️',
        descripcion: 'Cazador implacable de bugs',
        vidaExtra: 20
    },
    'explorador': {
        nombre: 'Explorador Digital',
        avatar: '🗺️',
        descripcion: 'Navegante de algoritmos complejos',
        vidaExtra: 10
    }
};

// ===============================================
// FUNCIONES DE INICIALIZACIÓN
// ===============================================

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 La Leyenda del Código Perdido - Iniciando...');
    inicializarJuego();
    configurarEventListeners();
});

function inicializarJuego() {
    // TODO: ESTUDIANTES - Implementen esta función
    // Deben:
    // 1. Mostrar la pantalla de inicio usando mostrarPantalla('inicio')
    // 2. Ocultar el panel del héroe usando ocultarPanelHeroe()
    // 3. Preparar el formulario de creación de personaje
    
    // PISTA: Usen las funciones que ya están definidas más abajo
    
    console.log('⚠️ TODO: Los estudiantes deben completar inicializarJuego()');
}

function setupCreacionPersonaje() {
    // TODO: ESTUDIANTES - Esta función debe crear los botones de clase dinámicamente
    // Pasos a seguir:
    // 1. Obtener el elemento con clase 'clase-options'
    // 2. Limpiar su contenido (innerHTML = '')
    // 3. Para cada clase en clasesHeroe, crear un botón
    // 4. Agregar event listeners a cada botón
    
    console.log('⚠️ TODO: Los estudiantes deben completar setupCreacionPersonaje()');
    
    // PISTA: Usen este código como base:
    // const claseOptions = document.querySelector('.clase-options');
    // Object.keys(clasesHeroe).forEach(claseKey => {
    //     const clase = clasesHeroe[claseKey];
    //     // Crear botón aquí...
    // });
}

// ===============================================
// GESTIÓN DE PANTALLAS
// ===============================================

function mostrarPantalla(nombrePantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Mostrar la pantalla solicitada
    const pantalla = document.getElementById(`pantalla-${nombrePantalla}`);
    if (pantalla) {
        pantalla.classList.add('activa');
        gameState.pantallaActual = nombrePantalla;
        console.log(`🎬 Mostrando pantalla: ${nombrePantalla}`);
    }
}

function mostrarPanelHeroe() {
    const panel = document.getElementById('panel-heroe');
    if (panel) {
        panel.classList.remove('oculto');
        actualizarPanelHeroe();
    }
}

function ocultarPanelHeroe() {
    const panel = document.getElementById('panel-heroe');
    if (panel) {
        panel.classList.add('oculto');
    }
}

// ===============================================
// CREACIÓN DE PERSONAJE
// ===============================================

function seleccionarClase(claseKey) {
    // TODO: ESTUDIANTES - Implementen la lógica de selección de clase
    // Deben:
    // 1. Remover la clase 'seleccionada' de todos los botones
    // 2. Agregar la clase 'seleccionada' al botón clickeado
    // 3. Actualizar el estado del juego con la nueva clase
    // 4. Actualizar los stats del héroe según la clase
    
    console.log('⚠️ TODO: Implementar seleccionarClase() para la clase:', claseKey);
    
    // PISTA: Usen querySelectorAll para obtener todos los botones
    // PISTA: Usen dataset.clase para encontrar el botón correcto
    // PISTA: Actualicen gameState.heroe con la información de clasesHeroe[claseKey]
}

function iniciarAventura() {
    // TODO: ESTUDIANTES - Implementen las validaciones y el inicio del juego
    // Deben validar:
    // 1. Que el nombre no esté vacío
    // 2. Que se haya seleccionado una clase
    // 3. Si todo está bien, mostrar el panel del héroe y empezar el desafío 1
    
    const nombreInput = document.getElementById('nombre-heroe');
    const nombre = nombreInput.value.trim();
    
    console.log('⚠️ TODO: Los estudiantes deben completar iniciarAventura()');
    console.log('Nombre ingresado:', nombre);
    console.log('Clase seleccionada:', gameState.heroe.clase);
    
    // PISTA: Usen mostrarMensaje() para mostrar errores
    // PISTA: Si todo está bien, llamen a mostrarPanelHeroe() y empezarDesafio(1)
}

// ===============================================
// GESTIÓN DEL PANEL DEL HÉROE
// ===============================================

function actualizarPanelHeroe() {
    // TODO: ESTUDIANTES - Implementen la actualización del panel del héroe
    // Deben actualizar:
    // 1. El nombre del héroe (elemento con id 'heroe-nombre')
    // 2. La clase del héroe (elemento con id 'heroe-clase') 
    // 3. El avatar del héroe (elemento con id 'heroe-emoji')
    // 4. Llamar a las funciones de actualización de vida y fragmentos
    
    console.log('⚠️ TODO: Los estudiantes deben completar actualizarPanelHeroe()');
    
    // PISTA: Usen getElementById() para obtener los elementos
    // PISTA: Usen textContent para actualizar el texto
    // PISTA: No olviden llamar a actualizarBarraVida() y actualizarFragmentos()
}

function actualizarBarraVida() {
    // TODO: ESTUDIANTES - Implementen la actualización de la barra de vida
    // Deben:
    // 1. Obtener los elementos 'barra-vida' y 'vida-texto'
    // 2. Calcular el porcentaje de vida actual
    // 3. Actualizar el ancho de la barra (style.width)
    // 4. Actualizar el texto de vida actual/máxima
    
    console.log('⚠️ TODO: Implementar actualizarBarraVida()');
    console.log('Vida actual:', gameState.heroe.vida);
    console.log('Vida máxima:', gameState.heroe.vidaMaxima);
    
    // PISTA: El porcentaje se calcula así: (vida / vidaMaxima) * 100
    // PISTA: El texto debe mostrar: "vida/vidaMaxima HP"
}

function actualizarFragmentos() {
    gameState.heroe.fragmentos.forEach((obtenido, index) => {
        const fragmento = document.getElementById(`fragmento-${index + 1}`);
        if (fragmento) {
            if (obtenido) {
                fragmento.classList.add('obtenido');
            } else {
                fragmento.classList.remove('obtenido');
            }
        }
    });
}

function obtenerFragmento(numeroFragmento) {
    gameState.heroe.fragmentos[numeroFragmento - 1] = true;
    actualizarFragmentos();
    
    // Efecto visual de obtención
    const fragmento = document.getElementById(`fragmento-${numeroFragmento}`);
    if (fragmento) {
        fragmento.style.animation = 'none';
        setTimeout(() => {
            fragmento.style.animation = 'pulso 1s ease-in-out';
        }, 10);
    }
    
    mostrarMensaje(`¡Has obtenido el fragmento ${numeroFragmento}! ✨`, 'exito');
    console.log(`💎 Fragmento ${numeroFragmento} obtenido`);
}

// ===============================================
// GESTIÓN DE DESAFÍOS
// ===============================================

function empezarDesafio(numeroDesafio) {
    gameState.desafioActual = numeroDesafio;
    gameState.intentos = 0;
    
    // Limpiar feedback anterior
    limpiarFeedback();
    
    switch (numeroDesafio) {
        case 1:
            mostrarPantalla('desafio1');
            setupDesafio1();
            break;
        case 2:
            mostrarPantalla('desafio2');
            setupDesafio2();
            break;
        case 3:
            mostrarPantalla('desafio3');
            setupDesafio3();
            break;
        case 4:
            mostrarPantalla('desafio4');
            setupDesafio4();
            break;
        default:
            console.error('Desafío no válido:', numeroDesafio);
    }
    
    console.log(`⚔️ Iniciando desafío ${numeroDesafio}`);
}

// ===============================================
// DESAFÍO 1: ACERTIJO POÉTICO
// ===============================================

function setupDesafio1() {
    // TODO: ESTUDIANTES - Configuren los event listeners para el desafío 1
    // Deben:
    // 1. Obtener todos los botones con clase 'opcion-btn' del desafío 1
    // 2. Agregar un event listener 'click' a cada botón
    // 3. El event listener debe llamar a verificarAcertijo() con la respuesta
    
    console.log('⚠️ TODO: Los estudiantes deben completar setupDesafio1()');
    
    // PISTA: Usen querySelectorAll('#desafio-1 .opcion-btn')
    // PISTA: Usen forEach() para iterar sobre los botones
    // PISTA: La respuesta está en opcion.dataset.respuesta
}

function verificarAcertijo(respuestaElegida) {
    // TODO: ESTUDIANTES - Implementen la verificación del acertijo
    // Deben:
    // 1. Incrementar gameState.intentos
    // 2. Comparar respuestaElegida con gameState.respuestas.acertijo
    // 3. Si es correcta: mostrar feedback positivo, obtener fragmento 1, ir al desafío 2
    // 4. Si es incorrecta: mostrar feedback negativo, quitar vida, verificar game over
    
    console.log('⚠️ TODO: Implementar verificarAcertijo()');
    console.log('Respuesta elegida:', respuestaElegida);
    console.log('Respuesta correcta:', gameState.respuestas.acertijo);
    console.log('Intentos actuales:', gameState.intentos);
    
    // PISTA: Usen mostrarFeedback() para mostrar mensajes
    // PISTA: Usen obtenerFragmento(1) si es correcto
    // PISTA: Usen perderVida(10) si es incorrecto
    // PISTA: Usen empezarDesafio(2) para continuar
}

// ===============================================
// DESAFÍO 2: LÓGICA MATEMÁTICA
// ===============================================

function setupDesafio2() {
    // TODO: ESTUDIANTES - Configuren el event listener para el botón de verificar
    // Deben:
    // 1. Obtener el botón con id 'verificar-numero'
    // 2. Agregar un event listener 'click' que llame a verificarLogica()
    
    console.log('⚠️ TODO: Los estudiantes deben completar setupDesafio2()');
}

function verificarLogica() {
    // TODO: ESTUDIANTES - Implementen la verificación del desafío de lógica
    // Deben:
    // 1. Obtener el valor del input 'numero-respuesta'
    // 2. Convertirlo a número con parseInt()
    // 3. Comparar con gameState.respuestas.logica
    // 4. Manejar respuesta correcta e incorrecta como en el desafío anterior
    
    console.log('⚠️ TODO: Los estudiantes deben completar verificarLogica()');
    
    // PISTA: const input = document.getElementById('numero-respuesta');
    // PISTA: const respuesta = parseInt(input.value);
    // PISTA: La secuencia es: 2, 4, 8, 16, 32, 64 (potencias de 2)
    
    const inputElement = document.getElementById('numero-respuesta');
    if (inputElement) {
        console.log('Valor ingresado:', inputElement.value);
        console.log('Respuesta correcta:', gameState.respuestas.logica);
    }
}

// ===============================================
// DESAFÍO 3: SECUENCIA DE BOTONES
// ===============================================

function setupDesafio3() {
    const botonesMagicos = document.querySelectorAll('.boton-magico');
    const botonIniciar = document.getElementById('iniciar-ritual');
    const botonReiniciar = document.getElementById('reiniciar-ritual');
    
    // Configurar event listeners para botones mágicos
    botonesMagicos.forEach(boton => {
        boton.addEventListener('click', () => {
            if (!gameState.ritual.mostrandoSecuencia) {
                presionarBotonMagico(boton.dataset.color);
            }
        });
    });
    
    // Configurar botones de control
    if (botonIniciar) {
        botonIniciar.addEventListener('click', iniciarRitual);
    }
    
    if (botonReiniciar) {
        botonReiniciar.addEventListener('click', reiniciarRitual);
    }
    
    // Resetear estado del ritual
    gameState.ritual.secuenciaJugador = [];
    actualizarProgresoRitual();
}

function iniciarRitual() {
    gameState.ritual.mostrandoSecuencia = true;
    gameState.ritual.indicePorMostrar = 0;
    gameState.ritual.secuenciaJugador = [];
    
    // Deshabilitar botón de iniciar
    const botonIniciar = document.getElementById('iniciar-ritual');
    if (botonIniciar) {
        botonIniciar.disabled = true;
    }
    
    // Mostrar la secuencia
    mostrarSecuencia();
}

function mostrarSecuencia() {
    if (gameState.ritual.indicePorMostrar < gameState.ritual.secuenciaCorrecta.length) {
        const color = gameState.ritual.secuenciaCorrecta[gameState.ritual.indicePorMostrar];
        const boton = document.querySelector(`[data-color="${color}"]`);
        
        if (boton) {
            // Iluminar botón
            boton.classList.add('iluminado');
            
            // Sonido visual (cambio de brillo)
            setTimeout(() => {
                boton.classList.remove('iluminado');
                gameState.ritual.indicePorMostrar++;
                
                // Continuar con el siguiente botón después de una pausa
                setTimeout(() => {
                    mostrarSecuencia();
                }, 300);
            }, 600);
        }
    } else {
        // Secuencia mostrada completamente
        gameState.ritual.mostrandoSecuencia = false;
        gameState.ritual.indicePorMostrar = 0;
        
        // Habilitar input del jugador
        const botonIniciar = document.getElementById('iniciar-ritual');
        if (botonIniciar) {
            botonIniciar.disabled = false;
            botonIniciar.textContent = 'Repetir Secuencia';
        }
        
        mostrarMensaje('Ahora repite la secuencia que acabas de ver', 'info');
    }
}

function presionarBotonMagico(color) {
    // TODO: ESTUDIANTES - Implementen la lógica del ritual mágico
    // Deben:
    // 1. Agregar el color presionado a gameState.ritual.secuenciaJugador
    // 2. Verificar si el color es correcto comparando con secuenciaCorrecta
    // 3. Si toda la secuencia está completa y correcta, dar el fragmento 3
    // 4. Si hay un error, quitar vida y reiniciar el ritual
    
    console.log('⚠️ TODO: Los estudiantes deben completar presionarBotonMagico()');
    console.log('Color presionado:', color);
    console.log('Secuencia actual del jugador:', gameState.ritual.secuenciaJugador);
    console.log('Secuencia correcta:', gameState.ritual.secuenciaCorrecta);
    
    // PISTA: Usen push() para agregar el color
    // PISTA: Comparen elemento por elemento con la secuencia correcta
    // PISTA: Si la longitud es igual y todo está correcto, ¡éxito!
}

function reiniciarRitual() {
    gameState.ritual.secuenciaJugador = [];
    actualizarProgresoRitual();
    
    const botonIniciar = document.getElementById('iniciar-ritual');
    if (botonIniciar) {
        botonIniciar.textContent = 'Iniciar Ritual';
        botonIniciar.disabled = false;
    }
}

function actualizarProgresoRitual() {
    const progreso = document.getElementById('progreso-ritual');
    if (progreso) {
        const secuencia = gameState.ritual.secuenciaJugador;
        const iconos = secuencia.map(color => {
            const iconosColor = {
                'rojo': '🔴',
                'azul': '🔵',
                'verde': '🟢',
                'amarillo': '🟡'
            };
            return iconosColor[color] || '❓';
        }).join(' ');
        
        progreso.innerHTML = `
            <strong>Tu secuencia:</strong><br>
            ${iconos || 'Presiona los botones para comenzar...'}
        `;
    }
}

// ===============================================
// DESAFÍO 4: PREGUNTA FINAL
// ===============================================

function setupDesafio4() {
    const botonVerificar = document.getElementById('verificar-final');
    if (botonVerificar) {
        botonVerificar.addEventListener('click', verificarPreguntaFinal);
    }
}

function verificarPreguntaFinal() {
    // TODO: ESTUDIANTES - Implementen la verificación de la pregunta final
    // Deben:
    // 1. Obtener el valor del textarea 'respuesta-final'
    // 2. Convertirlo a minúsculas y quitar espacios extra
    // 3. Comparar con gameState.respuestas.preguntaFinal
    // 4. Si es correcto, obtener el fragmento 4 y mostrar victoria
    // 5. Si es incorrecto, manejar como en los otros desafíos
    
    console.log('⚠️ TODO: Los estudiantes deben completar verificarPreguntaFinal()');
    
    const inputElement = document.getElementById('respuesta-final');
    if (inputElement) {
        console.log('Respuesta ingresada:', inputElement.value);
        console.log('Respuesta correcta:', gameState.respuestas.preguntaFinal);
    }
    
    // PISTA: Usen .trim().toLowerCase() para normalizar la respuesta
    // PISTA: Si es correcto, llamen a obtenerFragmento(4) y luego victoria()
}

// ===============================================
// MECÁNICAS DE JUEGO
// ===============================================

function perderVida(cantidad) {
    gameState.heroe.vida = Math.max(0, gameState.heroe.vida - cantidad);
    actualizarBarraVida();
    
    // Efecto visual de daño
    const panel = document.getElementById('panel-heroe');
    if (panel) {
        panel.style.animation = 'temblar 0.5s ease-in-out';
        setTimeout(() => {
            panel.style.animation = '';
        }, 500);
    }
    
    if (gameState.heroe.vida <= 0) {
        gameOver('Tu héroe ha caído en batalla...');
    }
}

function mostrarFeedback(mensaje, tipo) {
    // Limpiar feedback anterior
    limpiarFeedback();
    
    // Crear elemento de feedback
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback-${tipo}`;
    feedbackDiv.textContent = mensaje;
    
    // Buscar área de feedback en la pantalla actual
    const pantallaActual = document.querySelector('.pantalla.activa');
    let feedbackArea = pantallaActual.querySelector('.feedback-area');
    
    if (!feedbackArea) {
        feedbackArea = document.createElement('div');
        feedbackArea.className = 'feedback-area';
        pantallaActual.appendChild(feedbackArea);
    }
    
    feedbackArea.appendChild(feedbackDiv);
    
    console.log(`💬 Feedback (${tipo}): ${mensaje}`);
}

function limpiarFeedback() {
    const feedbackAreas = document.querySelectorAll('.feedback-area');
    feedbackAreas.forEach(area => {
        area.innerHTML = '';
    });
}

function mostrarMensaje(mensaje, tipo = 'info') {
    // Crear elemento de mensaje temporal
    const mensajeDiv = document.createElement('div');
    mensajeDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${tipo === 'error' ? 'var(--color-error)' : 'var(--color-primario)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        font-weight: bold;
        animation: aparecer 0.5s ease-in-out;
        box-shadow: var(--sombra-elevada);
    `;
    mensajeDiv.textContent = mensaje;
    
    document.body.appendChild(mensajeDiv);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        if (mensajeDiv.parentNode) {
            mensajeDiv.parentNode.removeChild(mensajeDiv);
        }
    }, 3000);
}

// ===============================================
// FINALES DEL JUEGO
// ===============================================

function victoria() {
    // Actualizar información final
    const nombreFinal = document.getElementById('heroe-nombre-final');
    const claseFinal = document.getElementById('heroe-clase-final');
    const vidaFinal = document.getElementById('vida-final');
    
    if (nombreFinal) nombreFinal.textContent = gameState.heroe.nombre;
    if (claseFinal) claseFinal.textContent = clasesHeroe[gameState.heroe.clase].nombre;
    if (vidaFinal) vidaFinal.textContent = `${gameState.heroe.vida}/${gameState.heroe.vidaMaxima}`;
    
    // Mostrar pantalla de victoria
    mostrarPantalla('victoria');
    ocultarPanelHeroe();
    
    console.log('🎉 ¡VICTORIA! El jugador ha completado la aventura');
}

function gameOver(razon) {
    // Actualizar mensaje de game over
    const mensajeGameOver = document.getElementById('mensaje-game-over');
    if (mensajeGameOver) {
        mensajeGameOver.textContent = razon;
    }
    
    // Mostrar pantalla de game over
    mostrarPantalla('game-over');
    ocultarPanelHeroe();
    
    console.log('💀 GAME OVER:', razon);
}

function reiniciarJuego() {
    // Resetear estado del juego
    gameState.heroe = {
        nombre: '',
        clase: '',
        vida: 100,
        vidaMaxima: 100,
        fragmentos: [false, false, false, false],
        avatar: '🧙‍♂️'
    };
    
    gameState.pantallaActual = 'inicio';
    gameState.desafioActual = 0;
    gameState.intentos = 0;
    gameState.ritual.secuenciaJugador = [];
    
    // Limpiar formulario
    const nombreInput = document.getElementById('nombre-heroe');
    if (nombreInput) nombreInput.value = '';
    
    // Limpiar selección de clase
    document.querySelectorAll('.clase-btn').forEach(btn => {
        btn.classList.remove('seleccionada');
    });
    
    // Volver al inicio
    inicializarJuego();
    
    console.log('🔄 Juego reiniciado');
}

// ===============================================
// EVENT LISTENERS GLOBALES
// ===============================================

function configurarEventListeners() {
    // Botón de iniciar aventura
    const botonIniciar = document.getElementById('btn-iniciar-aventura');
    if (botonIniciar) {
        botonIniciar.addEventListener('click', iniciarAventura);
    }
    
    // Botones de reiniciar
    const botonesReiniciar = document.querySelectorAll('.btn-reiniciar');
    botonesReiniciar.forEach(boton => {
        boton.addEventListener('click', reiniciarJuego);
    });
    
    // Tecla Enter en campos de texto
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const target = e.target;
            
            // Campo de nombre del héroe
            if (target.id === 'nombre-heroe') {
                iniciarAventura();
            }
            
            // Campos de desafío de lógica
            if (target.id === 'numero1' || target.id === 'numero2' || target.id === 'numero3') {
                verificarLogica();
            }
            
            // Campo de respuesta final
            if (target.id === 'respuesta-final') {
                verificarPreguntaFinal();
            }
        }
    });
    
    // Hacer que el campo de nombre tenga foco al cargar
    const nombreInput = document.getElementById('nombre-heroe');
    if (nombreInput) {
        nombreInput.focus();
    }
    
    console.log('🎮 Event listeners configurados');
}

// ===============================================
// UTILIDADES Y HELPERS
// ===============================================

// Función para crear efectos de partículas (opcional)
function crearEfectoParticulas(elemento, tipo = 'exito') {
    const colores = {
        'exito': ['#10b981', '#059669', '#34d399'],
        'error': ['#ef4444', '#dc2626', '#f87171'],
        'magia': ['#6366f1', '#8b5cf6', '#a855f7']
    };
    
    const colorParticulas = colores[tipo] || colores['magia'];
    
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${colorParticulas[Math.floor(Math.random() * colorParticulas.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        const rect = elemento.getBoundingClientRect();
        particula.style.left = rect.left + rect.width / 2 + 'px';
        particula.style.top = rect.top + rect.height / 2 + 'px';
        
        document.body.appendChild(particula);
        
        // Animar partícula
        const anguloRandom = Math.random() * Math.PI * 2;
        const velocidadRandom = 50 + Math.random() * 100;
        const finalX = Math.cos(anguloRandom) * velocidadRandom;
        const finalY = Math.sin(anguloRandom) * velocidadRandom;
        
        particula.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${finalX}px, ${finalY}px)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            if (particula.parentNode) {
                particula.parentNode.removeChild(particula);
            }
        };
    }
}

// Debug: Función para completar automáticamente el juego (solo para desarrollo)
function cheatVictoria() {
    console.log('🎭 CHEAT: Completando automáticamente...');
    gameState.heroe.fragmentos = [true, true, true, true];
    victoria();
}

// Debug: Exponer funciones para testing
window.gameDebug = {
    gameState,
    cheatVictoria,
    perderVida,
    obtenerFragmento,
    mostrarPantalla
};

console.log('🎮 La Leyenda del Código Perdido - Sistema cargado completamente');
console.log('💡 Para desarrolladores: Usa window.gameDebug para testing');
