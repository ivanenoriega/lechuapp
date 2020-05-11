const express = require("express");
const bodyParser = require("body-parser");
const database = require("./dbconnect");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => res.send("Lechu pong!"));
app.get("/error", function () { console.log("error"); throw new Error() });

app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Se rompio todo!');
});