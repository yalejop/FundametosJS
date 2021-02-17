function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}   

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Alejandro', 'Cataño');

/* sacha.saludar() */

var dario = new Persona('Dario', 'Cataño')

var martha = new Persona('Martha', 'Herrera')