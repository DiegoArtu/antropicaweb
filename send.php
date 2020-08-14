<?php
//mensaje
//LLamando los Campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

//Datos para el correo
$destinatario = "diegoz.arturo11@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Mensaje: $mensaje";

//Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:success.html');
?>