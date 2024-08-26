CREATE DATABASE geladeiraNaty;

USE geladeiraNaty;

CREATE TABLE Pessoa (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    nome VARCHAR(100),
    telefone VARCHAR(14),
    isNaty BOOLEAN
);

CREATE TABLE Produto (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    quantidade INT,
    preco DOUBLE,
    imagem VARCHAR(255)
);

CREATE TABLE Pedido (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    isPix BOOLEAN,
    id_pessoa INT NOT NULL,
    id_produto INT NOT NULL,
    FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id),
    FOREIGN KEY (id_produto) REFERENCES Produto(id)
);