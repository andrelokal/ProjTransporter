CREATE TABLE cliente (
  id int(4) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  telefone varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;