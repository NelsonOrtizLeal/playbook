/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

module.exports = (message) => {
    console.log(`info: ${message}`)
  }

// Al ser una función anonima, solo necesitas de importarlo en tu codigo y este metodo estara habilitado. 