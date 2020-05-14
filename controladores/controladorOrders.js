const conexion = require('../dbconnect');

function listarOrdenes(req,res){

// nom client nom producto pre unit cantidad y  total  de la orden. /select / join / group by.
 var id = req.params.id;

 var sql = 'select pu.id,c.nombre , p.nombre, p.precio, pu.cantidad, sum(p.precio * pu.cantidad) as total'+
    'from purchase pu join client c on pu.client_id=c.id join product p on pu.product_id=p.id ';

 if(id){
    sql = sql + 'where pu.id= '+id +' group by pu.id ';

    conexion.query(sql,function(error,respuesta){
        if(error){
            return res.status(404).send("Hubo un error en la consulta para traer ordenes por id");  
        }
        if(respuesta==0){
            return res.status(404).send("Hubo un error no hay una orden de compra con ese id");
        }

        res.json(respuesta);
    });
 }

  
 if(!id){
        sql = sql + ' group by pu.id';

    conexion.query(sql,function(error,respuesta){
        if(error){
            return res.status(404).send("Hubo un error en la consulta para traer ordenes por id");  
        }
        if(respuesta==0){
            return res.status(404).send("Hubo un error no hay una orden de compra con ese id");
        }

        res.json(respuesta);
    });
 }


}

module.exports ={
    listarOrdenes:listarOrdenes
}