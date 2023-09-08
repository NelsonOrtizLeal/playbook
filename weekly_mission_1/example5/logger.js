class Logger {
    constructor(name){
        // Al crear este objeto se guardarán estos valores}
        this.count = 0
        this.name = name
    }

    log(message){
        this.count++ // Se aumenta el contador interno al llamar este método
        console.log(`[ ${this.name} ] ${message}`)
    }

    info(){
        console.log(`El metodo info(message) a sido invocado: ${this.count}`)
    }
}

module.exports = new Logger('DEFAULT') // Instanciación del objeto y se exporta 