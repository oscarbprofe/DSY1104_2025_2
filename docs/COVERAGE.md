# Pruebas de Cobertura con Jest

## Configuración de Cobertura

La cobertura de código está configurada en el archivo `jest.config.js` con los siguientes parámetros:

```javascript
{
  // Habilita la recolección de cobertura
  collectCoverage: true,
  
  // Directorio donde se guardarán los informes de cobertura
  coverageDirectory: 'coverage',
  
  // Archivos que se incluirán en el análisis de cobertura
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.jsx',
    '!src/vite-env.d.ts',
    '!src/tests/**',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**'
  ],
  
  // Umbrales mínimos de cobertura
  coverageThreshold: {
    global: {
      branches: 80,    // Cobertura de ramas (if/else, switch, etc.)
      functions: 80,   // Cobertura de funciones
      lines: 80,       // Cobertura de líneas de código
      statements: 80   // Cobertura de declaraciones
    }
  },
  
  // Tipos de reportes generados
  coverageReporters: ['text', 'lcov', 'html']
}
```

## Ejecutar Pruebas de Cobertura

Para ejecutar las pruebas con análisis de cobertura:

```bash
npm run test:coverage
```

Este comando:
1. Ejecutará todas las pruebas
2. Generará informes de cobertura
3. Creará una carpeta `coverage` con los resultados

## Interpretar los Resultados

### Informe en Consola

Al ejecutar las pruebas de cobertura, verás un informe en la consola similar a este:

```
-----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files       |   85.71 |    83.33 |   85.71 |   85.71 |                   
 components/    |   85.71 |    83.33 |   85.71 |   85.71 |                   
  Hero.jsx      |   85.71 |    83.33 |   85.71 |   85.71 | 15-20            
-----------------|---------|----------|---------|---------|-------------------
```

### Informe HTML

Para una vista más detallada:
1. Abre `coverage/lcov-report/index.html` en tu navegador
2. Este informe interactivo te permite:
   - Ver la cobertura por archivo
   - Identificar líneas no cubiertas
   - Navegar por la estructura del proyecto

## Métricas de Cobertura

- **Statements (Declaraciones)**: Porcentaje de declaraciones de código ejecutadas
- **Branches (Ramas)**: Porcentaje de ramas de código (if/else, switch) ejecutadas
- **Functions (Funciones)**: Porcentaje de funciones llamadas
- **Lines (Líneas)**: Porcentaje de líneas de código ejecutadas

## Mejorar la Cobertura

1. Identifica código no cubierto en el informe HTML
2. Añade pruebas para casos no cubiertos:
   - Diferentes props en componentes
   - Manejo de errores
   - Casos límite
   - Eventos de usuario
   
3. Enfócate en código crítico primero

## Buenas Prácticas

1. **No persigas el 100%**: 
   - 80% es generalmente un buen objetivo
   - Algunos casos son demasiado costosos de probar

2. **Calidad sobre cantidad**:
   - Pruebas significativas son mejores que pruebas superficiales
   - Enfócate en funcionalidad crítica

3. **Mantenimiento regular**:
   - Revisa informes de cobertura periódicamente
   - Actualiza pruebas cuando el código cambia

4. **Exclusiones sensatas**:
   - Excluye archivos de configuración
   - Excluye código generado
   - Excluye código de terceros

## Ignorar Archivos o Líneas

Para excluir código específico del análisis:

```javascript
/* istanbul ignore file */  // Ignora todo el archivo

/* istanbul ignore next */  // Ignora la siguiente declaración

/* istanbul ignore if */    // Ignora una rama if
```

## Integración Continua

Considera agregar pruebas de cobertura a tu pipeline de CI:
1. Establece umbrales mínimos de cobertura
2. Haz fallar el build si no se cumplen
3. Archiva los informes de cobertura como artefactos

## Resolución de Problemas

1. **Cobertura baja en un componente**:
   - Revisa los casos de uso no probados
   - Añade pruebas para diferentes props
   - Prueba manejo de errores

2. **Ramas no cubiertas**:
   - Identifica condiciones no probadas
   - Añade casos de prueba para cada rama

3. **Funciones no cubiertas**:
   - Asegúrate de llamar a todas las funciones
   - Prueba diferentes argumentos
   - Verifica eventos y callbacks