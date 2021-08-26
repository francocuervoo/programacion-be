// npm init -> creo paquete json
// npm install -D nodemon eslint -> instalo nodemon y eslint como dependencia de desarrollo
// eslint no sirve para ver errores

//touch creo archivo

//para correr el archivo js, hay que cambiar en la ruta del package
//    "start": "nodemon --inspect NOMBRE DEL ARCHIVO.js"

// le agrego nombre al objeto ojb
// const obj = {}
// obj.nombre = "nombre"

// Promise.all espera a que todas las peticiones se cumplan.

const express = require("express");
const app = express();

app.use(express.json());

//Respuesta al ir al localhost:3001/
app.get("/", (req, res) => {
  res.send("Servidor express");
});

//Respuesta al ir al localhost:3001/users
app.get("/users", (req, res) => {
  res.json({
    username: "Franco",
    lastname: "Monterubbianesi",
  });
});

//Nos va a mostrar el cuerpo de la petición
//La petición la hace el usuario al entrar al localhost
app.post("/users", (req, res) => {
  res.send("post ok");
  console.log(req.body);
});

//Con : le decimos que la variable id es dinámica y que va a ir cambiando
app.post("/users/:id", (req, res) => {
  console.log(req.params, req.body);
  res.send("post ok");
});

app.put('/users/:id', (req, res) => {
    console.log(req.body)
    res.send(`Usuario ${req.paramas.id} actualizado`)
})

app.delete('/users:id', (req, res) => {
    res.send(`Usuario ${req.params.id} eliminado`)
})

app.listen(3001, () => {
  console.log("Server on port 3001");
});
