/*
const numero = parseInt(prompt("Ingrese un número entero:"));

//var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let esPrimo = true;
let i = 2;

let numerosPrimos = numeros[0, 2, 6, 8];
//let numerosPares = numeros[1, 3, 5, 7, 9];
*/

let numeroIngresado = prompt("Ingresa un numero entero");
//2. Evaluamos los dos posibles escenarios: sea o no primo (estado inicial de nis numeros)
let esNumeroPrimo = true;
 //3. Operacion para demostrar si es o no primo
 if (numeroIngresado <=1 ){
    esNumeroPrimo = false; // demuestra que no es primo, y cambio estado inicial a false.
 } else {
    let i =2;
    while(i<=numeroIngresado /2 && esNumeroPrimo){
        if (numeroIngresado % i === 0){
            esNumeroPrimo = false;
        }
    }
 }

 //nota del while
 /*
 1- si el numero es mayor que 2, entra en el else. Inicializamos la variable1en 2
 que representa el primer posible divisor.

 2.
 

 */