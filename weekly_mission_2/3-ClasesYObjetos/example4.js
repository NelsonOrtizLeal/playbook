console.log("Métodos en los objetos")

class Repository{
    constructor(name, author, language, stars){
        this.name = name,
        this.author = author,
        this.language = language,
        this.stars = stars
    }

    // Cualquier metodo creado deberia devolver algun valor
    getInfo(){ // Es una función que ejecutara cualquier objeto instanciado
        return `Repository ${this.name} has ${this.stars} stars`
    }
}

console.log("Ejemplo 1:")

// Creación de instancia de objeto
const myRepo = new Repository("LaunchX","NelsonOrtizLeal","JavaScript", 100)
console.log(myRepo) // Mostrando información del objeto

console.log("Ejemplo 2:")
console.log(myRepo.getInfo())