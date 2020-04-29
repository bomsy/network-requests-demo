/* See license.txt for terms of usage */

function on8BigJSONRequests() {
  for (var i=0; i<8; i++) {
    onBigJson();
  }
}


function onGetJson500Times() {
  var timings = [];
  var start = Date.now();

  document.getElementById("results").innerHTML = "";

  getJsonMultipleTimes(500, timings, start);
}

function onGetJson100Times() {
  var timings = [];
  var start = Date.now();

  document.getElementById("results").innerHTML = "";

  getJsonMultipleTimes(100, timings, start);
}

function getJsonMultipleTimes(counter, timings, start) {
  var fetchJson = () => {
    let startTime = Date.now();
    return new Promise(resolve => {
      var request = new XMLHttpRequest();
      request.open("GET", "data/normaldata.json", true);
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          let elapsedTime = Date.now() - startTime;
          timings.push(elapsedTime);
          resolve();
        }
      }
      request.send(null);
    });
  };

  if (counter > 0) {
    fetchJson().then(() => {
      getJsonMultipleTimes(counter - 1, timings, start);
    });
  } else {
    let overallTime = Date.now() - start;
    console.log("Total: " + overallTime + ", each fetch: " + timings);
    document.getElementById("results").innerHTML = overallTime;
  }
}

function onJSONPRequest() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/jsonp.json", true);
  request.send(null);
}

function onJSONString() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/string.json", true);
  request.send(null);
}

function onGetJsonNumber() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/number.json", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(null);
}

function onLongResponse() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/longresponse.txt", true);
  request.send(null);
}

function onTinyResponse() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/tinyresponse.json", true);

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      let json = JSON.parse(request.responseText);
      console.log(json);
    }
  }

  request.send(null);
}

function onNormalJson() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/normaldata.json", true);
  request.send(null);
}

function onSmallJson() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/smalldata.json", true);
  request.send(null);
}

function onBigJson() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/bigdata.json", true);
  request.send(null);
}

function onBiggerJson() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/biggerdata.json", true);
  request.send(null);

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      var start = Date.now();
      var base = b64EncodeUnicode(request.responseText);
      console.log("encode " + (Date.now() - start));

      start = Date.now();
      var result = b64DecodeUnicode(base);
      console.log("decode " + (Date.now() - start));
    }
  }
}

function onEmptyJSON() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/empty.json", true);
  request.send(null);
}