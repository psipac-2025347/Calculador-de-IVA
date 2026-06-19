//Se declara la variable de Precios 
interface Precios {
    precio: number[];
}

//Se hace la funcion para calcular el subtotal
export const SubTotal = (datos: Precios): number => {
    let subtotal = 0;//El subtotal inicia con 0
    for (let i = 0; i < datos.precio.length; i++) { //ciclo for para recorrer precios
        const monto = datos.precio[i]!;//Se obtiene el monto con el arreglo de precios
        subtotal = subtotal + monto;//Se suman cada uno
    }//Se retorna el subtotal
    return subtotal;
};