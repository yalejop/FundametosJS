var alejandro = { 
    nombre: 'Alejandro',
    apellido: 'Cataño',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Quintero',
    edad: 67
}

/* function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
} */

/* function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase())
} */

//Se pueden pasar objetos dentro de los parametros en las funciones (nuevas funcionalidades de JS)

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(alejandro)

imprimirNombreEnMayusculas(dario)

imprimirNombreEnMayusculas({nombre: 'Pepito'})