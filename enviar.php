<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Enviado Gracias</title>
	<style>
		*{margin: 0; padding: 0; background:#2d2d2d;}
		p{border-bottom: solid 2px #fff; width: 70%; margin-top:100px;color:#fff;
			font-size: 40px; text-align: center; font-family: verdana;}

			h1{text-align: center;font-size: 80px; color:#fff; border:solid 1px gray;}
	</style>
</head>
<body>
	<center>
	<p>Mensaje Enviado con exito</p>
	<?php
   echo "Hola gracias por contactarse con nosotros le dejo otras formas de contacto por aca ws692888@gmail.com - @WALTERNOEL13";
	?>
	
		<?php 
$myemail = 'ws692888@gmail.com';
$name = $_POST['nombre'];
$email = $_POST['email'];
$message = $_POST['mensaje'];

$to = $myemail;
$email_subject = "Nuevo mensaje: $subject";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
echo "El mensaje se ha enviado correctamente";
?>
	</center>
</body>
</html>