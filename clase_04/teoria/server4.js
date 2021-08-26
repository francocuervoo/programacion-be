const express = require("express");

const app = express();

app.use('/public', express.static('/files'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/files/index.html')
})

app.listen(8084, () => {
    console.log("Server port 8084")
})