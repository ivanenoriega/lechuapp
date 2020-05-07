const express = require("express");
const bodyParser = require("body-parser");
const database = require("./dbconnect");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => res.send("Just pong!"));

app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});
