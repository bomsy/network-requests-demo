/* See license.txt for terms of usage */


/**
 * The entry point
 */
async function onTest(event) {
  let request = {};

  request.onreadystatechange = function() {
    console.log("XHR done");
    debugger;
  };

  sendXHR(request);
}

function sendXHR(request) {
  waitForTime(100).then(() => {
    request.onreadystatechange();
  });
}


/**
 * Helper waiting function
 */
function waitForTime(time) {
  let promise = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return promise;
}
