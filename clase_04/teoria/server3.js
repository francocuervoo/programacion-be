const express = require("express");
const { Router } = express;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(Date.now())
    next()
})

app.use("/public", express.static("/files"));

const routerPersona = new Router();
const routerMascota = new Router();

const personas = [];
const mascotas = [];

function middle1(req, res, next) {
    //Los middleware sirven para verificar datos
    console.log("Hola soy un middleware1")
  next();
}

function middle2(req, res, next) {
    console.log("Hola soy un middleware2")
  next();
}

function middle3(req, res, next) {
    console.log("Hola soy un middleware3")
  next();
}

app.get("/", middle1, middle2, middle3, (req, res) => {
  res.sendFile(__dirname + "/files/index.html");
});

routerPersona.get("/", (req, res) => {
  res.send({
    personas,
  });
});

routerPersona.post("/", (req, res) => {
  const data = req.body;
  personas.push(data);
  res.send("Grabando");
});

routerMascota.get("/", (req, res) => {
  res.send({
    mascotas,
  });
});

routerMascota.post("/", (req, res) => {
  const data = req.body;
  mascotas.push(data);
  res.send("Grabado");
});

routerMascota.use(middle2)

app.use("/personas", routerPersona);
app.use("/mascotas", routerMascota);

app.listen(8083, () => console.log("Server on port 8083"));
