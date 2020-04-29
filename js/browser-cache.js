/* See license.txt for terms of usage */

function onGetCachedResource() {
  var request1 = new XMLHttpRequest();
  request1.open("GET", "./php/cached-resource.php", true);
  request1.send(null);
}