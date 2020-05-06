const conexion = require('./dbconnect');

function obtenerClientes(req, res){

    const sql = "SELECT * FROM client JOIN client_detail ON idCliente = client.id ORDER BY client.id DESC";
    conexion.query(sql, function(err, result){
        if(err) return console.log("Se ha producido un error en la consulta cliente", err);        
        res.json(result);
    });
}

function obtenerClientesPorId(req, res) {    
    let id = req.query.id;
    const sql = "SELECT * FROM client JOIN client_detail ON idCliente = client.id WHERE client.id = " + id;
    conexion.query(sql, function(err, result){
        if(err) return console.log("Se ha producido un error en la consulta cliente id", err);        
        res.send(result);
    });
    
}

module.exports = { 
    obtenerClientes : obtenerClientes,
    obtenerClientesPorId : obtenerClientesPorId
};

/*

Obtener un cliente especifico (GET "/client/id_cliente"). Traer los datos de la tabla client y la tabla client_detail.
Crear un nuevo cliente (POST "/client"). Validar que todos los datos obligatorios (tabla client) estén presentes. Devolver el ID del nuevo client en la respuesta.
Editar un cliente existente (PUT "/client").
Añada un elemento
 */