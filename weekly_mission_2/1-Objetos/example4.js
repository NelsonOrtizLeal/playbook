console.log("Crear un objeto con métodos")

// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("Ejemplo 1")
  pet.sayHello()