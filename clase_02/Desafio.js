//Me queda raro los return de los console.log
//Si meto el getAll dentro del contructor no me quedarían los valores viejos?

//Productos
let p1 = {
  title: "Heladera",
  price: 80000,
};

let p2 = {
  title: "Lavarropas",
  price: 60000,
};

//Importo el módulo fs
const fs = require("fs");

class Contenedor {
  constructor(fileName) {
    //Nombre del archivo
    this.fileName = fileName;
    this.id = 0;
    this.data = [];

    try {
      const data = fs.readFileSync(this.fileName, "utf-8");
      if (data) {
        //Paso data a un objeto
        this.data = JSON.parse(data);
        this.data.map((producto) => {
          //Obtengo cual es el id máximo del archivo
          if (this.id < producto.id) this.id = producto.id;
        });
        console.log("Este es el objeto del archivo", this.data);
      }
    } catch (error) {
      //Si hay un error que no retorne nada. Que siga.
      return;
    }
  }


  //Creo función writeFile()
  async writeFile(fileName, data) {
    fs.promises.writeFile(fileName, JSON.stringify(data, null, 2));
  }

  //Métodos
  async save(objeto) {
     this.id++;
    this.data.push({
      id: this.id,
      product: objeto,
    });
    try {
      await this.writeFile(this.fileName, this.data);
      //Devuelvo los id asignados
      return console.log("El id del objeto ingresado es", this.id);
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      await this.writeFile(this.fileName, this.data);
      //Busco el objeto con ese id
      const objetoId = this.data.find((dat) => dat.id === id);
      if (objetoId) {
        return console.log("El objeto con el id", id, "es", objetoId);
      }
    } catch (error) {
      return null;
    }
  }

  async deleteById(id) {
    try {
      const data = await fs.promises.readFile(this.fileName, "utf-8");
      if (data) {
        //Paso data a un objeto
        this.data = JSON.parse(data);
        //Nuevo array sin el objeto con el id pasado
        const objetoSinId = this.data.filter((dat) => dat.id != id);
        console.log(objetoSinId);
        //Guardo el nuevo array en el archivo
        console.log(`El producto con el id ${id} fue eliminado.`);
      }
    } catch (error) {
      //Si hay un error que no retorne nada. Que siga.
      return;
    }
  }

  async deleteAll() {
    this.data = [];
    try {
      await this.writeFile(this.fileName, this.data);
      return console.log("Se borraron todos los objetos del archivo");
    } catch (error) {
      console.log(error);
    }
  }
}


async function newFunction() {
  const objetoContenedor = new Contenedor("ArchvoDesafio.txt");
  const objetoContenedor2 = new Contenedor("ArchvoDesafio.txt");

  for (let index = 0; index < 10; index++) {
    await objetoContenedor.save(p1);
    await objetoContenedor2.save(p2);
  }
 

  //await objetoContenedor2.save(p2);
  //await objetoContenedor.save(p2);
  //await objetoContenedor.getAll();
  //await objetoContenedor.getById(3);
  //await objetoContenedor.deleteById(8);
  //await objetoContenedor.deleteAll();
}



newFunction();
