/* See license.txt for terms of usage */

function onChunkedResponse() {
  var request = new XMLHttpRequest();
  request.open("GET", "php/chunked-response.php", true);
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      console.log("Done! ");
      console.log(request.responseText);
    }
  }
  request.send(null);
}
