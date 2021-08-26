/* eslint-disable no-undef */
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

const messages = [
    {
        author: "Autor 1",
        text: "Mensaje 1"
    },
    {
        author: "Autor 2",
        text: "Mensaje 2"
    },
    {
        author: "Autor 3",
        text: "Mensaje 3"
    }        
]

io.on('connection', (socket) => {
    console.log('Cuando alguien se conecte aparecerá este mensaje')
    socket.emit('connectionMessage', 'Bienvenidos a el socket')
    socket.emit('messageBackend', messages)
    socket.on('disconnect', () => {
        console.log("Cuando el usuario se desconecta aparecerá este mensaje")
    })
    socket.on('messageFront', (data) => {
        console.log(data) // Acá aparecerá la información del input del index.html
        messages.push({
        author: data.author,
        text: data.message,
    })
        io.sockets.emit("messageBackend", messages)
    })
})

setTimeout(() => {
    io.sockets.emit('connectionMessage', 'Mensaje para todos, se dispara a los 5 segundos')
}, 5000)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./src/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

httpServer.listen(8080, () => console.log('Server started on 8080'))
