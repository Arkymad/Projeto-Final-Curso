CREATE DATABASE IF NOT EXISTS proj_final;
CREATE TABLE religiao (
    id_religiao INT NOT NULL, 
    nome VARCHAR (100) NOT NULL, 
    descricao VARCHAR (500), 
    PRIMARY KEY (id_religiao)
);
CREATE TABLE igreja (
    id_igreja INT NOT NULL,
    religiao_id INT NOT NULL, 
    nome VARCHAR (100) NOT NULL, 
    endereco VARCHAR (200) NOT NULL,
    PRIMARY KEY (id_igreja),
    FOREIGN KEY (religiao_id) REFERENCES religiao(id_religiao)
);
CREATE TABLE usuario (
    id_usuario INT NOT NULL, 
    religiao_id INT NOT NULL,
    igreja_id INT NOT NULL,
    nome VARCHAR (50) NOT NULL,
    sobrenome VARCHAR (50) NOT NULL,
    email VARCHAR (255) NOT NULL,
    senha VARCHAR (20) NOT NULL,
    status VARCHAR (20) NOT NULL, 
    PRIMARY KEY (id_usuario),
    FOREIGN KEY (religiao_id) REFERENCES religiao(id_religiao),
    FOREIGN KEY (igreja_id) REFERENCES igreja(id_igreja)
    );
CREATE TABLE evento (
    id_evento INT NOT NULL, 
    usuario_id INT NOT NULL,
    data, 
    endereco VARCHAR (200) NOT NULL,
    tipo boolean, 
    descricao VARCHAR (500), 
    PRIMARY KEY (id_evento)
    FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario)
);