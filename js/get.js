/* See license.txt for terms of usage */

function onFixedResponse() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/fixed-response.txt", true);
  request.send(null);
}

function onBeaconRequest() {
  navigator.sendBeacon("beacon_request");
}

function getTeapot() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log(request.status + " : " + request.statusText);
  };

  request.open("GET", "https://www.google.com/teapot", true);
  request.send(null);
}

function onPreciseRequest() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/precise.txt", true);
  request.send(null);
}

function onRawResponse() {
  var a = new XMLHttpRequest();
  a.open('POST', '/');
  a.send(new Uint8Array([0, 1, 2, 3]));
}

function onGetSimpleData() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/test.xml");
  request.send(null);
}

