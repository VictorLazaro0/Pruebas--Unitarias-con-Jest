const funciones = require('./funciones');


//Ejercicio 1
test(`Precio: 100, Descuento: 20` , ()=> {
    expect(funciones.calcularDescuento(100,20)).toBe(80)
});

//Casos correctos	Precio: 250, Descuento: 15	212.5
test(`	Precio: 250, Descuento: 15	212.5` , ()=> {
    expect(funciones.calcularDescuento(250,15)).toBe(212.5)
});

//Valores límite	Precio: 100, Descuento: 0	100 (Precio sin alterar)

test(`	Precio: 100, Descuento: 0	100` , ()=> {
    expect(funciones.calcularDescuento(100,0)).toBe(100)
});

//Valores límite	Precio: 100, Descuento: 50	50 (Mitad de precio)
test(`	Precio: 100, Descuento: 50	50` , ()=> {
    expect(funciones.calcularDescuento(100,50)).toBe(50)
});
//Valores límite	Precio: 100, Descuento: 100
test(`	Precio: 100, Descuento: 100	  0 (Producto gratis)` , ()=> {
    expect(funciones.calcularDescuento(100,100)).toBe(0)
});
//	Precio: 100, Descuento: 100
test(`	Precio: 100, Descuento: 100	  0 (Producto gratis)` , ()=> {
    expect(funciones.calcularDescuento(100,100)).toBe(0)
});


//Ejercicio 2 — Validación de contraseña
//Casos correctos	"Secreta123!"	Verdadero
//Thrutiness - buscar valores null, undefined, true o false 
test(` Secretra123! `, () => {
    expect(funciones.validarPassword("secreta123!")).toBeTruthy();
})
//Valores límite	"A1b!5678" (Exactamente 8 caracteres)	Verdadero
test(` "A1b!5678" (Exactamente 8 caracteres) `, () => {
    expect(funciones.validarPassword("A1b!5678")).toBeTruthy();
})
test(`Casos inválidos "pass12" (Tiene número pero es muy corta, 6 caracteres)`, () => {
    expect(funciones.validarPassword(`pass12`)).toBeFalsy();
});

test(`Casos inválidos "password" (Tiene la longitud pero no tiene números)`, () => {
    expect(funciones.validarPassword(`password`)).toBeFalsy();
});
//Combinaciones " Passw0rd1! " (Espacios extremos)  Falso
test(` Combinaciones    " Passw0rd1! " (Espacios extremos)  Falso `, () => {
    // Incluimos los espacios al inicio y al final del string
    expect(funciones.validarPassword(` Passw0rd1! `)).toBeFalsy();
});
//Ejercicio 3 — Conversor de temperatura

//Casos correctos	Valor: 100, Origen: "Celsius", Destino: "Fahrenheit"	212
test(`Casos correctos	Valor: 100, Origen: "Celsius", Destino: "Fahrenheit"	212` , ()=> {
    expect(funciones.celsiusAFahrenheit(100)).toBe(212)
});
//Valores límite	Valor: 0, Origen: "Celsius", Destino: "Fahrenheit"	32
test(`Casos correctos	Valor: 100, Origen: "Celsius", Destino: "Fahrenheit"	212` , ()=> {
    expect(funciones.celsiusAFahrenheit(0)).toBe(32)
});


//Combinaciones	Valor: 37.5, Origen: "Celsius", Destino: "Fahrenheit"	99.5 (Decimales)
test(`Combinaciones	Valor: 37.5, Origen: "Celsius", Destino: "Fahrenheit"	99.5 (Decimales)` , ()=> {
    expect(funciones.celsiusAFahrenheit(37.5)).toBe(99.5)
});
// Ejercicio 4 — Verificador de mayoría de edad

test(`Casos correctos	Edad: 25	Verdadero` , ()=> {
    expect(funciones.esMayorDeEdad(25)).toBeTruthy()
});
//Valores límite	Edad: 18 (Exactamente en el límite)	Verdadero
test(`Valores límite	Edad: 18 (Exactamente en el límite)	Verdadero` , ()=> {
    expect(funciones.esMayorDeEdad(18)).toBeTruthy()
});
//
//Valores límite	Edad: 0 (Recién nacido)
test(`Valores límite	Edad: 0 (Recién nacido)` , ()=> {
    expect(funciones.esMayorDeEdad(0)).toBeFalsy()
});

//Combinaciones	Edad: 17.9 (Edad en decimales)	Falso
test(`Casos inválidos   Edad: "dieciocho"   Excepción / Error` , ()=> {
    expect(() => {
        funciones.esMayorDeEdad("dieciocho");
    }).toThrow(); 
});
//Ejercicio 5 — Generador de nombre completo

//Casos correctos	Nombre: "Juan", Apellido: "Pérez"	"Juan Pérez"

test(`Casos correctos   Nombre: "Juan", Apellido: "Pérez"   "Juan Pérez"`, () => {
    expect(funciones.generarNombreCompleto("Juan", "Pérez")).toBe("Juan Pérez");
});
//Valores límite	Nombre: "A", Apellido: "B" (Una letra)	"A B"
test(`Valores límite	Nombre: "A", Apellido: "B" (Una letra)	"A B"`, () => {
    expect(funciones.generarNombreCompleto("A", "B")).toBe("A B");
});
//Casos inválidos	Nombre: "", Apellido: "" (Ambos vacíos)	Excepción / Error
test(`Casos inválidos   Nombre: "", Apellido: "" (Ambos vacíos) Excepción / Error`, () => {
    // Envolvemos la llamada en una función flecha () => { ... }
    expect(() => {
        funciones.generarNombreCompleto("", ""); 
    }).toThrow(); // Y agregamos el punto antes de toThrow()
});
//Combinaciones	Nombre: "Elon", Apellido: "Musk X Æ A-12"	"Elon Musk X Æ A-12"
test(`Combinaciones	Nombre: "Elon", Apellido: "Musk X Æ A-12"	"Elon Musk X Æ A-12"`, () => {
    expect(funciones.generarNombreCompleto("Elon", "Musk X Æ A-12")).toBe("Elon Musk X Æ A-12");
});