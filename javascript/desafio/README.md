# 🗡️ La Leyenda del Código Perdido - Desafío de Programación

## 📚 Instrucciones para Estudiantes

¡Bienvenidos al desafío más épico de JavaScript! Este juego está **INCOMPLETO** y es su misión terminarlo.

### 🎯 Objetivo
Completar las funciones JavaScript que faltan para que el juego funcione correctamente. Cada función incompleta está marcada con comentarios **`TODO:`** que les dirán exactamente qué hacer.

### 🛠️ Cómo empezar

1. **Abrir el archivo `script.js`** en su editor de código
2. **Buscar todos los comentarios `TODO:`** - hay 8 funciones que completar
3. **Leer las pistas y hints** que están en los comentarios
4. **Programar las funciones** siguiendo las instrucciones
5. **Probar el juego** abriendo `index.html` en el navegador

### 📋 Lista de Funciones a Completar

#### 🚀 Nivel Básico (Funciones de Inicialización)
1. **`inicializarJuego()`** - Configurar el juego al iniciar
2. **`setupCreacionPersonaje()`** - Crear botones de clase dinámicamente
3. **`seleccionarClase(claseKey)`** - Manejar selección de clase de héroe
4. **`iniciarAventura()`** - Validar datos y comenzar el juego

#### 🎮 Nivel Intermedio (Interfaz del Juego)
5. **`actualizarPanelHeroe()`** - Actualizar información del héroe en pantalla
6. **`actualizarBarraVida()`** - Calcular y mostrar la vida del héroe

#### ⚔️ Nivel Avanzado (Lógica de Desafíos)
7. **`setupDesafio1()`** - Configurar event listeners del primer desafío
8. **`verificarAcertijo(respuestaElegida)`** - Validar respuesta del acertijo poético
9. **`setupDesafio2()`** - Configurar el desafío de lógica matemática
10. **`verificarLogica()`** - Validar la secuencia numérica
11. **`presionarBotonMagico(color)`** - Manejar el ritual de secuencia de colores
12. **`verificarPreguntaFinal()`** - Validar la pregunta final del juego

### 💡 Conceptos de JavaScript que Practicarán

- **Manipulación del DOM**: `getElementById`, `querySelector`, `querySelectorAll`
- **Event Listeners**: `addEventListener`, manejo de eventos
- **Condicionales**: `if/else`, validaciones
- **Arrays**: `push()`, `forEach()`, comparaciones
- **Objetos**: Acceso a propiedades, `dataset`
- **Strings**: `trim()`, `toLowerCase()`, comparaciones
- **Números**: `parseInt()`, cálculos matemáticos
- **Funciones**: Parámetros, return, callbacks

### 🎯 Respuestas Correctas (Para Testing)

Pueden usar estas respuestas para probar que su código funciona:

1. **Desafío 1 (Acertijo Poético)**: `while`
2. **Desafío 2 (Secuencia Lógica)**: `16` (la secuencia es 2, 4, 8, 16, 32, 64)
3. **Desafío 3 (Ritual Mágico)**: Repetir la secuencia: Rojo → Azul → Verde → Amarillo
4. **Desafío 4 (Pregunta Final)**: `html` o `HTML`

### 🐛 Debugging y Testing

- **Abran la Consola del Navegador** (F12) para ver los mensajes de debug
- **Usen `console.log()`** para verificar valores de variables
- **El juego muestra mensajes** cuando encuentren funciones incompletas
- **Funciones de ayuda** están disponibles en `window.gameDebug`

### 🏆 Criterios de Evaluación

- ✅ **Funcionalidad**: ¿El juego funciona completamente?
- ✅ **Código Limpio**: ¿El código está bien organizado y comentado?
- ✅ **Buenas Prácticas**: ¿Usan correctly las funciones de JavaScript?
- ✅ **Manejo de Errores**: ¿Validan inputs del usuario?
- ✅ **Comprensión**: ¿Entienden lo que hace cada función?

### 🎮 Estructura del Juego

```
1. 👤 Creación de Personaje
   ├── Ingreso de nombre
   ├── Selección de clase (Mago, Guerrero, Explorador)
   └── Validación de datos

2. ⚔️ Cuatro Desafíos Épicos
   ├── 🌸 Acertijo Poético (while loops)
   ├── 🧠 Lógica Matemática (secuencias)
   ├── ⚡ Ritual Mágico (memory game)
   └── 👑 Pregunta Final (conocimiento web)

3. 🏆 Victoria o 💀 Game Over
```

### 🚀 Tips para el Éxito

1. **Lean TODOS los comentarios** antes de empezar a programar
2. **Trabajen función por función** - no intenten hacer todo de una vez
3. **Prueben cada función** después de completarla
4. **Usen las pistas** que están en los comentarios
5. **No tengan miedo de experimentar** - ¡pueden romper y arreglar!

### 🆘 Si se Atascan

1. Revisen los **console.log()** en la consola del navegador
2. Lean nuevamente las **pistas en los comentarios**
3. Comparen con las **funciones que SÍ están completas**
4. Pidan ayuda al **profesor o compañeros**

---

## 🎯 ¡Misión Especial!

Una vez que completen todas las funciones básicas, pueden intentar estos **desafíos extra**:

- 🎵 Agregar efectos de sonido
- ✨ Crear más animaciones CSS
- 🎨 Cambiar el tema visual
- 🏆 Agregar un sistema de puntuación
- 💾 Guardar progreso en localStorage

---

**¡Que comience la aventura! 🗡️✨**

*Recuerden: Los mejores programadores no son los que nunca cometen errores, sino los que aprenden de cada bug y siguen adelante.*
