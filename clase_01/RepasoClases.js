// Clase: define las características del objeto
// Objeto: una instancia de la clase
// Propiedad: una característica del objeto, como el color
// Método: una capacidadad del objeto, como caminar
// Constructor: es un método llamado en el momento de la creación de las intancias

//Creo una clase, "Persona" es el nombre de mi clase
function Persona(nombre, edad){
    //Agrego los métodos, funciones y variables que va a tener nuestra clase
    this.nombre = nombre; //Propiedad pública
    // No necesariamente tienen que llevar el mismo nombre
    this.edad = edad
    let id = "37989929" // Propiedad privada
    console.log(id);

    //Método
    this.getId = function(){
        return id;
    }

    this.saludar = function(){
        console.log("Hola, soy " + nombre + " tengo " + edad + " años.")
    }
}

// Declaro una variable y de esta forma creo una instancia de la clase Persona.
let objetoPersona = new Persona("Franco", 27);
console.log(objetoPersona.nombre)

// Imprimo el método
console.log(objetoPersona.getId())

objetoPersona.saludar();
