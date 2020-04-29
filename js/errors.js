/* See license.txt for terms of usage */

function onUnreachableHost() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://no.such.host/", true);
  request.send(null);
}
