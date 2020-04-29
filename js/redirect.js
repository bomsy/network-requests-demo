/* See license.txt for terms of usage */

function onRedirect() {
  var request = new XMLHttpRequest();
  request.open("GET", "php/redirect.php", true);
  request.send(null);
}

function onTemporaryRedirect() {
  var request = new XMLHttpRequest();
  request.open("GET", "php/temporary-redirect.php", true);
  request.send(null);
}
