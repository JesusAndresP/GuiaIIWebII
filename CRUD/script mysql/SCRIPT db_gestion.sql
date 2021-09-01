Create database if not exists gestion;

use gestion;

create table clientes(
id int not null auto_increment primary key,
email varchar(255) NOT NULL,
nombre varchar (255) NOT NULL,
activo BOOLEAN DEFAULT true
);

insert into clientes (email, nombre) values ('jesusandres@mail.com','Jesus Andres');
drop database gestion


