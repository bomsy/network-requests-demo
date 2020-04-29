/* See license.txt for terms of usage */

function onAbortXHR() {
  var request = new XMLHttpRequest();
  request.open("GET", "php/abort.php", true);

  request.onreadystatechange = function() {
    console.log("request.readyState " + request.readyState);
    console.log("request.status " + request.status);
    console.log("request.statusText " + request.statusText);
    console.log("request.responseText " + request.responseText);
  }

  request.send();

  setTimeout(() => {
    console.log("abort start!");
    request.abort();
    console.log("abort end!");
  }, 1000);
}

function onWaitForResponse() {
  var request = new XMLHttpRequest();
  request.open("GET", "php/wait.php?time=10", true);
  request.send();
}

function onAbortXHR2() {
  console.log("start");
  var request = new XMLHttpRequest();
  request.open("GET", "images/image.png", true);
  request.send(null);
  request.abort();
  console.log("end");
}
