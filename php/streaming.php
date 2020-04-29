<?php
set_time_limit(300);
usleep(200000);
for ($i = 0; $i < 2; $i++)
{
  print "Part $i\n";
  ob_flush();
  flush();
  usleep(2000000);
}
?>
