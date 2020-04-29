/* See license.txt for terms of usage */

function onGetUploadDir() {
  var data = new Array(10).fill("data: hello world!").join();
  var request = new XMLHttpRequest();
  request.open("POST", "php/upload-dir.php", true);
  request.send(data);
}
