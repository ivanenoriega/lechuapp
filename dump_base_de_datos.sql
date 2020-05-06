DROP DATABASE lechuapp;
CREATE DATABASE lechuapp;
USE lechuapp;
CREATE TABLE client;
CREATE TABLE client_detail;
CREATE TABLE order;
CREATE TABLE product;
CREATE TABLE category;


DROP TABLE IF EXISTS client;

CREATE TABLE client(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL
);

INSERT INTO client (nombre,telefono) VALUES
('coca cola', '3517897553'),
('juan perez', '4880544'),
('armando casas', '4444444'),
('pepito juarez', '4889765'),
('loro paco', '4456789'),
('pepsi', '4564433'),
('covid19', '4697645'),
('comadreja', '4778756'),
('no lo se rick', '4533376'),
('parece falso', '4569911');

Modifica el archivo dump_base_de_datos.sql con los nuevos campos de la tabla client_detail.
Agregar DROP TABLE IF EXISTS client_detail; antes de crear la tabla
Crear INSERT INTO client_detail VALUES (...). 10 minimo, validar los INSERT de la tabla client
Crear PR (pull request solicitando los cambios)
Adjuntar PR en esta card

DROP TABLE IF EXISTS client_detail;

CREATE TABLE client_detail (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
fecNac DATE,
faceBook VARCHAR(100),
direccion VARCHAR(100),
idCliente INT,
FOREIGN KEY (idCliente) REFERENCES client(id)
);

INSERT INTO client_detail (fecNac,faceBook,direccion,idCliente) VALUES ('1991-04-27','www.facebook.com/coca','en la coqueria',1),
('1993-05-10','www.facebook.com/juanPerez','enla calle Juan',2),
('1991-06-26','www.facebook.com/casas','en el puente',3),
('2000-04-15','www.facebook.com/juarez','villa juarez',4),
('1992-01-11','www.facebook.com/Paco','villa paco',5),
('1993-04-20','www.facebook.com/Pepsi','en la casa de riki',6),
('2020-03-10','www.facebook.com/COVID','CHINAAAAA',7),
('1991-08-07','www.facebook.com/comadreja','en el arbol',8),
('2018-08-21','www.facebook.com/NOLOSE','EN LA TELE',9),
('2018-08-21','www.facebook.com/FALSO','TELE 2',10)
