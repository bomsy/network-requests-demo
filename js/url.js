/* See license.txt for terms of usage */

function onPostJsonWithUrlParams() {
  var postData = '{"a": "test", "c": "json", "b": "in the post body", "sub": {"a": "100"}}';
  var request = new XMLHttpRequest();
  request.open("POST", "data/test.json?a=this&?c=is&b=json&d=in&e=post&q=post&x=post&t=post&u=post&i=post&p=post&m=post&j=post&k=post&m=post&n=post&o=post", true);
  //request.setRequestHeader("Content-Type", "application/json");
  //request.setRequestHeader("Content-Type", "text/plain");
  //request.setRequestHeader("Content-Length", postData.length);
  request.send(postData);
}

function onLongUrl() {
  var request = new XMLHttpRequest();
  request.open("GET", "test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test.xml", true);
  request.send(null);
}

function onAnchorUrl() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/fixed-response.txt#?_pjax=#contentpjax", true);
  request.send(null);
}

function onUrlWithRQL() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/fixed-response.txt?test=1&species=in=(52,60)&=", true);
  request.send(null);
}

function onXhrWithUrlParams() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/test.json?a=this&?c=is&b=json&d=in&e=post body adasdfasdf adasdfasdff adf aasdfasdfsdf adf f", true);
  request.send(null);
}
