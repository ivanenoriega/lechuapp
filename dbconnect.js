const mysql = require("mysql");

let conexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "{1234}",
  database: "lechuapp",
});

module.exports = conexion;
