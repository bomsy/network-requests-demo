/* See license.txt for terms of usage */

function onWaiting() {
  var data = new Array(10).fill("data: hello world!").join();
  var request = new XMLHttpRequest();
  request.open("POST", "php/streaming.php", true);
  request.send(data);
}
