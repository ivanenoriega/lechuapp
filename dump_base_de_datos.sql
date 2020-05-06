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

DROP TABLE IF EXISTS category

CREATE TABLE category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    estado BIT NOT NULL,
);

INSERT INTO category(nombre,estado) VALUES("buzos","disponible");
INSERT INTO category(nombre,estado) VALUES("remeras","disponible");
INSERT INTO category(nombre,estado) VALUES("camperas","disponible");
INSERT INTO category(nombre,estado) VALUES("pantalon","disponible");
INSERT INTO category(nombre,estado) VALUES("medias","disponible");
INSERT INTO category(nombre,estado) VALUES("camisas","no disponible");
INSERT INTO category(nombre,estado) VALUES("corbatas","no disponible");
INSERT INTO category(nombre,estado) VALUES("babuchas","no disponible");
INSERT INTO category(nombre,estado) VALUES("calzas","no disponible");
INSERT INTO category(nombre,estado) VALUES("jeans","no disponible");
