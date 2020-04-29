<?php
  setcookie("name","value", time()+1400);

  setcookie("MyNewCookie", "a value");
  setcookie("MyNewCookie23", "ValueCookie23", time() + 86400, "/", "", false, true);
  setcookie("MyNewCookie34", "ValueCookie34", time() + 86400, "/", "", false, false);

  echo "Simple response with cookies";
?>
