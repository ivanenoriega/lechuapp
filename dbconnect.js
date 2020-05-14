const mysql = require("mysql");

let conexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "ricardo",
  database: "lechuapp",
});

module.exports = conexion;
