<?php
set_time_limit(300);
for ($i = 0; $i < 10; $i++)
{
  print "Part $i\n";
  ob_flush();
  flush();
  usleep(200000);
}
?>
