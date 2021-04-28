function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}   

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}mts`)
}

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.7) {
        console.log(`Hola, me llamo ${this.nombre} y soy alto`)
    } else {
        console.log(`Hola, me llamo ${this.nombre} y soy bajita`)
    }
}

var sacha = new Persona('Alejandro', 'Cataño', 1.72);

/* sacha.saludar() */

var dario = new Persona('Dario', 'Cataño', 1.68)

var martha = new Persona('Martha', 'Herrera', 1.60)

