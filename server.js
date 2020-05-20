const express = require("express");
const bodyParser = require("body-parser");
const { errorHandler } = require("./server/commons");
const { listarOrdenes, listarOrdenes } = require("./controladores/orders");
const {
  getClients,
  getClientById,
  createClient,
  updateClient,
} = require("./controladores/clients");
const {
  obtenerProductosPorId,
  obtenerProductos,
  crearNuevoProducto,
} = require("./controladores/products");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Lechu Pong!
app.get("/ping", (req, res) => res.send("Lechu pong!"));

// Client ednpoints
app.get("/client", getClients);
app.get("/client/:id", getClientById);
app.post("/client", createClient);
app.put("/client/:id", updateClient);

// Orders endpoints
app.get("/orders", listarOrdenes);
app.get("/orders/:id", listarOrdenes);

// Products endpoints
app.get("/products/:id", obtenerProductosPorId);
app.get("/products", obtenerProductos);
app.post("/products", crearNuevoProducto);

app.use(errorHandler);

app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});
