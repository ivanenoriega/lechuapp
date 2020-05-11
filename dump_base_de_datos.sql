DROP DATABASE IF EXISTS lechuapp;
CREATE DATABASE lechuapp;
USE lechuapp;

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
('2018-08-21','www.facebook.com/FALSO','TELE 2',10);

DROP TABLE IF EXISTS category;

CREATE TABLE category(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    estado BIT NOT NULL
);

INSERT INTO category(nombre,estado) VALUES("buzos", 1);
INSERT INTO category(nombre,estado) VALUES("remeras", 1);
INSERT INTO category(nombre,estado) VALUES("camperas", 1);
INSERT INTO category(nombre,estado) VALUES("pantalon", 1);
INSERT INTO category(nombre,estado) VALUES("medias", 1);
INSERT INTO category(nombre,estado) VALUES("camisas", 0);
INSERT INTO category(nombre,estado) VALUES("corbatas", 0);
INSERT INTO category(nombre,estado) VALUES("babuchas", 0);
INSERT INTO category(nombre,estado) VALUES("calzas", 0);
INSERT INTO category(nombre,estado) VALUES("jeans", 0);

DROP TABLE IF EXISTS product;

CREATE TABLE product(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio DECIMAL(7,2) NOT NULL,
  stock INT NOT NULL,
  color VARCHAR(50) NOT NULL,
  descripcion VARCHAR (100) NOT NULL,
  fecha_ingreso DATE NOT NULL,
  id_category INT NOT NULL,
  FOREIGN KEY(id_category) REFERENCES category(id)
);

INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("remera",100,10,"negro","escote en V","2020-05-06", 1);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("pantalon",50,10,"negro","chupin","2020-05-06", 10);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("medias",200,10,"negro","largas","2020-05-06", 2);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("babucha",80,10,"negro","ancha","2020-05-06", 3);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("camisas",400,10,"negro","manga larga","2020-05-06", 4);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("calzas",90,10,"negro","deportivas","2020-05-06", 5);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("corbatas",100,10,"negro","fiesta","2020-05-06", 6);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("camperas",500,10,"negro","rompeviento","2020-05-06", 7);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("buzos",40,10,"negro","cangurito","2020-05-06", 8);
INSERT INTO product(nombre,precio,stock,color,descripcion,fecha_ingreso,id_category) 
  VALUES ("jeans",100,10,"negro","pata elefante","2020-05-06", 9);
