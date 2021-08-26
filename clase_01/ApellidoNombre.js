class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };

    //Métodos
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
        // Para la consigna no es necesario que retorne. return this;
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor) {
        let book = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(book)
        //Devuelvo la clase.
        // Para la consigna no es necesario que retorne. return this;
    }
    getBookNames() {
        return this.libros.map(libros => libros.nombre)
    }
}

let objetoUsuario = new Usuario(
    "Franco",
    "Monterubbianesi",
    [
        {
            nombre: 'El señor de las moscas',
            autor: 'William Golding',
        },
        {
            nombre: 'Fundacion',
            autor: 'Isaac Asimov',
        }
        ,
        {
            nombre: 'Harry Potter',
            autor: 'J. K. Rowling',
        }
    ],
    ["Perro", "Gato", "Hamster", "Caballo"]
)

objetoUsuario.addMascota("Vaca")
objetoUsuario.addBook('El señor de las moscas 2', 'William Golding 2')



//Resultados de las funciones:
console.log("1) El nombre completo del usuario es", objetoUsuario.getFullName())
console.log("2) Las mascotas son:", objetoUsuario.mascotas)
console.log("3) La cantidad de mascotas es de", objetoUsuario.countMascotas(), "animales.")
console.log("4) Los libros son:", objetoUsuario.libros)
console.log("5) Y esto son los nombres de los libros:", objetoUsuario.getBookNames(objetoUsuario.libros))

