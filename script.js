// --- Código JS para gestión de personas con estilo ejecutivo ---

function getPersonas() {
  const personas = localStorage.getItem('personas');
  return personas ? JSON.parse(personas) : [];
}

function setPersonas(personas) {
  localStorage.setItem('personas', JSON.stringify(personas));
}

function renderPersonasTable() {
  const personas = getPersonas();
  
  if (personas.length === 0) {
    // Estado vacío elegante
    document.getElementById('personas-container').innerHTML = `
      <h2>Directorio Ejecutivo</h2>
      <h3>Gestión profesional de contactos corporativos</h3>
      <div class="personas-empty">
        <div class="personas-empty-icon">👥</div>
        <div class="personas-empty-title">Sin personas registradas</div>
        <div class="personas-empty-subtitle">Agrega ejecutivos y profesionales a tu directorio</div>
        <button class="btn-agregar-persona" onclick="crearPersona()">
          + Agregar Primera Persona
        </button>
      </div>
    `;
    return;
  }

  // Generar HTML con estilo ejecutivo
  let html = `
    <h2>Directorio Ejecutivo</h2>
    <h3>Gestión profesional de contactos corporativos</h3>
    <div class="personas-grid">
  `;
  
  personas.forEach((p, idx) => {
    // Generar iniciales para el avatar
    const iniciales = p.nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
    // Generar cargo y empresa ficticios basados en la edad (para demo)
    const cargos = ['CEO', 'CTO', 'CFO', 'Director', 'Manager', 'VP', 'Presidente', 'Gerente'];
    const empresas = ['TechCorp', 'InnovaSoft', 'GlobalTech', 'DataSystems', 'CloudWorks', 'DigitalPro'];
    const cargo = cargos[idx % cargos.length];
    const empresa = empresas[idx % empresas.length];
    const email = `${p.nombre.toLowerCase().replace(' ', '.')}@${empresa.toLowerCase()}.com`;
    
    html += `
      <div class="persona-card">
        <div class="persona-avatar">${iniciales}</div>
        <div class="persona-info">
          <div class="persona-nombre">${p.nombre}</div>
          <div class="persona-cargo">${cargo}</div>
          <div class="persona-empresa">${empresa}</div>
          <div class="persona-email">${email}</div>
          <div class="persona-acciones">
            <button class="btn-ejecutivo btn-contactar" onclick="contactarPersona(${idx})">
              Contactar
            </button>
            <button class="btn-ejecutivo btn-perfil" onclick="editarPersona(${idx})">
              Editar
            </button>
            <button class="btn-ejecutivo btn-perfil" onclick="eliminarPersona(${idx})" style="background: rgba(231, 76, 60, 0.1); color: #e74c3c; border-color: rgba(231, 76, 60, 0.3);">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    `;
  });
  
  html += `
    </div>
    <div style="text-align: center; margin-top: 2rem;">
      <button class="btn-agregar-persona" onclick="crearPersona()">
        + Agregar Nueva Persona
      </button>
    </div>
  `;
  
  document.getElementById('personas-container').innerHTML = html;
}

function crearPersona() {
  const nombre = prompt('Nombre completo:');
  const edad = prompt('Edad:');
  if (nombre && edad && !isNaN(edad)) {
    const personas = getPersonas();
    personas.push({ nombre: nombre.trim(), edad: parseInt(edad) });
    setPersonas(personas);
    renderPersonasTable();
    
    // Mostrar notificación de éxito
    mostrarNotificacion(`✅ ${nombre} ha sido agregado al directorio ejecutivo`, 'success');
  } else if (nombre || edad) {
    mostrarNotificacion('❌ Por favor, ingresa un nombre válido y una edad numérica', 'error');
  }
}

function contactarPersona(idx) {
  const personas = getPersonas();
  const persona = personas[idx];
  
  // Simular contacto ejecutivo
  const opciones = [
    'Enviar email corporativo',
    'Programar reunión ejecutiva', 
    'Llamada telefónica',
    'Mensaje de LinkedIn'
  ];
  
  const opcion = prompt(`Contactar a ${persona.nombre}:\n\n${opciones.map((op, i) => `${i+1}. ${op}`).join('\n')}\n\nSelecciona una opción (1-4):`);
  
  if (opcion && opcion >= 1 && opcion <= 4) {
    mostrarNotificacion(`📞 ${opciones[opcion-1]} programado con ${persona.nombre}`, 'info');
  }
}

function editarPersona(idx) {
  const personas = getPersonas();
  const persona = personas[idx];
  const nombre = prompt('Nuevo nombre:', persona.nombre);
  const edad = prompt('Nueva edad:', persona.edad);
  if (nombre && edad && !isNaN(edad)) {
    personas[idx] = { nombre: nombre.trim(), edad: parseInt(edad) };
    setPersonas(personas);
    renderPersonasTable();
    mostrarNotificacion(`✏️ ${nombre} ha sido actualizado en el directorio`, 'info');
  } else if (nombre || edad) {
    mostrarNotificacion('❌ Por favor, ingresa datos válidos', 'error');
  }
}

function eliminarPersona(idx) {
  const personas = getPersonas();
  const persona = personas[idx];
  
  // Confirmación ejecutiva más elegante
  const confirmacion = confirm(`¿Estás seguro de eliminar a ${persona.nombre} del directorio ejecutivo?\n\nEsta acción no se puede deshacer.`);
  
  if (confirmacion) {
    const nombreEliminado = persona.nombre;
    personas.splice(idx, 1);
    setPersonas(personas);
    renderPersonasTable();
    mostrarNotificacion(`🗑️ ${nombreEliminado} ha sido eliminado del directorio`, 'error');
  }
}

function mostrarNotificacion(mensaje, tipo = 'info') {
  // Crear notificación ejecutiva
  const notificacion = document.createElement('div');
  notificacion.className = `notificacion-ejecutiva ${tipo}`;
  notificacion.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${tipo === 'success' ? 'linear-gradient(135deg, #2ecc71, #27ae60)' : 
                tipo === 'error' ? 'linear-gradient(135deg, #e74c3c, #c0392b)' : 
                'linear-gradient(135deg, #3498db, #2980b9)'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 1000;
    font-weight: 500;
    backdrop-filter: blur(10px);
    animation: slideInRight 0.3s ease-out;
    max-width: 300px;
  `;
  notificacion.textContent = mensaje;
  
  document.body.appendChild(notificacion);
  
  // Auto-eliminar después de 3 segundos
  setTimeout(() => {
    notificacion.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => notificacion.remove(), 300);
  }, 3000);
}

function restaurarFondoNavBar() {
  var navbar = document.getElementById('nav-bar');
  if (navbar) {
    navbar.style.background = ""; // Quita el fondo personalizado
  }
}

function cambiarFondoNavBar() {
  var navbar = document.getElementById('nav-bar');
  if (navbar) {
    navbar.style.background = '#3498db'; // color azul moderno
  }
}

// Agregar estilos para las notificaciones
const estilosNotificacion = document.createElement('style');
estilosNotificacion.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(estilosNotificacion);

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  renderPersonasTable();
  
  // Configurar navegación móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});

// Datos de ejemplo para el localStorage
const personasEjemplo = [
  { nombre: "Ana García", edad: 35 },
  { nombre: "Luis Martínez", edad: 42 },
  { nombre: "María Rodriguez", edad: 38 },
  { nombre: "Carlos Silva", edad: 45 },
  { nombre: "Sofía López", edad: 33 },
  { nombre: "Pedro Hernández", edad: 41 },
  { nombre: "Lucía Fernández", edad: 36 },
  { nombre: "Javier González", edad: 39 }
];

// Cargar datos de ejemplo si no existen
if (localStorage.getItem('personas') === null) {
  localStorage.setItem('personas', JSON.stringify(personasEjemplo));
}

// Funciones de ejemplo para otros usos
console.log("Personas cargadas:", getPersonas());
console.log("Personas mayores de 35:", getPersonas().filter(persona => persona.edad > 35));
console.log("Nombres de personas:", getPersonas().map(persona => persona.nombre));
console.log("Edad promedio:", getPersonas().reduce((acum, persona) => acum + persona.edad, 0) / getPersonas().length);
console.log("Persona específica:", getPersonas().find(persona => persona.nombre.includes("María")));
