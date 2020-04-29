<?php
  set_time_limit(300);
  $time = $_GET["time"];
  sleep($time);
  print "Paused for ".$time." seconds";
?>
