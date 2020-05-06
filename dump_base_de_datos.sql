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
