/* See license.txt for terms of usage */

function onSmallImage() {
  var request = new XMLHttpRequest();
  request.open("GET", "images/small-image.png?a=1000&b=2000", true);
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      console.trace("resource loaded");
    }
  }
  request.send(null);
}

function onSmallImageButonHover() {
}

/**
 * Fetching bigger image
 */
function onGetBiggerImage()  {
  var request = new XMLHttpRequest();
  request.open("GET", "images/image.png?width=528&height=140", true);
  request.send(null);
}

function onGetNonExistingImage() {
  var request = new XMLHttpRequest();
  request.open("GET", "images/nonExistingImage", true);
  request.send(null);
}


/* mouse */