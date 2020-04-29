/* See license.txt for terms of usage */

function onLongHeader() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/bigdata.json", true);
  request.setRequestHeader("Custom-header", "123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789Custom-header", "123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789Custom-header", "123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789-123456789");
  request.send(null);
}

function onUploadHeaders() {
  var request = new XMLHttpRequest();
  request.open("POST", "data/fixed-response.txt", true);

  const rawData = [
    "content-type: application/x-www-form-urlencoded\r",
    "custom-header: hello world!\r",
    "\r",
    "\r",
    "foo=bar&baz=123",
  ];

  request.send(rawData.join("\n"));
}
