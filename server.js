const express = require("express");
const bodyParser = require("body-parser");
const database = require("./dbconnect");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Hello from lechuapp");
});

app.listen(PORT, function () {
  console.log(`Escuchando en el puerto ${PORT}`);
});
