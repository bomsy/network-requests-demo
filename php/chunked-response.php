<?php
set_time_limit(30);
for ($i = 0; $i < 5; $i++)
{
  print "Chunk$i\n";
  ob_flush();
  flush();
  sleep(1);
}
?>
