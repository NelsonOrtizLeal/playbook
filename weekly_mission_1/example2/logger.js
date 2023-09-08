// logger.js file

// Este archivo tiene 2 funciones: info y verbose
// JavaScript tiene varias formas de declarar una función

function info (message){
    console.log(`info: ${message}`)
}

const verbose = function action(message) {
    console.log(`verbose: ${message}`)
}

const action = (message) => {
    console.log(`action: ${message}`)
}

// Ejecutar las funciones creadas
// info("1")
// verbose("2")
// action("3")

// Exportar las funciones usando CommonJS

module.exports = {
    info,
    verbose,
    action
}