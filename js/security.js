/* See license.txt for terms of usage */

function onCors1() {
  var url = 'http://janodvarko.cz/test/cors/test-cors.txt';
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.setRequestHeader("Content-Type", "text/plain");

  request.onreadystatechange = function() {
    console.log("readyState " + request.readyState + ", status " + request.status);
    console.log("responseText: " + request.responseText);
  };

  request.send();
}

function onTriggerGetPreflight() {
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "http://mozilla.org");
  xhr.setRequestHeader("Content-Type", "triggering/preflight");
  xhr.send();
}

function onTriggerGet() {
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "http://mozilla.org");
  xhr.send();
}

function onCwpCors() {
  var url = 'http://localhost:8030/api/catalog/words?cwid=57ce546c9afd869ca338f2d9&length=2';

  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.withCredentials = true;
  request.setRequestHeader("Content-Type", "text/plain");
  request.setRequestHeader("My-Custom-Header", "crossword/json");

  request.onreadystatechange = function() {
    console.log(request);
  };

  request.send();
}

function onCrossOriginRequest() {
  var xhr = new XMLHttpRequest;
  xhr.open("GET", "https://www.google.com");
  xhr.send();
}

function getWord() {
  var request = new XMLHttpRequest();
  var word = "matka";
  var url =
    "http://bara.ujc.cas.cz/ssjc/search.php?hledej=Hledat&heslo=" +
    word +
    "&sti=EMPTY&where=full_text&hsubstr=no";

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      document.getElementById("response").innerHTML = request.responseText;
    }
  }

  request.open("GET", url, true);
  request.send(null);
}

function getWord2() {
  var request = new XMLHttpRequest();
  var word = "matka";
  var url = "http://prirucka.ujc.cas.cz/?slovo=" + word;

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      document.getElementById("response").innerHTML = request.responseText;
    }
  }

  request.open("GET", url, true);
  request.send(null);
}
