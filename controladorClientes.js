const conexion = require('./dbconnect');

function obtenerClientes(req, res){

    const sql = "SELECT * FROM client JOIN client_detail ON idCliente = client.id ORDER BY client.id DESC";
    conexion.query(sql, function(err, result){
        if(err) return console.log("Se ha producido un error en la consulta cliente", err);        
        res.json(result);
    });
}

function obtenerClientesPorId(req, res) {    
    let id = req.params.id;
    const sql = "SELECT * FROM client JOIN client_detail ON idCliente = client.id WHERE client.id = " + id;
    conexion.query(sql, function(err, result){
        if(err) return console.log("Se ha producido un error en la consulta cliente id", err);        
        res.send(result);
    });    
}

function crearNuevoCliente(req, res){

    let body = req.body;
    let nombre = body.nombre;
    let telefono = body.telefono;    

    conexion.query("INSERT INTO client (nombre, telefono) VALUES (?,?)", [nombre, telefono], 
    function(err, result){
        if(err) return console.log("Hubo un error en el insert de cliente", err.message);        
        res.send("ID del nuevo cliente", result);
    });
    
}

module.exports = { 
    obtenerClientes : obtenerClientes,
    obtenerClientesPorId : obtenerClientesPorId
};

/*
Crear un nuevo cliente (POST "/client"). Validar que todos los datos obligatorios (tabla client) estén presentes. Devolver el ID del nuevo client en la respuesta.
Editar un cliente existente (PUT "/client").
Añada un elemento
 */