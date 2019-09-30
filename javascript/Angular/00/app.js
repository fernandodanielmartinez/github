// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var nombre2 = "Ricardo Diaz";
var edad2 = 22;
var PERSONAJE2 = {
    nombre: nombre2,
    edad: edad2
};
console.log(PERSONAJE2.edad);
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
function Conocimientos(heroe) {
    console.log(heroe.artesMarciales);
}
Conocimientos(batman);
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
var resultadoDobleflecha = function (a, b) { console.log((a + b) * 2); };
resultadoDobleflecha(2, 2);
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
    console.log(mensaje);
}
getAvenger("Pepe");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.area = 0;
        this.area = base * altura;
        console.log(this.area);
    }
    return Rectangulo;
}());
var rectangulo = new Rectangulo(2, 3);
