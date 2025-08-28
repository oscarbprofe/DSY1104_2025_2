// productos_pasteleria.js
// Estructura sugerida por el backlog detallado:
// {
//   code,               // p.ej. "TC001"
//   nombre,             // p.ej. "Torta Cuadrada de Chocolate"
//   categoriaId,        // "TC", "TT", "PI", "PSA", "PT", "PG", "PV", "TE"
//   tipoForma,          // "cuadrada" | "circular" | null
//   tamanosDisponibles, // ["S","M","L"] o ["unidad"] para individuales
//   precioCLP,          // entero CLP (sin separadores)
//   stock,              // entero >= 0
//   personalizable,     // boolean (mensaje en torta)
//   maxMsgChars,        // int (50 recomendado si personalizable=true)
//   descripcion,        // string
//   etiquetas,          // ["sin_azucar", "sin_gluten", "vegana", ...]
//   imagen              // ruta sugerida en /assets/products/*.jpg
// }

export const PRODUCTS_PS = [
  // TORTAS CUADRADAS (TC)
  {
    code: "TC001",
    nombre: "Torta Cuadrada de Chocolate",
    categoriaId: "TC",
    tipoForma: "cuadrada",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)", "L (20 porciones)"],
    precioCLP: 45000,
    stock: 10,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Deliciosa torta de chocolate con ganache y toque de avellanas. Ideal para personalizar con mensaje.",
    etiquetas: ["tradicional"],
    imagen: "assets/products/tc001.jpg"
  },
  {
    code: "TC002",
    nombre: "Torta Cuadrada de Frutas",
    categoriaId: "TC",
    tipoForma: "cuadrada",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)", "L (20 porciones)"],
    precioCLP: 50000,
    stock: 8,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Bizcocho de vainilla con frutas frescas y crema chantilly.",
    etiquetas: ["tradicional", "frutas"],
    imagen: "assets/products/tc002.jpg"
  },

  // TORTAS CIRCULARES (TT)
  {
    code: "TT001",
    nombre: "Torta Circular de Vainilla",
    categoriaId: "TT",
    tipoForma: "circular",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)", "L (20 porciones)"],
    precioCLP: 40000,
    stock: 12,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Vainilla clásica rellena con crema pastelera y glaseado dulce.",
    etiquetas: ["tradicional"],
    imagen: "assets/products/tt001.jpg"
  },
  {
    code: "TT002",
    nombre: "Torta Circular de Manjar",
    categoriaId: "TT",
    tipoForma: "circular",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)", "L (20 porciones)"],
    precioCLP: 42000,
    stock: 9,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Clásica torta chilena con manjar y nueces.",
    etiquetas: ["tradicional"],
    imagen: "assets/products/tt002.jpg"
  },

  // POSTRES INDIVIDUALES (PI)
  {
    code: "PI001",
    nombre: "Mousse de Chocolate",
    categoriaId: "PI",
    tipoForma: null,
    tamanosDisponibles: ["unidad"],
    precioCLP: 5000,
    stock: 40,
    personalizable: false,
    maxMsgChars: 0,
    descripcion: "Postre cremoso con chocolate de alta calidad.",
    etiquetas: ["chocolate"],
    imagen: "assets/products/pi001.jpg"
  },
  {
    code: "PI002",
    nombre: "Tiramisú Clásico",
    categoriaId: "PI",
    tipoForma: null,
    tamanosDisponibles: ["unidad"],
    precioCLP: 5500,
    stock: 36,
    personalizable: false,
    maxMsgChars: 0,
    descripcion: "Café, mascarpone y cacao en un equilibrio perfecto.",
    etiquetas: ["clasico"],
    imagen: "assets/products/pi002.jpg"
  },

  // PRODUCTOS SIN AZÚCAR (PSA)
  {
    code: "PSA001",
    nombre: "Torta Sin Azúcar de Naranja",
    categoriaId: "PSA",
    tipoForma: "circular",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)"],
    precioCLP: 48000,
    stock: 7,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Endulzada naturalmente para quienes buscan opciones más saludables.",
    etiquetas: ["sin_azucar"],
    imagen: "assets/products/psa001.jpg"
  },
  {
    code: "PSA002",
    nombre: "Cheesecake Sin Azúcar",
    categoriaId: "PSA",
    tipoForma: "circular",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)"],
    precioCLP: 47000,
    stock: 6,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Suave y cremoso, ideal para disfrutar sin culpa.",
    etiquetas: ["sin_azucar"],
    imagen: "assets/products/psa002.jpg"
  },

  // PASTELERÍA TRADICIONAL (PT)
  {
    code: "PT001",
    nombre: "Empanada de Manzana",
    categoriaId: "PT",
    tipoForma: null,
    tamanosDisponibles: ["unidad"],
    precioCLP: 3000,
    stock: 50,
    personalizable: false,
    maxMsgChars: 0,
    descripcion: "Rellena de manzanas especiadas, perfecta para el desayuno o merienda.",
    etiquetas: ["tradicional"],
    imagen: "assets/products/pt001.jpg"
  },
  {
    code: "PT002",
    nombre: "Tarta de Santiago",
    categoriaId: "PT",
    tipoForma: "circular",
    tamanosDisponibles: ["S (8 porciones)"],
    precioCLP: 6000,
    stock: 22,
    personalizable: false,
    maxMsgChars: 0,
    descripcion: "Clásica tarta de almendras, azúcar y huevos.",
    etiquetas: ["tradicional"],
    imagen: "assets/products/pt002.jpg"
  },

  // PRODUCTOS SIN GLUTEN (PG)
  {
    code: "PG001",
    nombre: "Brownie Sin Gluten",
    categoriaId: "PG",
    tipoForma: "cuadrada",
    tamanosDisponibles: ["unidad"],
    precioCLP: 4000,
    stock: 35,
    personalizable: false,
    maxMsgChars: 0,
    descripcion: "Denso y sabroso, libre de gluten.",
    etiquetas: ["sin_gluten", "chocolate"],
    imagen: "assets/products/pg001.jpg"
  },
  {
    code: "PG002",
    nombre: "Pan Sin Gluten",
    categoriaId: "PG",
    tipoForma: null,
    tamanosDisponibles: ["unidad"],
    precioCLP: 3500,
    stock: 28,
    personalizable: false,
    maxMsgChars: 0,
    descripcion: "Suave y esponjoso, ideal para sándwiches.",
    etiquetas: ["sin_gluten"],
    imagen: "assets/products/pg002.jpg"
  },

  // PRODUCTOS VEGANA (PV)
  {
    code: "PV001",
    nombre: "Torta Vegana de Chocolate",
    categoriaId: "PV",
    tipoForma: "circular",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)"],
    precioCLP: 50000,
    stock: 6,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Húmeda y deliciosa, sin ingredientes de origen animal.",
    etiquetas: ["vegana", "chocolate"],
    imagen: "assets/products/pv001.jpg"
  },
  {
    code: "PV002",
    nombre: "Galletas Veganas de Avena",
    categoriaId: "PV",
    tipoForma: null,
    tamanosDisponibles: ["unidad"],
    precioCLP: 4500,
    stock: 40,
    personalizable: false,
    maxMsgChars: 0,
    descripcion: "Crujientes y sabrosas, perfectas para colación.",
    etiquetas: ["vegana"],
    imagen: "assets/products/pv002.jpg"
  },

  // TORTAS ESPECIALES (TE)
  {
    code: "TE001",
    nombre: "Torta Especial de Cumpleaños",
    categoriaId: "TE",
    tipoForma: "circular",
    tamanosDisponibles: ["S (8 porciones)", "M (12 porciones)", "L (20 porciones)"],
    precioCLP: 55000,
    stock: 7,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Pensada para celebrar: admite decoraciones temáticas y mensaje.",
    etiquetas: ["especial", "cumpleaños"],
    imagen: "assets/products/te001.jpg"
  },
  {
    code: "TE002",
    nombre: "Torta Especial de Boda",
    categoriaId: "TE",
    tipoForma: "circular",
    tamanosDisponibles: ["M (12 porciones)", "L (20 porciones)"],
    precioCLP: 60000,
    stock: 4,
    personalizable: true,
    maxMsgChars: 50,
    descripcion: "Elegante y memorable; lista para personalizar.",
    etiquetas: ["especial", "boda"],
    imagen: "assets/products/te002.jpg"
  }
];
