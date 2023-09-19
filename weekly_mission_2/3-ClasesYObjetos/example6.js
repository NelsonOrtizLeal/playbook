console.log("Getters para acceder a los atributos del objeto")

class Ajolonauta {
    constructor(name, age, stack){
        this.name = name,
        this.age = age,
        this.stack = stack,
        this.exercises_completed = 0,
        this.exercises_todo = 99
    }

    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted(){
        return this.exercises_completed
    }

    get getExercisesTodo(){
        return this.exercises_todo
    }
}

// Instanciar objetos de Ajolonauta
console.log("Ejemplo 1:")
const nelson = new Ajolonauta("Nelson", 25, [])
console.log(`Ejercicios completos: ${nelson.getExercisesCompleted}`)
console.log(`Ejercicios por hacer: ${nelson.getExercisesTodo}`)