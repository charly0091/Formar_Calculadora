//1)

let sumar = require("./sumar");
let restar = require("./restar");
let multiplicar = require("./multiplicar");
let dividir = require("./dividir");

function calculadora(operacion,n1,n2){
    return operacion(n1,n2);
}


console.log("2)\n");
console.log("La suma es: " + calculadora(sumar,5,0));
console.log("La resta es: " + calculadora(restar,5,0));
console.log("3)\n");
console.log("La multiplicacion es: " + calculadora(multiplicar,5,2));
console.log("4)\n");
console.log("La multiplicacion es: " + calculadora(multiplicar,5,0));
console.log("5)\n");
console.log("La division es: " + calculadora(dividir,5,3));
console.log("6)\n");
console.log("La division es: " + calculadora(dividir,5,0));




