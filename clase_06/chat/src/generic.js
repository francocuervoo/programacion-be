/* eslint-disable no-undef */
const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

io.on("connection", (socket) => {
  console.log("¡Nuevo cliente conectado!");
  socket.emit("connectionMessage", "Bienvenidos a el socket");
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
  socket.on("messageFront", (data) => {
    console.log(data);
    io.sockets.emit("messageBackend", data);
  });
});

setTimeout(() => {
  io.sockets.emit(
    "connectionMessage",
    "Mensaje para todos, se dispara a los 5 segundos"
  );
}, 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

httpServer.listen(8081, () => console.log("Server started on 8081"));
