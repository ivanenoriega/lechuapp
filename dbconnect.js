const mysql = require("mysql");

let conexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "lechuapp",
});

<<<<<<< HEAD
module.exports = conexion;
=======
module.exports = conexion;
>>>>>>> 329bcda96918b9b221fd1eada4ded85b06254303
