// Ejemplo 9: Uso del reduce
// Reduce es un metodo que recorre toda una lista, pero su función callback requiere de 3 parametros
/*
    1-> callback(acc, element)
        acc -> Nombre de la variable acumulativa
        element -> Elemento acutal en la lectura del arreglo  
    2-> Indice en cual quieres que se inicie reduce
*/
const numbers9 = [1, 2, 3, 4, 5]
console.log(numbers9)
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)