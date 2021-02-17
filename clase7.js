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

function imprimirNombreEnMayusculas(persona) {
    /* var nombre = persona.nombre */

    var { nombre } = persona

    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(alejandro)

imprimirNombreEnMayusculas(dario)

/* imprimirNombreEnMayusculas({nombre: 'Pepito'}) */

/* imprimirNombreEnMayusculas({ apellido: 'Gomez' }) */

/* function imprimirNombreYEdad(persona) {
    var nombre = persona.nombre

    var edad = persona.edad

    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
} */

function imprimirNombreYEdad(persona) {
    var {nombre} = persona

    var {edad} = persona

    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(alejandro)

imprimirNombreYEdad(dario)