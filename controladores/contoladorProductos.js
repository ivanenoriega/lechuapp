const conexion = require("../dbconnect");
const controladorCategoria = require("./controladorCategoria");

function obtenerProductos(req, res) {
  const sql =
    "select * from product P join category C ON P.id_category = C.id  order by fecha_ingreso desc";
  conexion.query(sql, function (err, result) {
    if (err)
      return res.status(404).send("Hubo un error en la consulta producto");
    res.json(result);
  });
}
function obtenerProductosPorId(req, res) {
  let id = req.params.id;

  const sql =
    "SELECT * FROM product P join category C ON P.id_category = C.id WHERE P.id = " +
    id;

  conexion.query(sql, function (err, result) {
    console.log(JSON.stringify(res.body));
    if (err)
      return console.log(
        "Se ha producido un error en la consulta producto id",
        err
      );
    res.json(result);
  });
}

async function crearNuevoProducto(req, res) {
  let body = req.body;
  //product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category)
  let {
    nombre,
    precio,
    stock,
    color,
    descripcion,
    fecha_ingreso,
    id_category,
  } = body;
  //reconoce undifined,null !nombre
  if (!nombre || typeof nombre != "string") {
    console.log(nombre + " invalido");
    return res.status(400).send({ err: "nombre invalido" });
  }
  if (!precio || typeof precio != "number") {
    console.log(precio + " invalido");
    return res.status(400).send({ err: "precio invalido" });
  }
  if (!stock || typeof stock != "number") {
    console.log(stock + " invalido");
    return res.status(400).send({ err: "stock invalido" });
  }
  if (!color || typeof color != "string") {
    console.log(color + " invalido");
    return res.status(400).send({ err: "color invalido" });
  }
  if (!descripcion || typeof descripcion != "string") {
    console.log(descripcion + " invalido");
    return res.status(400).send({ err: "descripcion invalido" });
  }
  if (
    !fecha_ingreso ||
    !/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
      fecha_ingreso
    )
  ) {
    //return res.status(400).send({ err: "fecha invalida" });
  }
  if (!id_category || typeof id_category != "number") {
    const validacionCategoria = await conexion.query(
      `SELECT * FROM category WHERE id = ${id_category}`
    );
    if (validacionCategoria == []) {
      console.log(id_category + " invalido");
      return res.status(400).send({ err: "categoria invalido" });
    }
  }

  conexion.query(
    "INSERT INTO product (nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) VALUES (?,?,?,?,?,?,?)",
    [nombre, precio, stock, color, descripcion, fecha_ingreso, id_category],
    function (err, result) {
      if (err) {
        console.log("Hubo un error en el insert de producto", err.message);
        return res.status(500).send("Error");
      }
      res.send(result);
    }
  );
}

module.exports = {
  obtenerProductos,
  obtenerProductosPorId,
  crearNuevoProducto,
};
