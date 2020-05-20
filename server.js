const express = require("express");
const bodyParser = require("body-parser");
//const database = require("./dbconnect");
const commons = require("./server/commons");
const controladorClient = require("./controladores/controladorClientes");
const controladorOrders = require("./controladores/controladorOrders");
const controladorProductos = require("./controladores/contoladorProductos");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Lechu Pong!
app.get("/ping", (req, res) => res.send("Lechu pong!"));

// Client ednpoints
app.get("/client", controladorClient.obtenerClientes);
app.get("/client/:id", controladorClient.obtenerClientesPorId);
app.post("/client", controladorClient.crearNuevoCliente);
app.put("/client/:id", controladorClient.actualizarCliente);

// Orders endpoints
app.get("/orders", controladorOrders.listarOrdenes);
app.get("/orders/:id", controladorOrders.listarOrdenes);

// Products endpoints
app.get("/products/:id", controladorProductos.obtenerProductosPorId);
app.get("/products", controladorProductos.obtenerProductos);
app.post("/products", controladorProductos.crearNuevoProducto);

app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});

app.use(commons.errorHandler);
