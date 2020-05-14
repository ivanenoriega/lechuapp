const conexion = require('./dbconnect');

function obtenerClientes(req, res){

    const sql = "SELECT * FROM client JOIN client_detail ON idCliente = client.id ORDER BY client.id DESC";
    conexion.query(sql, function(err, result){
        if(err) return res.status(404).send("Hubo un error en la consulta cliente");        
        res.json(result);
    });
}

function obtenerClientesPorId(req, res) {    
    let id = req.params.id;
    
    const sql = "SELECT * FROM client JOIN client_detail ON idCliente = client.id WHERE client.id = " + id;
    
    conexion.query(sql, function(err, result){
        if(err) return console.log("Se ha producido un error en la consulta cliente id", err);  
        res.json(result);
    });    
}

function crearNuevoCliente(req, res){
    let body = req.body;
    let nombre = body.nombre;
    let telefono = body.telefono;    

    if(!nombre || typeof(nombre)!=='string') return res.status(422).json({ 'message': 'contenido invalido', 'cause': 'no hay nombre o el formato es incorrecto' });
    
    if(!telefono || typeof(telefono)!=='number') return res.status(422).json({ 'message': 'contenido invalido', 'cause': 'no hay telefono o el formato es incorrecto' });

    conexion.query("INSERT INTO client (nombre, telefono) VALUES (?,?)", [nombre, telefono], 
    function(err, result){
        if(err) return console.log("Hubo un error en el insert de cliente", err.message);         
        res.send(result);
    });
    
}

module.exports = { 
    obtenerClientes : obtenerClientes,
    obtenerClientesPorId : obtenerClientesPorId,
    crearNuevoCliente : crearNuevoCliente
};

