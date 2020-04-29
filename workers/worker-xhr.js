/* See license.txt for terms of usage */


function callback() {
  /*var request = new XMLHttpRequest();
  request.open("GET", "../images/small-image.png", true);
  request.send(null);

  var request2 = new XMLHttpRequest();
  request2.open("GET", "../images/small-image.png", true);
  request2.send(null);*/

  var request1 = new XMLHttpRequest();
  request1.open("GET", "../php/cached-resource.php", true);
  request1.send(null);
}

function callback2() {
  callback();
}

setTimeout(callback2, 1000);