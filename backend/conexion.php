<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "g_db_2";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>

