const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// El : es para pasar parámetros
app.get("/api/sumar/:num1/:num2", (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  //Los paso a number porque sinó los concatena
  const respuesta = Number(num1) + Number(num2);
  res.status(200).send(respuesta.toString());
});

app.get("/api/sumar2", (req, res) => {
  const { num1, num2 } = req.query;
  const suma = Number(num1) + Number(num2);
  res.status(200).json({ resultado: suma });
});

app.get("/api/sumar3/:operacion", (req, res) => {
  const { operacion } = req.params;
  const sum = eval(operacion);
  res.status(200).json({
    respuesta: sum,
  });
});

app.post("/api", (req, res) => {
  res.send("OK post");
});

app.delete("/api", (req, res) => {
  res.send("OK delete");
});

app.put("/api", (req, res) => {
  res.send("OK put");
});

app.listen(8082, () => {
  console.log("Servidor en puerto 8082");
});
