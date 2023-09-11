// Importando la clase MyLogger

/*
Los export con nombre son útiles cuando se necesitan exportar múltiples valores. Durante el import, es obligatorio usar el mismo nombre que el correspondiente objeto.

Pero un export por defecto puede ser importado con cualquier nombre,
*/

// Ejemplo de forma corta
import MyLogger from './logger.js'

const logger = new MyLogger('info')
logger.log('Hello World')