<?php
header('Content-type: application/json');
set_time_limit(300);
print "[\n";
for ($i = 0; $i < 10; $i++)
{
  print "$i";
  if ($i<9) print ",\n";
  flush();
  ob_flush();
  sleep(1);
}
print "]\n";
?>
