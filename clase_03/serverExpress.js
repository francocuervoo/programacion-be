const moment = require("moment");
const express = require ("express");

const app = express()

const PORT = 8080

app.get("/" , (req,res)=> {
    res.send("<h1 style='color: #666666'>Bienvenido a express</h1>")
})

const visitas = 0

app.get("/visitas", (req,res)=> {
    visitas++
    res.send(`La cantidad de visitas es ${visitas}`)
})

app.get("/fecha" , (req,res)=> {
    let obj = new Date().toLocaleDateString("es-AR")
    res.send(`La fecha es ${obj}`)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor express corriendo en port ${PORT}`)
})

server.on("error", (error) => console.log(error))