<?php
$time = 2;
if (isset($_GET['time'])) {
  $time = $_GET['time'];
}

sleep($time);

$img = 'http://localhost/www/xhr-spy/images/image.png';
header('Content-Type: image/png');
readfile($img);
?>
