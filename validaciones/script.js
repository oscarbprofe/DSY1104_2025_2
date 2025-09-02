document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const inputs = form.querySelectorAll('input');

    // Objeto con las validaciones
    const validaciones = {
        rut: {
            regex: /^(\d{1,2}\.\d{3}\.\d{3}-[\dkK])$/,
            mensaje: 'RUT inválido. Formato: 12.345.678-9'
        },
        nombre: {
            regex: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]{2,50}$/,
            mensaje: 'Nombre inválido. Solo letras y espacios (2-50 caracteres)'
        },
        email: {
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensaje: 'Correo electrónico inválido'
        },
        telefono: {
            regex: /^\+?56\s?9\s?\d{8}$/,
            mensaje: 'Teléfono inválido. Formato: +56 9 12345678'
        },
        password: {
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            mensaje: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial'
        }
    };

    // Función para formatear RUT mientras se escribe
    function formatearRUT(rut) {
        // Eliminar puntos y guión
        let valor = rut.replace(/\./g, '').replace(/-/g, '');
        
        // Obtener dígito verificador
        let dv = valor.slice(-1);
        let rutNumero = valor.slice(0, -1);
        
        // Formatear número
        rutNumero = rutNumero.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        
        // Retornar RUT formateado
        return rutNumero.length > 0 ? `${rutNumero}-${dv}` : '';
    }

    // Función para validar RUT chileno
    function validarRUT(rut) {
        if (!rut || rut.length < 8) return false;
        
        // Limpiar el RUT de puntos y guión
        rut = rut.replace(/\./g, '').replace(/-/g, '');
        
        // Obtener dígito verificador
        const dv = rut.slice(-1).toUpperCase();
        const rutBody = rut.slice(0, -1);
        
        // Calcular dígito verificador
        let suma = 0;
        let multiplicador = 2;
        
        for (let i = rutBody.length - 1; i >= 0; i--) {
            suma += parseInt(rutBody[i]) * multiplicador;
            multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
        }
        
        const dvEsperado = 11 - (suma % 11);
        const dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();
        
        return dv === dvCalculado;
    }

    // Event listener para el input del RUT
    const rutInput = document.getElementById('rut');
    rutInput.addEventListener('input', function(e) {
        let valor = e.target.value;
        
        // Eliminar cualquier carácter que no sea número, K o k
        valor = valor.replace(/[^\dKk]/g, '');
        
        if (valor.length > 0) {
            // Formatear el RUT mientras se escribe
            valor = formatearRUT(valor);
            e.target.value = valor;
        }
        
        validarCampo(e.target);
    });

    // Función para validar un campo
    function validarCampo(input) {
        const tipo = input.id;
        const valor = input.value.trim();
        const errorElement = input.nextElementSibling;
        
        // Validación especial para RUT
        if (tipo === 'rut') {
            if (!validarRUT(valor)) {
                mostrarError(input, 'RUT inválido');
                return false;
            }
        }
        
        // Validación especial para confirmar contraseña
        if (tipo === 'confirmPassword') {
            const password = document.getElementById('password').value;
            if (valor !== password) {
                mostrarError(input, 'Las contraseñas no coinciden');
                return false;
            }
        }
        
        // Validaciones generales
        if (validaciones[tipo]) {
            if (!validaciones[tipo].regex.test(valor)) {
                mostrarError(input, validaciones[tipo].mensaje);
                return false;
            }
        }
        
        // Si pasa todas las validaciones
        mostrarExito(input);
        return true;
    }

    function mostrarError(input, mensaje) {
        const errorElement = input.nextElementSibling;
        input.classList.remove('success');
        input.classList.add('error');
        errorElement.textContent = mensaje;
    }

    function mostrarExito(input) {
        const errorElement = input.nextElementSibling;
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.textContent = '';
    }

    // Event listeners para validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validarCampo(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validarCampo(this);
            }
        });
    });

    // Event listener para el envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let formValido = true;
        
        // Validar todos los campos antes de enviar
        inputs.forEach(input => {
            if (!validarCampo(input)) {
                formValido = false;
            }
        });
        
        if (formValido) {
            alert('Formulario enviado correctamente!');
            form.reset();
            inputs.forEach(input => {
                input.classList.remove('success');
            });
        }
    });
});
