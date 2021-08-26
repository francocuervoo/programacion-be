//Servidor HTTP

//Variable donde podemos invocar métodos http
const http = require("http");
const moment = require("moment")

//Creamos el servidor
const server = http.createServer((req, res) => {
    const horaActual = moment().hours();
    console.log(horaActual);
    if (horaActual >= 6 && horaActual < 11){
        res.end("Buenos días");
    } else if (horaActual >= 12 && horaActual <= 17){
        res.end("Buenas tardes")
    }
})

//Puerto donde va a correr el servidor
const PORT = 3000

const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor escuchando en HTTP puerto ${PORT}`)
})