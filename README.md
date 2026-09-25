# Documentación de Funciones y Pruebas Unitarias (Jest)

¡Hola! Bienvenido a este proyecto. En este archivo `README.md` explicaremos de manera muy sencilla qué hace nuestro código, cómo nos aseguramos de que funcione correctamente mediante pruebas (tests) y qué aprendimos en el proceso.

---

## 1. ¿Qué hace cada función?

El archivo `funciones.js` contiene 5 pequeñas herramientas (funciones) diseñadas para resolver problemas cotidianos de lógica de programación:

1. **`calcularDescuento(precio, porcentaje)`**: Toma un precio inicial y le aplica un porcentaje de descuento. Si el porcentaje es menor a 0 o mayor a 100, muestra un error. Si todo está bien, devuelve el precio final a pagar.
2. **`validarPassword(password)`**: Verifica si una contraseña es segura. Sus reglas son: no tener espacios en blanco, tener al menos 8 caracteres de largo y contener por lo menos un número.
3. **`celsiusAFahrenheit(celsius)`**: Recibe una temperatura en grados Celsius y la convierte matemáticamente a grados Fahrenheit.
4. **`esMayorDeEdad(edad)`**: Revisa si la edad introducida es igual o mayor a 18 (devolviendo verdadero o falso). Además, incluye un seguro: si le envías algo que no sea un número (como texto), interrumpe la ejecución lanzando un error intencional.
5. **`generarNombreCompleto(nombre, apellido)`**: Toma un nombre y un apellido y los une en una sola frase. Si alguno de los dos campos está vacío, detiene el programa lanzando un error.

---

## 2. ¿Qué valida cada prueba?

Usamos **Jest** para someter a nuestras funciones a diferentes escenarios. Las pruebas validan el comportamiento utilizando los siguientes métodos:

* **`.toBe(valor)`**: Valida que la función devuelva exactamente el número o texto esperado.
* **`.toBeTruthy()`**: Valida que la función devuelva un valor "verdadero" (`true`). Lo usamos para contraseñas correctas o confirmación de mayoría de edad.
* **`.toBeFalsy()`**: Valida que la función devuelva un valor "falso" (`false`). Lo usamos para contraseñas inválidas o minoría de edad.
* **`.toThrow()`**: Valida que la función atrape datos inválidos y genere una excepción/error para proteger el sistema.

---

## 3. Tabla de Casos de Prueba y Resultados

A continuación, se detallan los escenarios a los que sometimos nuestro código.

*Nota: Todas las pruebas listadas pasaron exitosamente (`✓`) según los resultados obtenidos en la consola.*

| Función | Caso de prueba (Escenario) | Entrada | Resultado esperado | Resultado obtenido |
| :--- | :--- | :--- | :--- | :--- |
| `calcularDescuento` | Caso correcto | `100, 20` | `80` | `80` (Exitoso) |
| `calcularDescuento` | Caso correcto | `250, 15` | `212.5` | `212.5` (Exitoso) |
| `calcularDescuento` | Valor límite (Sin descuento) | `100, 0` | `100` | `100` (Exitoso) |
| `calcularDescuento` | Valor límite (Mitad de precio) | `100, 50` | `50` | `50` (Exitoso) |
| `calcularDescuento` | Valor límite (Producto gratis) | `100, 100` | `0` | `0` (Exitoso) |
| `validarPassword` | Caso correcto | `"secreta123!"` | `true` (Verdadero) | `true` (Exitoso) |
| `validarPassword` | Valor límite (Exactamente 8 caracteres) | `"A1b!5678"` | `true` (Verdadero) | `true` (Exitoso) |
| `validarPassword` | Caso inválido (Muy corta) | `"pass12"` | `false` (Falso) | `false` (Exitoso) |
| `validarPassword` | Caso inválido (Sin números) | `"password"` | `false` (Falso) | `false` (Exitoso) |
| `validarPassword` | Combinación (Espacios extremos) | `" Passw0rd1! "`| `false` (Falso) | `false` (Exitoso) |
| `celsiusAFahrenheit`| Caso correcto | `100` | `212` | `212` (Exitoso) |
| `celsiusAFahrenheit`| Valor límite (Cero grados)* | `0` | `32` | `32` (Exitoso) |
| `celsiusAFahrenheit`| Combinaciones (Decimales) | `37.5` | `99.5` | `99.5` (Exitoso) |
| `esMayorDeEdad` | Caso correcto | `25` | `true` (Verdadero) | `true` (Exitoso) |
| `esMayorDeEdad` | Valor límite (Límite exacto) | `18` | `true` (Verdadero) | `true` (Exitoso) |
| `esMayorDeEdad` | Valor límite (Recién nacido) | `0` | `false` (Falso) | `false` (Exitoso) |
| `esMayorDeEdad` | Caso inválido (Texto en vez de número) | `"dieciocho"` | `Error / Excepción` | `Error` (Exitoso) |
| `generarNombreCompleto`| Caso correcto | `"Juan", "Pérez"` | `"Juan Pérez"` | `"Juan Pérez"` (Exitoso) |
| `generarNombreCompleto`| Valor límite (Una sola letra) | `"A", "B"` | `"A B"` | `"A B"` (Exitoso) |
| `generarNombreCompleto`| Caso inválido (Campos vacíos) | `"", ""` | `Error / Excepción` | `Error` (Exitoso) |
| `generarNombreCompleto`| Combinaciones (Nombres complejos)| `"Elon", "Musk X Æ A-12"`| `"Elon Musk X Æ A-12"`| `"Elon Musk X Æ A-12"` (Exitoso)|

*(Nota: En el código de pruebas de temperatura existe un test cuyo título menciona `100` grados, pero en el código prueba `0`. El resultado esperado y obtenido coinciden con la prueba real de `0`).*

---

## 4. Problemas encontrados durante el desarrollo

Durante la creación de este código y sus pruebas, nos enfrentamos a desafíos normales del desarrollo de software (TDD):

1. **Captura de errores (`toThrow`)**: Al principio, las pruebas que esperaban un error fallaban porque llamábamos a la función directamente en el `expect()`. Aprendimos que Jest requiere envolver estas llamadas dentro de una función anónima o función flecha `() => { ... }` para poder atrapar el error sin que el programa se rompa prematuramente.
2. **Validación de reglas de negocio faltantes**: Nos topamos con el error *"Received function did not throw"*. Esto significaba que nuestras pruebas estaban bien, pero a las funciones (`esMayorDeEdad` y `generarNombreCompleto`) les faltaba el código interno (`throw new Error`) para rechazar los datos no válidos. Hubo que agregarlo.
3. **Las Expresiones Regulares (Regex)**: Tuvimos que ajustar la lógica de la contraseña. Inicialmente, las contraseñas con espacios pasaban como válidas porque la expresión regular (`/^(?=.*\d).{8,}$/`) solo exigía números y longitud, pero no prohibía los espacios. Lo solucionamos agregando un validador manual `.includes(" ")` para rechazar los espacios antes de aplicar la Regex.
4. **Coherencia en los títulos**: Se presentaron desajustes entre lo que describía el texto de la prueba y lo que el código realmente ejecutaba (por ejemplo, describir Kelvin o Fahrenheit, pero ejecutar funciones de Celsius).

---

## 5. Conclusión

Este proyecto demuestra que escribir código no se trata solo de hacer que una función sume o concatene valores, sino de prever **qué pasa cuando el usuario introduce datos incorrectos**. A través de Jest y la metodología de desarrollo guiado por pruebas (TDD), logramos construir 5 funciones robustas que no solo cumplen su objetivo principal, sino que están preparadas para gestionar espacios en blanco, tipos de datos incorrectos y cadenas vacías. ¡Todas nuestras pruebas están en verde!
