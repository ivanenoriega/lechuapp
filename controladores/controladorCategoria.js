const conexion = require('./dbconnect');

function obtenerCategoriaPorId(req, res) {
    let id = req.params.id;


    if (isNaN(id)) {
        res.status(400).send({ message: "id param invalido" });
    } else {
        const sql = `SELECT * FROM category WHERE id = ${id}`;
        conexion.query(sql, function (err, result) {
            console.log("Se ha producido un error en la consulta de category por id", err);
            if (err) return res.status(500).send({ message: "Se ha producido un error en la consulta de category por id" });
            if (result.length === 0) return res.status(404).send({ message: "categoria no encontrada" });
            return res.json(result);
        });
    }
}

module.exports = { obtenerCategoriaPorId };