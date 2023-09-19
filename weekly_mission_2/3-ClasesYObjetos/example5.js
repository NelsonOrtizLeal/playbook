console.log("Objetos con atributos por default")

class PullRequest {
    constructor(repo, title, lines_changed){
        this.repo = repo,
        this.title = title,
        this.lines_changed = lines_changed,
        this.status = "OPEN",
        this.dateCreated = new Date() // Esto guarda la fecha actual en la cual se instancio el objeto
    }

    // Agregando un metodo
    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status} and was created on ${this.dateCreated})`
    }
}

// Creando una instancia del objeto
console.log("Ejemplo 1:")
const myPR1 = new PullRequest("launchX","First PR", 99)
console.log(myPR1.getInfo()) // Invocando el metodo de la clase

// Puedes instanciar N cantidad de objetos
console.log("Ejemplo 2:")
const myPR2 = new PullRequest("launchX-2", "Second PR", 50)
console.log(myPR2.getInfo())