const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.info()
logger.log('This is an informational message 1')
logger.log('This is an informational message 2')
logger.log('This is an informational message 3')
logger.info()
/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/

const customLogger = new logger.constructor('CUSTOM')
customLogger.log('This is an informational message')
customLogger.info()