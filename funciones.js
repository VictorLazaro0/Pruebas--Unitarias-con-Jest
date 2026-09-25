
function calcularDescuento(precio,porcentaje) {
   

   if (porcentaje < 0 || porcentaje > 100 ) {
    console.log("Porcentaje inavalido");
    return
   }
  let descuento = (precio * porcentaje )/ 100;
  // 3. Restamos correctamente: Precio Original - El Descuento
   let total = precio - descuento
   
    
    console.log("El precio final es: $" + total);
   return total;
}
calcularDescuento(1000, 20); // 800
calcularDescuento(500, 10); // 450
calcularDescuento(300, 120); // "Porcentaje inválido

 function validarPassword(password) {
    // 1. Validar que no contenga espacios (ni en los extremos ni en el medio)
    if (password.includes(" ")) {
        return false;
    }
     const regexPassword = /^(?=.*\d).{8,}$/;
     //
     
     if(regexPassword.test(password)){
        return true;
     }else {
        return false ;
     }

}//valida 
validarPassword("abc12345"); // true
validarPassword("abcdef"); // false
validarPassword("12345678"); // true


function celsiusAFahrenheit(celsius) {
    let calculo = (celsius * 9/5) +32
    return calculo;
}
celsiusAFahrenheit(0); // 32
celsiusAFahrenheit(25); // 77
celsiusAFahrenheit(-10); // 14

function esMayorDeEdad(edad) {
    if (typeof edad !== 'number') {
        throw new Error("La edad introducida debe ser un número");
    }
   // 2. Lógica normal si es un número
    return edad >= 18;
}
esMayorDeEdad(18); // true
esMayorDeEdad(25); // true
esMayorDeEdad(16); // false


function generarNombreCompleto(nombre, apellido){
    // 1. Validar que los datos no estén vacíos
    if (nombre === "" || apellido === "") {
        throw new Error("El nombre y el apellido no pueden estar vacíos");
    }
    let nombreCompleto  = `${nombre} ${apellido}`; 
    return nombreCompleto ;
}




//
// Pruebas de Password
console.log(validarPassword("abc12345")); // Muestra: true
console.log(validarPassword("abcdef"));   // Muestra: false
console.log(validarPassword("12345678")); // Muestra: true

// Pruebas de Temperatura
console.log(celsiusAFahrenheit(0));   // Muestra: 32
console.log(celsiusAFahrenheit(25));  // Muestra: 77
console.log(celsiusAFahrenheit(-10)); // Muestra: 14

// Pruebas de Edad
console.log(esMayorDeEdad(18)); // Muestra: true
console.log(esMayorDeEdad(16)); // Muestra: false
console.log(esMayorDeEdad(25));
esMayorDeEdad(18); // true
esMayorDeEdad(25); // true
esMayorDeEdad(16); // false

// Pruebas de Nombre
generarNombreCompleto("Ana", "Martínez");
// "Ana Martínez"

generarNombreCompleto("Luis", "Ramírez");
// "Luis Ramírez"
console.log(generarNombreCompleto("Ana", "Martínez")); // Muestra: Ana Martínez

module.exports = {
    calcularDescuento,
    validarPassword,
    celsiusAFahrenheit,
    esMayorDeEdad,
    generarNombreCompleto
  
};