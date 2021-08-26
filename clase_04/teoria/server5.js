//Multer sirve para subir archivos

const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/files/files.html");
});

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  console.log(req.file, req.body);
});

app.listen(8085, () => {
  console.log("Server 8085");
});
