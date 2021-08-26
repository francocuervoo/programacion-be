const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = "Hola mundo como están";

app.get("/api/frase", (req, res) => {
  //Status 200 es que la petición está ok
  //Devuelve la frase completa
  res.status(200).send(frase);
});
app.get("/api/letras/:num", (req, res) => {
  const { num } = req.params;
  //Devuelve por número de orden de letra dentro de esa frase
  res.status(200).send(frase[num - 1]);
});
app.get("/api/palabras/:num", (req, res) => {
  const { num } = req.params;
  const arrFrase = frase.split(" ");
  //Devuelve por número de orden la palabra dentro de esa frase
  res.status(200).send(arrFrase[num - 1]);
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  const arrFrase = frase.split(" ");
  arrFrase.push(palabra);
  frase = arrFrase.join(" ");
  res.json({
    agregada: palabra,
    pos: arrFrase.length,
  });
});

app.put("/api/palabras/:post", (req, res) => {
  const palabra = req.body.palabra;
  const posicion = req.params.pos - 1;
  const arrFrase = frase.split(" ");
  frase = arrFrase.join(" ");
  const borrada = arrFrase[posicion];
  arrFrase[posicion] = palabra;
  res.json({
    actualizada: palabra,
    anterior: borrada,
  });
});

app.delete("/api/palabras/:pos", (req, res) => {
  const posicion = req.params.pos - 1;
  const arrFrase = frase.split(" ");
  const borrada = arrFrase[posicion];
  arrFrase.splice(posicion, 1);
  frase = arrFrase.join("");
  res.json([borrada]);
});

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
