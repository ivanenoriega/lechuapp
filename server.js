const express = require("express");
const bodyParser = require("body-parser");
const database = require("./dbconnect");
const commons = require("./server/commons");
const controladorClient = require('./controladores/controladorClientes');
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
app.get("/orders",)


/*

Obtener todos las ordenes (GET "/orders"). Debe figurar el nombre del cliente, 
el nombre del producto comprado, el precio unitario, la cantidad que compró, y
 el total de la orden. /select / join / group by.
(GET "/orders") Modificar la query anterior para que el endpoint pueda recibir
 un parametro tipo QUERY PARAM. Verificar que exista el query param, y en el caso de que si,
  agregar el WHERE a la consulta. Debe figurar el nombre del cliente, el nombre del producto comprado,
 el precio unitario, la cantidad que compro, y el total de la orden. /select / join / where / group by.


Crear PR (pull request solicitando los cambios)
Adjuntar PR en esta card
Añada un elemento

*/

app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});

app.use(commons.errorHandler);

