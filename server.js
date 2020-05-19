const express = require("express");
const bodyParser = require("body-parser");
const database = require("./dbconnect");
const commons = require("./server/commons");
const controladorClient = require('./controladores/controladorClientes');
const controladorOrders = require('./controladores/controladorOrders');
// comentario para arreglar merge
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => res.send("Lechu pong!"));
app.get("/error", function () { console.log("error"); throw new Error() });
app.get("/client", controladorClient.obtenerClientes);
app.get("/client/:id", controladorClient.obtenerClientesPorId);
app.post("/client", controladorClient.crearNuevoCliente);
app.put("/client/:id", controladorClient.actualizarCliente);
app.get("/orders", controladorOrders.listarOrdenes);
app.get("/orders/:id", controladorOrders.listarOrdenes);


app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});

app.use(commons.errorHandler);

