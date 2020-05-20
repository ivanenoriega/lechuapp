const conexion = require("../dbconnect");
const clientInfo =
  "c.id, c.nombre, c.telefono, cd.fecNac as fecha_nacimiento, cd.faceBook as facebook, cd.direccion FROM client c JOIN client_detail cd ON cd.idCliente = c.id";

function obtenerClientes(req, res) {
  const sql = "SELECT " + clientInfo + " ORDER BY c.id DESC";
  conexion.query(sql, function (err, result) {
    if (err) res.status(404).send("Hubo un error en la consulta cliente");
    if (result.length === 0) {
      res.status(204).send(result);
    }
    res.json(result);
  });
}

function obtenerClientesPorId(req, res) {
  let id = req.params.id;

  const sql = "SELECT " + clientInfo + " WHERE c.id = " + id;
  if (isNaN(id)) {
    res.status(400).send({ message: "id param invalido" });
  } else {
    conexion.query(sql, function (err, result) {
      console.log(JSON.stringify(result));
      if (err)
        return console.log(
          "Se ha producido un error en la consulta cliente id",
          err
        );
      if (result.length === 0) {
        res.status(404).send({ message: "usuario no encontrado" });
      }
      res.json(result);
    });
  }
}

function crearNuevoCliente(req, res) {
  const { nombre, telefono, fecha_nacimiento, facebook, direccion } = req.body;

  if (!nombre || typeof nombre !== "string")
    res.status(422).json({
      message: "contenido invalido",
      cause: "no hay nombre o el formato es incorrecto",
    });

  if (!telefono || typeof telefono !== "number")
    res.status(422).json({
      message: "contenido invalido",
      cause: "no hay telefono o el formato es incorrecto",
    });

  conexion.query(
    "INSERT INTO client (nombre, telefono) VALUES (?,?)",
    [nombre, telefono],
    function (err, result) {
      if (err) {
        console.log("Hubo un error en el insert de cliente", err.message);
        res
          .status(500)
          .send({ message: "Ocurrio un error al crear el cliente." });
      }

      conexion.query(
        "INSERT INTO client_detail (direccion, fecNac, faceBook, idCliente) VALUES (?,?,?,?)",
        [direccion, fecha_nacimiento, facebook, result.insertId],
        function (err, result) {
          if (err) {
            console.log("Hubo un error en el insert de cliente", err.message);
            res.status(500).send("Ocurrio un error al crear el cliente.");
          }

          res.status(200).send({ message: "Cliente creado con exito." });
        }
      );
    }
  );
}

function actualizarCliente(req, res) {
  var id = req.params.id;
  const { nombre, telefono, fecha_nacimiento, facebook, direccion } = req.body;
  let queryClient = "";
  let queryClientDetail = "";

  if (!id) {
    res.status(400).send("Hubo un error no hay id!!");
  }

  if (nombre) {
    queryClient += `nombre = '${nombre}'`;
  }

  if (telefono) {
    queryClient += `${nombre ? ", " : ""}telefono = '${telefono}'`;
  }

  if (fecha_nacimiento) {
    queryClientDetail += `fecNac = '${fecha_nacimiento}'`;
  }

  if (facebook) {
    queryClientDetail += `${
      fecha_nacimiento ? ", " : ""
    }faceBook = '${facebook}'`;
  }

  if (direccion) {
    queryClientDetail += `${
      fecha_nacimiento || facebook ? ", " : ""
    }direccion = '${direccion}'`;
  }

  const query = `UPDATE client SET ${queryClient} WHERE id = ${id}`;
  console.log(query);
  conexion.query(query, function (error, respuesta) {
    if (error) {
      res
        .status(500)
        .send("Hubo un error en la consulta para traer clientes por id");
    }

    if (respuesta.length == 0) {
      res.status(500).send("cliente no encontrado");
    }

    conexion.query(
      `UPDATE client_detail SET ${queryClientDetail} WHERE idCliente = ${id}`,
      function (error, respuesta) {
        if (error) {
          res
            .status(500)
            .send("Hubo un error en la consulta para traer clientes por id");
        }

        if (respuesta.length == 0) {
          res.status(500).send("cliente no encontrado");
        }

        res.json({ message: "Cliente actualizado con exito." });
      }
    );
  });
}

module.exports = {
  obtenerClientes,
  obtenerClientesPorId,
  crearNuevoCliente,
  actualizarCliente,
};
