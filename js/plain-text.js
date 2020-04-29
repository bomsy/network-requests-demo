/* See license.txt for terms of usage */

function onGetBigPlainText() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/big-oneline-response.txt", true);
  request.send(null);
}

function onGetSmallPlainText() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/small-oneline-response.txt", true);
  request.send(null);
}

function onGetBigPlainTextNoWhitespace() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/big-oneline-response-nowhitespace.txt", true);
  request.send(null);
}
