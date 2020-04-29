/* See license.txt for terms of usage */

function onWaiting() {
  var data = new Array(10).fill("data: hello world!").join();
  var request = new XMLHttpRequest();
  request.open("POST", "php/streaming.php", true);
  request.send(data);
}

function onBlocking() {
  for (var i=0; i<10; i++) {
    onWaiting();
  }
}

function onRedirect() {
  var request = new XMLHttpRequest();
  request.open("GET", "php/redirect.php", true);
  request.send(null);
}

// Testing functions used from the Command line

async function waitForTime(time, message) {
  return new Promise(resolve => {
    setTimeout(() => {
      message = message || "Done " + time;
      console.log(message);
      resolve(message);
    }, time);
  });
}

async function asyncTest() {
  let res1 = await waitForTime(1000, "After 1 sec");
  let res2 = await waitForTime(1000, "After another 1 sec");
  let res3 = waitForTime(1000, "Yet another 1 sec");

  let result = [res1, res2, res3];
  return result.join(", ");
}

async function logAsyncData() {
  waitForTime(2000);
}

async function wait(time, message = "done") {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
    }, time);
  });
}

// Jim's example

async function big() {
  await small(); // point A
}

async function small() {
  var response = await fetch("data/number.json");
  return munge_reply(response); // point B
}

function munge_reply(reply) {
  return `It's been munged: ${reply}`; // point C
}

async function timeout(time, url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, time);
  });
}
