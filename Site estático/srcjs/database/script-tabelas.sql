create database individual;
use individual;

create table franquia(
idFranquia int primary key auto_increment,
nome varchar(45),
cidade varchar(45),
arena varchar(45)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(45),
fkFranquia int,
foreign key (fkFranquia) references franquia(idFranquia)
);

truncate table usuario;