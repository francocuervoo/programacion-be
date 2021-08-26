/*
// La constante no cambiaría así, hay que hacerle un push.
const arr = [];
// arr = [1,2,3]
arr.push(1) // muta
console.log(arr);

const obj = {}
// obj.nombre = "Clase1" // mutando
obj = []
console.log(obj)
*/

//-------------------------------------------//

const name = "pepe";
let age = 25;
const price = 99.90;
const tvShows = [
    "Dark",
    "Mr. Robot",
    "Castlevania",
]
const favoriteMovie = [
    {
        title: "El Resplandor",
        age: 1980,
        actors: [
            "Jack Nicholson", "Shelley Duvall", "Danny Lloyd"
        ]
    },
    {
        title: "El Resplandor 2",
        age: 1985,
        actors: [
            "Jack Nicholson", "Danny Lloyd"
        ]
    },
]

console.log(name);
console.log(age);
console.log(price);
console.log(tvShows);
console.log(favoriteMovie);

age++;
console.log(age);

tvShows.push("The Big Bang Theory");
console.log(tvShows);

/*
(function sum(num1, num2) {
    console.log(num1 + num2)
})(1, 2)

    (function (num1, num2) {
        console.log(num1 + num2)
    })(1, 2)

function rest(num1, num2) {
    return functiion(){ num1 + num2 }
}

function call(() => ())
*/


/*
interface user {
    name: String,
    age: Number,
    price: Number,
    tvShows: String[]
    movies: movies
}

interface favoriteMovie {
    name: String,
    year: Number,
    tvShows: String[]
}*/

const lastName = "Monterubbianesi"

function createName(name) {
    function lastNameFunction(lastName) {
        //alt + 96
        console.log(`${name} ${lastName} es un gran alumno.`)
    }
    lastNameFunction(lastName)
}

createName("Franco");

// -------------------------------------------------------------------------------

//Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
const list = [
    "Dato1",
    "Dato2",
    "Dato3",
]

function mostrarLista(){
    if (list.length > 0){
        return console.log(list)
    } else{
        console.log("Lista vacía")
    }
}

(mostrarLista)();

//Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.
(function(list){
    if(list.length > 0){
        return console.log(list)
    } else{
        console.log("Lista vacía")
    }
})([1,2,3])


//Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

num1 = 10;
num2 = 20;
num3 = 30;

function crearMultiplicador(num1){
    return (function (num2){
        return num1 * num2
    })(num3)
}

function duplicar (num1){
    return crearMultiplicador(num1)*2
}

console.log(duplicar(2));

function triplicar (num1){
    return crearMultiplicador(num1)*3
}
console.log(duplicar(3));


// Clases

class Persona {
    constructor(nombre, apellido, edad, altura, sexo){
        // Se puede puede llamar this.nombre = nombre. Pero lo diferencie para que se note la diferencia
        this.nombrePersona = nombre; 
        this.apellidoPersona = apellido;
        this.edadPersona = edad;
        this.alturaPersona = altura;
        this.sexoPersona = sexo;
    }
}

let estudiante = new Persona ("Franco", "Monterubbianesi", 27, 170, "masculino")
// Nos devuelve un objeto Persona
console.log(estudiante)


// Declarar la clase:

class Contador {
    
    // Evitar la repetición asignando los params del constructor a "this":

    constructor (nombre, cuenta) {  Object.assign (this, { nombre, cuenta }) };
    
    // Variable estática, no accesible por las instancias de la clase:
    
    static total = 0;

    // Métodos de clase con arrow functions (retornan por default):

    getResponsable = () => this.nombre;
    
    getCuentaIndividual = () => this.cuenta;

    contar = () => { this.cuenta++; Contador.total++ }
    
    // Método estático no accesible por las instancias de la clase:

    static getCuentaGlobal = () => Contador.total
}


// Instanciar objetos:

let contador1 = new Contador('Roberto', 0);
let contador2 = new Contador('Claudia', 0);


// Función recursiva anidada con condicional para detener la repetición:

const repetir = veces => funcion => { if (veces > 0) 
    {
      funcion()
      repetir (veces - 1) (funcion)
    }
};


// Invocar las funciones recursivas:

repetir (9) ( contador1.contar );
repetir (21) ( contador2.contar );


// Loggear resultados en consola:

console.log ( contador1.getResponsable() + ': ' + contador1.getCuentaIndividual() );
console.log ( contador2.getResponsable() + ': ' + contador2.getCuentaIndividual() );
console.log ( 'Total: ' + Contador.getCuentaGlobal() );