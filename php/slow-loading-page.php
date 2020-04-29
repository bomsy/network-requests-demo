
<?php
header('Content-type: application/json');
set_time_limit(0);
$i = 0;
echo "[\n";
while($i < 10) {
  ++$i;
  echo "    ", $i, ",\n";
  ob_end_flush();
  flush();
  ob_start();
  sleep(1);
}
echo "  0\n]";
?>