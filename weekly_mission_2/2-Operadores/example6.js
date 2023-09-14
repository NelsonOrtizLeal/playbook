console.log("Convertir todos los nombres de una lista a mayúsculas")

const names = ["Nelson","Vicente","Victoria","Armando"]
console.log(names)

const namesUpper = names.map((name) => name.toUpperCase())
console.log("Ejemplo 1:")
console.log(namesUpper)

// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log(countries6)

const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 2:")
console.log(countriesFirstThreeLetters)