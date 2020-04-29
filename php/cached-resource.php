<?php
  header('HTTP/1.1 304 Not Modified', true, 304);
  print "cached content\n";
?>