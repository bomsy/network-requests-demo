/* See license.txt for terms of usage */

function onGetXml() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/test.xml", true);
  request.send(null);
}
