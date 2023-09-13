console.log("Crear un objeto con propiedades diferentes")

// Propiedades diferentes hace referencia a guardar una LISTA, DICCIONARIO O GUARDAR OTRO OBJETO DENTRO

// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Tulio",
    age: 2,
    nicknames: [
     "Tulipan",
      "Tulancingo",
      "Tulish"
    ],
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    }
  }
  console.log("Ejemplo 1:")
  console.log("Objeto completo")
  console.log(myObject3)
  console.log("Propiedad name")
  console.log(myObject3.name)
  console.log("Propiedad address")
  console.log(myObject3["address"])