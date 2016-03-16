<?php

//variaveis do projeto
$host      = "localhost:3306";
$user      = "root";
$pass      = "root";
$db    = "test";

//autoload das classes
function __autoload($classe){
	if(!@include_once "../model/".$classe.".php");
}


?>