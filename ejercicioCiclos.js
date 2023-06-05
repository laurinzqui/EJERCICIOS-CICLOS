/*
/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.


*/

/*
- While (mientras)
 - Do While (hacer mientras)
 - For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. 
A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion
y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.*/
/*
while (tenerSueño && tenerUnaCamita) {


}


let rolDeUsuario = "registrado"; // definnir

while (!"registrado") {
function registrarUsuario(){
    console.log("usuario Registrado");

}

}
dejaloComprar();

*/

//codigo de mi sopita de verduritas con pollito
//declaro e inicializo un array con mis ingredientes
//var ingredientes = ["zanahorias", "cebolla", "apio", "papa", "espinacas", "pollito"];
//6 elementos 5 indices

//declaramos una variable llamada contador inicializada en 0, para usarla como un contador
//var contador = 0;
//la intencion es agregar ingredientes siempre y cuando la cantidad sea menor a 6
//agregar ingredientes mientras existan ingredientes (indices).
//while (contador < ingredientes.length){
    //console.log("agregando " + ingredientes [ingredientes] + " a la olla");
    // y voy aumentando el contador para saber

//}
/*

//Para verificar si un usario esta reegistrado o no
-verificamos la disponibilidad de un producto
-realizar acciones d¿sobre nuestro carrito de conmpras (revisar, producto, aplicar descuentos
    impuestos, actualizar, info etc)

 -   
/*

let Felipe = "listaDeAmigos";
let Fernanda ="bloqueada";

while (listaDeAmigos){
    console.log("Mostrar publicacion");

}
*/

/*
Do-while (hacer mientras)
Es similiar al while, con la diferencia de eque la condicion se evalua despues
de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos 1 vez,
incluso si la condicion inicial es falsa.



do {
    //bloque de codigo que vamos a ejecutar
} while (condition);
*/

//ejemplo galletas
//variable tiempo de coccion que servira como contador
//var tiempoTranscurridoDeCoccion = 0; 
//usar el ciclo do while
//do {
   // console.log("Horneando las galletas...");
   // tiempoTranscurridoDeCoccion +=5;
/*
    //todo el bloque de codigo se va evaluar mientras el tiempo de coccion
    sea menor a treinta minutis. Esto es porque las galletas se pueden cocinar en 5, 10, o hasta 25 min 
    como maximo 30, si pasamos ese tiempo las galletas se queman
    */
   //  } while (tiempoTranscurridoDeCoccion <30 );
    // console.log("las galletas estan listas");


     /*
     For (para)

-inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control.
-condicion: se verifica antes de cada iterecion y si evalula como verdadera el bucle se ejecute.
-experesion de iteracion: se ejecuta la fina lde cada iteraciones y se utiliza para actualizat o modificar la variable de control.


     */
/*
console.log("Ejemplo de la pizzacon For")

var pasoDeReceta = 
["preparar la masa","agregar los ingredientes", "hornear la pizza"];
var tiempoPorPaso = [15, 10, 20];
 for(var tiempo = 0; tiempo < pasoDeReceta.length)

*/


 //
 for (let cantidadDeCupones = 10; cantidadDeCupones >=0 ; cantidadDeCupones --) {
    console.log("Tienes un cupon de descuento, nos queda " + cantidadDeCupones);
 }
