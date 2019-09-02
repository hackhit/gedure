<?php
//Conexion
require 'connect_db.php';

//Dependencias
require 'funciones/func_global.php';
require 'funciones/func_matricula.php';
require 'funciones/func_login.php';

//Start session
sec_session_start();

if (isset($_SESSION['token']) && token($_SESSION['token'])) {
	if ($_SESSION['loginIs'] == "admin") {
		//Parametos
		$destino = "../../src/matricula/";
		$curso = $_POST['curso'];
		$seccion = $_POST['seccion'];

		//Comprobar
		if (isset($_FILES["archivo"]) && isset($_FILES["archivo"]["name"])) {
			if ($_FILES["archivo"]["type"]=="text/csv" || $_FILES["archivo"]["type"]=="application/vnd.ms-excel") {
				if ($_FILES["archivo"]["size"] <= 10000) {
					//Verificar destino
					if (!file_exists($destino)) {
						$oldumask = umask(0); 
						if (mkdir($destino, 0777, true)) {
							umask($oldumask); 
						}
					}
					//Parametros
					$origen=$_FILES["archivo"]["tmp_name"];
					$upload=$destino.$_FILES["archivo"]["name"];

					//Mover
					if (@move_uploaded_file($origen, $upload)) {
						//Abrir archivo.
						$archivo_csv = utf8_fopen("../../src/matricula/".$_FILES["archivo"]["name"]);

						//Contadores.
						$i = 0;
						$o = 0;
						$insertados = 0;
						$actualizados = 0;
						$errores = 0;

						//Extraer datos.
						while (($datos=fgetcsv($archivo_csv,10000,";")) !== false){
							$numero_lista[$i] = $datos[0];
							$cedula_csv[$i] = $datos[1];
							$nombre[$i] = mb_convert_case($datos[2], MB_CASE_TITLE, "UTF-8");
							$i++;
						}

						//Cerrar archivo.
						fclose ($archivo_csv);

						$archivo_csv2 = utf8_fopen_insert("../../src/matricula/password/passwords_".$curso.$seccion.".csv");

						while ($o <= ($i -1)) {
							$consulta = verify_user($mysqli, $cedula_csv[$o]);
							if ($consulta != "no encontrado") {
								$aula = "E_".$curso.$seccion."_".$numero_lista[$o];
								//Actualizar usuarios
								$matricula_update = update_matricula($mysqli, $nombre[$o], $aula, $cedula_csv[$o]);

								if ($matricula_update) {
									$actualizados++;
									$password_already = "Su contraseña ya fue generada.";

									//Registrar en el archivo
									$fila_update = $numero_lista[$o].";V-".$cedula_csv[$o].";".$nombre[$o].";".$password_already;

									if (!fputs($archivo_csv2, $fila_update.PHP_EOL)) {
										$errores++;
									}
								}else {
									$errores++;
								}
							}else {
								//Parametros
								$password = password_generate(3);
								$password_encript = encript_password_register($password);
								$aula = "E_".$curso.$seccion."_".$numero_lista[$o];

								//Insertar usuarios
								$matricula_add = add_matricula($mysqli, $nombre[$o], $aula, $cedula_csv[$o], $password_encript);

								if ($matricula_add == "yes") {
									$insertados++;
									//Registrar en el archivo
									$fila_insert = $numero_lista[$o].";V-".$cedula_csv[$o].";".$nombre[$o].";".$password;
									if (!fputs($archivo_csv2, $fila_insert.PHP_EOL)) {
										$errores++;
									}
								}else {
									$errores++;
								}
							}
							$o++;
						}
						//Cerrar 2 archivo
						fclose ($archivo_csv2);

						$total = $insertados + $actualizados;

						$accion = "Matricula subida: ".$total." alumnos de ".$curso." ".$seccion.".";
						add_log($mysqli, $_SESSION['cedula'], $_SESSION['user'], $accion);
						unlink($upload);
						$respuesta = array("message" => "update_ok", "insert" => $insertados, "update" => $actualizados, "error" => $errores, "dowload" => "src/matricula/password/passwords_".$curso.$seccion.".csv");
					}else {
						$respuesta = array("message" => "no_upload");
					}
				}else{
					$respuesta = array("message" => "no_size");
				}
			}else {
				$respuesta = array("message" => "no_format_file");
			}
		}else {
			$respuesta = array("message" => "no_found_file");
		}
	}else {
		$respuesta = array("message" => "internal_error");
	}
}else {
	$respuesta = array("message" => "token");
}
echo json_encode($respuesta);
//Cerrar conexion.
$mysqli->close();
?>