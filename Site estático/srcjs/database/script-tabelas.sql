create database individual;
use individual;

create table franquia(
idFranquia int primary key auto_increment,
nomeFranq varchar(45),
cidade varchar(45),
arena varchar(45)
);

alter table usuario rename column nome to nomeUser;

SELECT * FROM usuario join franquia on idFranquia = fkFranquia;
SELECT * FROM usuario join franquia on idFranquia = fkFranquia WHERE email = 'jef' AND senha = 'Jeffer1050';

create table usuario(
idUsuario int primary key auto_increment,
nomeUser varchar(45),
email varchar(100),
senha varchar(45),
fkFranquia int,
foreign key (fkFranquia) references franquia(idFranquia)
);

insert into franquia(nomeFranquia, cidade, arena) values
	('Atlanta Hawks', 'Atlanta', 'State Farm Arena');

create table personagem(
idPerso int auto_increment,
nomePerso varchar(45),
posicaoPerso varchar(45),
franquiaPerso varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idPerso, fkUsuario)
);

select * from personagem;

drop table personagem;
truncate table usuario;