# Manual de Configuración: Karma + Jasmine para Testing en React

## Introducción
Este manual te guiará en el proceso de configurar Karma (un ejecutor de tests) y Jasmine (un framework de testing) para probar componentes React. Aunque Jest es más común para React, este setup es útil para entender cómo funcionan las herramientas de testing a bajo nivel.

## Prerequisitos
- Node.js y npm instalados
- Un proyecto React existente
- Conocimientos básicos de JavaScript y React

## Paso 1: Instalar Dependencias Necesarias

```bash
# Instalar Karma y dependencias relacionadas
npm install --save-dev karma karma-cli karma-webpack

# Instalar Jasmine y el adaptador de Karma
npm install --save-dev jasmine karma-jasmine

# Instalar Babel y sus presets para React
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev babel-loader

# Instalar JSDOM para simular un navegador
npm install --save-dev jsdom karma-jsdom-launcher
```

## Paso 2: Configurar Babel
Crear un archivo `.babelrc` en la raíz del proyecto:

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }],
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}
```

## Paso 3: Configurar Karma
Crear un archivo `karma.conf.cjs` en la raíz del proyecto:

```javascript
module.exports = function(config) {
  config.set({
    // Base path para resolver patrones
    basePath: '',

    // Frameworks a utilizar
    frameworks: ['jasmine', 'webpack'],

    // Archivos a cargar
    files: [
      'src/**/*.test.jsx',
      'src/**/*.test.js'
    ],

    // Preprocesamiento de archivos
    preprocessors: {
      'src/**/*.test.jsx': ['webpack', 'coverage'],
      'src/**/*.test.js': ['webpack', 'coverage']
    },

    // Configuración de webpack
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: {
                      node: 'current'
                    }
                  }],
                  ['@babel/preset-react', {
                    runtime: 'automatic'
                  }]
                ]
              }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
          path: false,
          fs: false
        }
      }
    },

    // Reporteros para los resultados
    reporters: ['progress', 'coverage'],

    // Configuración del reporte de cobertura
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' }
      ]
    },

    // Puerto del servidor web
    port: 9876,

    // Habilitar colores en la salida
    colors: true,

    // Nivel de logging
    logLevel: config.LOG_INFO,

    // Observar cambios en archivos
    autoWatch: true,

    // Navegadores a utilizar
    browsers: ['jsdom'],

    // Modo de Integración Continua
    singleRun: false,

    // Nivel de concurrencia
    concurrency: Infinity
  })
}
```

## Paso 4: Configurar Scripts en package.json
Añadir los siguientes scripts a tu `package.json`:

```json
{
  "scripts": {
    "test": "karma start karma.conf.cjs",
    "test:single": "karma start karma.conf.cjs --single-run"
  }
}
```

## Paso 5: Escribir un Test Básico
Ejemplo de un archivo de test (`ComponentName.test.jsx`):

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  let container = null;
  let root = null;

  beforeEach(() => {
    // Configurar un elemento DOM como objetivo del render
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    // Limpieza después de cada test
    root.unmount();
    container.remove();
    container = null;
    root = null;
  });

  it('debería renderizarse sin errores', () => {
    root.render(<ComponentName />);
    // Aquí puedes añadir expectativas sobre el componente renderizado
  });
});
```

## Ejecutando los Tests

1. Para ejecutar los tests una sola vez:
```bash
npm run test:single
```

2. Para ejecutar los tests en modo observador (detecta cambios):
```bash
npm run test
```

## Entendiendo los Resultados

- Los tests exitosos se mostrarán en verde
- Los fallos se mostrarán en rojo con detalles del error
- Se generará un reporte de cobertura en la carpeta `coverage/`
  - Puedes abrir `coverage/html/index.html` en tu navegador para ver un reporte detallado

## Resolución de Problemas Comunes

1. **Error: Cannot find module '@babel/preset-react'**
   - Asegúrate de haber instalado todas las dependencias de Babel
   - Verifica que tu `.babelrc` esté correctamente configurado

2. **Error: No tests were found**
   - Verifica que tus archivos de test tengan la extensión correcta (.test.jsx)
   - Comprueba que los paths en karma.conf.cjs sean correctos

3. **Error: React is not defined**
   - Asegúrate de importar React en tus archivos de test
   - Verifica la configuración de babel-loader en karma.conf.cjs

## Consejos para Testing Efectivo

1. **Estructura de los Tests**
   - Usa `describe` para agrupar tests relacionados
   - Usa `it` o `test` para casos individuales
   - Usa `beforeEach` y `afterEach` para setup y limpieza

2. **Buenas Prácticas**
   - Test uno por uno los componentes
   - Limpia el DOM después de cada test
   - Mantén los tests simples y enfocados
   - Comienza con tests básicos de renderizado

3. **Cobertura de Código**
   - Aspira a una alta cobertura, pero no te obsesiones con el 100%
   - Prioriza la calidad de los tests sobre la cantidad
   - Asegúrate de probar los casos límite

## Recursos Adicionales
- [Documentación de Karma](https://karma-runner.github.io/)
- [Documentación de Jasmine](https://jasmine.github.io/)
- [Testing en React](https://reactjs.org/docs/testing.html)

## Consideraciones Importantes y Solución de Problemas Avanzados

### 1. Uso de className en lugar de class

En React, es crucial usar `className` en lugar de `class` para los atributos de clase CSS. Este es un error común que puede causar problemas de renderizado:

```jsx
// Incorrecto
<div class="mi-clase">...</div>

// Correcto
<div className="mi-clase">...</div>
```

### 2. Manejo de Asincronía en Tests

Los tests de componentes React pueden requerir manejo asíncrono debido a la naturaleza del renderizado. Hay varias formas de manejar esto:

```jsx
// Opción 1: Usando setTimeout
function renderComponent(message = "Test message") {
    return new Promise(resolve => {
        root.render(<Component message={message} />);
        // Dar tiempo suficiente para que React actualice el DOM
        setTimeout(resolve, 100);
    });
}

// Opción 2: Usando done callback de Jasmine
it('debería renderizar correctamente', (done) => {
    renderComponent().then(() => {
        // Realizar assertions
        done();
    });
});
```

### 3. Manejo de Selectores DOM

Es importante ser defensivo al trabajar con selectores DOM en los tests:

```jsx
it('debería tener elementos correctos', (done) => {
    renderComponent().then(() => {
        const container = document.querySelector('.mi-contenedor');
        expect(container).toBeTruthy();

        if (container) {
            const elemento = container.querySelector('.mi-elemento');
            expect(elemento).toBeTruthy();
            // Más assertions...
        }
        done();
    });
});
```

### 4. Versiones Compatibles de React

Asegúrate de que las versiones de `react` y `react-dom` sean exactamente las mismas para evitar problemas de compatibilidad:

```bash
# Verificar versiones actuales
npm list react
npm list react-dom

# Si son diferentes, actualizar a la misma versión
npm install react@X.X.X react-dom@X.X.X
```

### 5. Problemas con JSDOM y MessageChannel

Si encuentras errores relacionados con MessageChannel en JSDOM, considera estas soluciones:

1. Usar un enfoque más simple sin `act`:
```jsx
// En lugar de usar act
import { act } from 'react-dom/test-utils';

// Usar setTimeout y Promises
function renderComponent() {
    return new Promise(resolve => {
        root.render(<Component />);
        setTimeout(resolve, 100);
    });
}
```

2. Configurar un polyfill para MessageChannel si es necesario.

### 6. Problemas de Resolución de Módulos

Si webpack no puede resolver los módulos correctamente, asegúrate de que la configuración de resolve incluya los directorios correctos:

```javascript
// En karma.conf.cjs
webpack: {
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src'],
        fallback: {
            path: false,
            fs: false
        }
    }
}
```

### 7. Manejo de Atributos href en Tests

Cuando pruebes enlaces, es mejor usar getAttribute('href') en lugar de la propiedad href directamente:

```jsx
it('debería tener los enlaces correctos', (done) => {
    renderComponent().then(() => {
        const links = container.querySelectorAll('a');
        expect(links[0].getAttribute('href')).toBe('./ruta.html');
        done();
    });
});
```

### 8. Limpieza Adecuada

Es crucial realizar una limpieza adecuada después de cada test para evitar efectos secundarios:

```jsx
afterEach(() => {
    if (root) {
        root.unmount();
    }
    if (container) {
        container.remove();
    }
    container = null;
    root = null;
});
```

### 9. Debugging de Tests

Para depurar tests fallidos, puedes usar:

```javascript
// En karma.conf.cjs
logLevel: config.LOG_DEBUG,
browsers: ['jsdom'],
browserConsoleLogOptions: {
    level: 'debug',
    format: '%b %T: %m',
    terminal: true
}
```

### 10. Optimización de Performance

Para mejorar el rendimiento de los tests:

1. Usar patrones específicos en los archivos de test:
```javascript
files: [
    { pattern: 'src/**/*.test.jsx', watched: false },
    { pattern: 'src/**/*.test.js', watched: false }
]
```

2. Configurar el nivel de concurrencia apropiadamente:
```javascript
concurrency: 1  // Para tests que requieren un entorno más controlado
```

Estas consideraciones ayudarán a evitar problemas comunes y a mantener un conjunto de tests más robusto y mantenible.