# Guía de Configuración de Jest para React

Esta guía detalla los pasos necesarios para configurar y ejecutar pruebas unitarias con Jest y React Testing Library en un proyecto React.

## 1. Instalación de Dependencias

Instala las dependencias necesarias ejecutando:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @babel/preset-react @babel/preset-env identity-obj-proxy
```

Estas dependencias incluyen:
- `jest`: El framework de testing
- `@testing-library/react`: Utilidades para testing de componentes React
- `@testing-library/jest-dom`: Matchers adicionales para Jest
- `jest-environment-jsdom`: Entorno DOM para Jest
- `@babel/preset-react` y `@babel/preset-env`: Presets de Babel para React
- `identity-obj-proxy`: Para manejar importaciones de CSS en los tests

## 2. Configuración de Jest

### 2.1 Crear jest.config.js

Crea un archivo `jest.config.js` en la raíz del proyecto:

```javascript
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
```

### 2.2 Configurar Babel

Crea un archivo `.babelrc` en la raíz:

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", {"runtime": "automatic"}]
  ]
}
```

### 2.3 Configurar Mock para archivos estáticos

Crea un archivo `__mocks__/fileMock.js`:

```javascript
export default 'test-file-stub';
```

### 2.4 Configurar setup de testing

Crea un archivo `test/setup.js`:

```javascript
import '@testing-library/jest-dom';

import { configure } from '@testing-library/react';

configure({
  testIdAttribute: 'data-testid',
});
```

## 3. Configuración de Scripts

Añade los siguientes scripts en tu `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## 4. Estructura de los Tests

Los archivos de test deben seguir estas convenciones:
- Ubicarlos junto a los componentes que prueban o en una carpeta `__tests__`
- Nombrarlos con el sufijo `.test.jsx` o `.spec.jsx`

Ejemplo de estructura:
```
src/
  components/
    MiComponente.jsx
    MiComponente.test.jsx
```

## 5. Ejemplo de un Test

```javascript
import { render, screen } from '@testing-library/react';
import MiComponente from './MiComponente';

describe('MiComponente', () => {
  test('renderiza correctamente', () => {
    render(<MiComponente />);
    
    expect(screen.getByText('Mi Texto')).toBeInTheDocument();
  });
});
```

## 6. Ejecutar Tests

- Para ejecutar los tests una vez:
  ```bash
  npm test
  ```

- Para ejecutar los tests en modo watch (recomendado durante desarrollo):
  ```bash
  npm run test:watch
  ```

## 7. Matchers Comunes

React Testing Library proporciona varios matchers útiles:

```javascript
// Verificar presencia de elementos
expect(element).toBeInTheDocument();
expect(element).toBeVisible();

// Verificar contenido
expect(element).toHaveTextContent('texto');
expect(element).toHaveAttribute('href', '/ruta');

// Verificar estilos
expect(element).toHaveClass('mi-clase');
expect(element).toHaveStyle({ color: 'red' });
```

## 8. Buenas Prácticas

1. Prueba el comportamiento, no la implementación
2. Usa roles y texto para seleccionar elementos
3. Evita seleccionar por IDs o clases específicas
4. Mantén los tests simples y enfocados
5. Sigue el patrón AAA (Arrange-Act-Assert)
6. Usa data-testid solo cuando sea necesario

## 9. Troubleshooting

Problemas comunes y soluciones:

1. **Error: Cannot find module '@babel/runtime/helpers/...'**
   ```bash
   npm install --save-dev @babel/runtime
   ```

2. **Error: SyntaxError: Cannot use import statement outside a module**
   Asegúrate de tener "type": "module" en tu package.json

3. **Error: Cannot find module 'identity-obj-proxy'**
   ```bash
   npm install --save-dev identity-obj-proxy
   ```