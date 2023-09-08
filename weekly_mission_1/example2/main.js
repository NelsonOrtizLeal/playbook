// node main.js

// Importar el modulo logger
const logger = require('./logger.js')

// Aqui hacer uso de los metodos o variables exportados
logger.info("Estoy en main.js")
logger.verbose("Hola mundo, main.js")
logger.action("Todo chido aqui, main.js")

// Usando CommonJS