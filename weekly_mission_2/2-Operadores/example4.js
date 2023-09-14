console.log("Uso de map para recorrer los elementos de una lista y crear una nueva lista")

const numbers = [1,2,3,4,5]
console.log(numbers)

const newNumbers = numbers.map((num) => num * num)

console.log("Ejemplo 1:")
console.log(newNumbers)