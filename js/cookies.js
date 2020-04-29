/* See license.txt for terms of usage */

function onGetCookies() {
  var request = new XMLHttpRequest();
  request.open("GET", "php/cookies.php");
  request.send();
}
