import * as loggerModule from './logger.js'

console.log(loggerModule) // Mostramos todo el modulo importado como un objeto

// Creamos un objeto de la clase Logger importada
const objeto = new loggerModule.Logger('main')

// Podemos hacer uso de los metodos y atributos de la clase
objeto.log("Hola mundo")

// Tambien de los metodos que se importaron y no pertenecen a la clase logger
loggerModule.log("soy un metodo importado")

// Tambien tienes acceso a las variables 
console.log(loggerModule.LEVELS)