const fs = require("fs");

let promise = new Promise((resolve, reject) => {
  //Forma asincrónica, que recibe una función de callback que va a ejecutarse cuando se termine de leer el archivo
  fs.readFile("ejemplo.txt", "utf-8", function (error, data) {
    if (error) reject(Error("No se pudo leer el archivo"));
    resolve(data);
  });
});

console.log("Inicio");

//Método then() se ejecuta cuando la promesa es completada, porque si yo hago console.log(promise) va a figurar <pendiente>
promise.then(function (data) {
  console.log(data);
});

//Método que lee txt de forma sincrónica
const readTxt = fs.readFileSync("ejemplo.txt", "utf-8");
console.log(readTxt);

//Le estoy diciendo que es una función asincrónica, y que hay cosas de esta función que la quiero esperar.
//Con el await le estoy diciendo, esperá a que esta promesa te dé un resultado y guardamelo dentro de prom y después mostrá el resultado.
async function readAsync() {
  let prom = await promise;
  console.log(prom)
  console.log("Final");
}

readAsync();
