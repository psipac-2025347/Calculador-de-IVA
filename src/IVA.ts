import {SubTotal} from "./Logica"; //se importa el archivo de logica con la funcion de subtotal

export const iva = 0.12;//El iva de guatemala es del 12% entonces se declara el IVA

export const calcularIVA = (subtotal: number): number => { //Se hace la funcion para calcular el IVA yy consigue el subtotal del 
    // con el iva incluido
    return subtotal * iva;
};
