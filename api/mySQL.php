<?php
	
	
    header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	header("Content-Type: application/json; charset=UTF-8");

	$hostname = "localhost:3306";
	$username = "root";
	$password = "cley";
	$database = "saedb";
	//conectando ao banco
	$con = mysqli_connect($hostname, $username, $password, $database) or die (mysqli_error());
?>