import * as readline from 'readline';
import { SubTotal } from "./Logica";
import { calcularIVA } from "./IVA";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calculadora de IVA ");

const precios: number[] = [];

rl.question("Cuántos montos desea ingresar: ", (cantidadInput) => {//En este input se pregunta cuantos montos quiere ingresar
    const cantidad = parseInt(cantidadInput);//se declara la cantidad

    if (isNaN(cantidad) || cantidad <= 0) {//si la cantidad es menor a 0 o no tiene nada lanza error y cierra
        console.log("Cantidad invalida");
        rl.close();
        return;
    }

    let contador = 0;//el contador empieza en 0

    const pedirMonto = () => {
        if (contador < cantidad) {//si el contador es menor a la cantidad entonces sigue el flujo
            rl.question(`Ingrese el monto ${contador+1} : ` , (montoInput) => {
                const monto = parseFloat(montoInput);

                if (isNaN(monto) || monto < 0) {
                    console.log("Monto inválido intente otra vez");
                    pedirMonto();
                } else {
                    precios.push(monto);//la funcion push sirve para guardar los montos en el array de preecios
                    contador++;
                    pedirMonto();//Vuelve a empezar
                }
            });
        } else {
            const subtotal = SubTotal({ precio: precios });//Se llama la funcion de subtotal
            const montoIVA = calcularIVA(subtotal);//Se llama la funcion de subtotal para calcular su IVA
            const precioSinIVA = subtotal - montoIVA;//Se calcula el precio sin IVA
            const total = subtotal + montoIVA;//Se da el total con IVA incluido


            /*
            Basicamente se muestra todo lo que tiene el programa a ofrecer y se muestra en la consola
            */
            console.log("Montos totales:")
            console.log(`Subtotal: ${subtotal} Quetzales`);//Se muestra el subtotal
            console.log(`Precio sin IVA: ${precioSinIVA} Quetzales`);//Se muestra el precio sin IVA
            console.log(`IVA (12%): ${montoIVA} Quetzales`);//Se muestra el monto del IVA
            console.log(`Total a pagar: ${total} Quetzales`);//Se muestra el total a pagar con IVA incluido

            rl.close();
        }
    };

    pedirMonto();
});