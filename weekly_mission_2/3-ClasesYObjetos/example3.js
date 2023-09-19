console.log("Instanciar un objeto con atributos")

class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, 'this' nos ayuda a realiar esto.

    // 'this' es una palabra reservada que permite crear variables pero que pertenezcan al contexto de la clase, lo cual permite acceder a el valor de estas en los objetos y asegura que cada objeto tendra las mismas variables pero su valor es independiente.

    constructor(name, age, subjects){
        this.name = name,
        this.age = age,
        this.subjects = subjects
    }

    // Ahora los objetos tendran estos atributos y seran independientes uno de otro objeto
}

console.log("Ejemplo 1: Sin asignar valores al constructor ")
const nelson = new Student(); // Puedes crear el objeto sin pasarle los atributos no habra problemas.
console.log(nelson)

console.log("Ejemplo 2: Asignando valoresal constructor")
const alexa = new Student("Alexa", 28, ["Negocios","Administradora"])
console.log(alexa)

