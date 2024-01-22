GRANT ALL PRIVILEGES ON *.* TO 'ferni'@'localhost' IDENTIFIED BY '1234567';

-- CREATE DATABASE 2daw;

USE 2daw;

CREATE TABLE `cursos_de_baile` (
  `curso_id` int(11) NOT NULL,
  `curso_descripcion` varchar(100) NOT NULL,
  `curso_horario` varchar(50) NOT NULL,
  `curso_dia` varchar(50) NOT NULL,
  `curso_aula` varchar(50) NOT NULL,
  `curso_cod_entrenador` int(11) NOT NULL,  
  `curso_entrenador` varchar(100) NOT NULL,
  `curso_imagen` varchar(100) NOT NULL,
  `curso_precio` decimal(9,2) NOT NULL
  );


ALTER TABLE `cursos_de_baile`
ADD PRIMARY KEY (`curso_id`);

INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(1, 'Salsa', 'TURNO A', 'Lunes','A-23',1,'Pedro Picapiedra','salsa.jpg',12.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(2, 'Salsa', 'TURNO A', 'Martes','A-3',1,'Pedro Picapiedra','salsa.jpg',32.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(3, 'Salsa', 'TURNO B', 'Jueves','A-67',2,'Jose Ramon','salsa.jpg',22.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(4, 'Salsa', 'TURNO C', 'Viernes','A-32',1,'Pedro Picapiedra','salsa.jpg',10.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(5, 'Salsa', 'TURNO C', 'Miercoles','A-23',3,'Angel Garo','salsa.jpg',11.5);

INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(11, 'Rumba', 'TURNO B', 'Lunes','A-23',1,'Pedro Picapiedra','rumba.jpg',12.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(12, 'Rumba ', 'TURNO B', 'Martes','A-3',1,'Pedro Picapiedra','rumba.jpg',32.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(13, 'Rumba ', 'TURNO A', 'Jueves','A-67',2,'Jose Ramon','rumba.jpg',22.5);

INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(21, 'Tango', 'TURNO C', 'Lunes','A-23',1,'Pedro Picapiedra','tango.jpg',12.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(22, 'Tango', 'TURNO C', 'Martes','A-3',1,'Pedro Picapiedra','tango.jpg',32.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(23, 'Tango', 'TURNO C', 'Jueves','A-67',2,'Jose Ramon','tango.jpg',22.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(24, 'Tango', 'TURNO A', 'Viernes','A-32',1,'Pedro Picapiedra','tango.jpg',10.5);
INSERT INTO `cursos_de_baile` (`curso_id`,`curso_descripcion`,`curso_horario`,`curso_dia`,`curso_aula`,`curso_cod_entrenador`,`curso_entrenador`,`curso_imagen`,`curso_precio`) VALUES(25, 'Tango', 'TURNO A', 'Miercoles','A-23',3,'Angel Garo','tango.jpg',11.5);


