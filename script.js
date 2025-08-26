// --- Código JS movido desde index.html ---

function getPersonas() {
  const personas = localStorage.getItem('personas');
  return personas ? JSON.parse(personas) : [];
}

function setPersonas(personas) {
  localStorage.setItem('personas', JSON.stringify(personas));
}

function renderPersonasTable() {
  const personas = getPersonas();
  let html = `
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
  `;
  personas.forEach((p, idx) => {
    html += `
      <tr>
        <td>${p.nombre}</td>
        <td>${p.edad}</td>
        <td>
          <button onclick="editarPersona(${idx})">Editar</button>
          <button onclick="eliminarPersona(${idx})">Eliminar</button>
        </td>
      </tr>
    `;
  });
  html += `
      </tbody>
    </table>
    <button onclick="crearPersona()">Crear persona</button>
  `;
  document.getElementById('personas-container').innerHTML = html;
}

function crearPersona() {
  const nombre = prompt('Nombre:');
  const edad = prompt('Edad:');
  if (nombre && edad) {
    const personas = getPersonas();
    personas.push({ nombre, edad });
    setPersonas(personas);
    renderPersonasTable();
  }
}

function editarPersona(idx) {
  const personas = getPersonas();
  const persona = personas[idx];
  const nombre = prompt('Nuevo nombre:', persona.nombre);
  const edad = prompt('Nueva edad:', persona.edad);
  if (nombre && edad) {
    personas[idx] = { nombre, edad };
    setPersonas(personas);
    renderPersonasTable();
  }
}

function eliminarPersona(idx) {
  const personas = getPersonas();
  if (confirm('¿Eliminar esta persona?')) {
    personas.splice(idx, 1);
    setPersonas(personas);
    renderPersonasTable();
  }
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

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  renderPersonasTable();
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 22 },
    { nombre: "Carlos", edad: 28 },
    { nombre: "Sofía", edad: 27 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Lucía", edad: 24 },
    { nombre: "Javier", edad: 31 },
    { nombre: "Elena", edad: 29 },
    { nombre: "Miguel", edad: 26 }
];


    console.log(personas.filter(persona => persona.edad > 25));
    console.log(personas.map(persona => persona.nombre));
    console.log(personas.reduce((acum, persona) => acum + persona.edad, 0));
    console.log(personas.find(persona => persona.nombre === "María"));

localStorage.setItem('personas', JSON.stringify(personas));
