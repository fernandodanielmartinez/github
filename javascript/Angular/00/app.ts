
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};

let nombre2 = "Ricardo Diaz";
let edad2 = 22;

const PERSONAJE2 = {
  nombre: nombre2,
  edad: edad2
}

console.log (PERSONAJE2.edad);

// Cree una interfaz que sirva para validar el siguiente objeto
interface Heroe {
  nombre:string,
  artesMarciales:string[]
}

let batman:Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

function Conocimientos ( heroe:Heroe ) {
  console.log(heroe.artesMarciales);
}

Conocimientos(batman)

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a:number, b:number ){
  return (a + b) * 2
}

let resultadoDobleflecha = ( a:number , b:number ) => { console.log(( a + b ) * 2) }

resultadoDobleflecha ( 2 , 2 )

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }else{
     mensaje = nombre + " tiene un " + poder
    }
    console.log(mensaje)
  }

getAvenger("Pepe")  

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base:number = 0
  altura:number = 0
  area:number = 0

  constructor ( base:number, altura:number ) {
    this.area = base * altura
    console.log(this.area)
  }

}

let rectangulo:Rectangulo = new Rectangulo(2,3)
