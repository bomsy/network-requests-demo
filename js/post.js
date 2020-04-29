/* See license.txt for terms of usage */

function onPostJson1() {
  var postData = '{"a": "1"}';
  var request = new XMLHttpRequest();
  request.open("POST", "data/test.json?s=test", true);
  request.setRequestHeader("Content-Type", "application/json");
  //request.setRequestHeader("Content-Length", postData.length);
  request.send(postData);
}

function onPostNormalJson() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/normaldata.json", true);
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      var request1 = new XMLHttpRequest();
      request1.open("POST", "data/test.json?s=test", true);
      request1.setRequestHeader("Content-Type", "application/json");
      request1.send(request.responseText);
    }
  }
  request.send(null);
}

function postJSONEmptyArray() {
  var postData = JSON.stringify([]);
  var request = new XMLHttpRequest();
  request.open("POST", "data/test.json", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(postData);
}

function postAndOpenInNewTab() {
  var postData = "some post data";
  var request = new XMLHttpRequest();
  request.open("POST", "php/post.php", true);
  request.send(postData);
}

function onPostJsonWithArray() {
  var postData = JSON.stringify({
    watches: ['hello', 'how', 'are', 'you',
      {
        a: 10,
        c: 15,
        b: ['a', 'c', 'b'],
      }
    ],
  });

  var request = new XMLHttpRequest();
  request.open("POST", "data/test.json", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(postData);
}

function onPostXml() {
  var postData = "<msg>\n<hello>\nworld\n</hello>\n</msg>\n";
  var request = new XMLHttpRequest();
  request.open("POST", "data/test.xml?a=test", true);
  request.setRequestHeader("Content-Type", "text/xml");
  //request.setRequestHeader("Content-Length", postData.length);
  request.send(postData);
}

function onPostBigData() {
  var postData = "";
  var length = 1024*8*1024;
  for (var i=0; i<length; i++) {
    postData += "+";
  }

  var request = new XMLHttpRequest();
  request.open("POST", "data/test1.json", true);
  request.setRequestHeader("Content-Type", "application/json");
  //request.setRequestHeader("Content-Length", postData.length);

  console.log("Post data size: " + (postData.length / 1024) + " KB");

  request.send(postData);
}

function onPostData() {
  $.ajax({
    method: "POST",
    url: "/",
    data: "ok=12&no=13&yes=14"
  }).done(function( msg ) {
    console.log(msg)
  });
}

function onPostFormData() {
  var urlencoded = "application/x-www-form-urlencoded";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "data/test.json?a=this&?c=is&b=json&d=in&e=post&q=post&x=post&t=post&u=post&i=post&p=post&m=post&j=post&k=post&m=post&n=post&o=post");
  xhr.setRequestHeader("content-type", urlencoded);
  xhr.send('{ "foo": "ba&r", "t&est": "value", "na&me": "honz&a" }');
}

function onGetNoPostData() {
  var request = new XMLHttpRequest();
  request.open("POST", "data/test.xml");
  request.send(null);
}

function onPatchRequest() {
  var request = new XMLHttpRequest();
  request.open("PATCH", "data/test.xml");
  request.send('some data');
}
