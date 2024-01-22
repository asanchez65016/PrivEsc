<?php
require("acceso_mysql.php");

$where="";

if (isset($_GET["ENTRENADOR"])) {
	$where=" WHERE curso_cod_entrenador ='" . $_GET["ENTRENADOR"] . "'";
}
if (isset($_GET["TURNO"])) {
	if ($where!="") $where=$where . " AND curso_horario ='" . $_GET["TURNO"] ."'";
	else $where=" WHERE curso_horario ='" . $_GET["TURNO"] ."'";
}

$resultado=mysqli_query($con,"SELECT curso_id,curso_descripcion,curso_horario,curso_dia,curso_aula,curso_cod_entrenador,curso_entrenador,curso_imagen,curso_precio FROM cursos_de_baile" . $where);
$arrayCursos= array();
while ($curso=mysqli_fetch_assoc($resultado)) {
        $arrayCursos[] = array_map('utf8_encode', $curso);
}

//enviamos el array como objeto JSON
echo json_encode($arrayCursos);
?>