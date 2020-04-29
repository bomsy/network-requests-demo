/* See license.txt for terms of usage */

function on404() {
  var request = new XMLHttpRequest();
  request.open("GET", "non-existing.txt", true);
  request.send(null);
}

function onInvalidRequest() {
  var request = new XMLHttpRequest();
  request.open("GET", "data/empty.txt");
  request.send(null);
}

function onError() {
  console.error("test error");
}

function onException() {
  nonExistingFunction();
}

function onLogEvent(event) {
  console.log(event);
}

function onBreak(event) {
  debugger;
}

async function sleep(time) {
  debugger;
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("timeout " + time + " done");
      resolve(time);
    }, time);
  });
}

async function onStepOut(event) {
  const s = await sleep(500);
  const s2 = sleep(501); // step out pauses here
  console.log(s) // step out pauses here
  await s2;
  console.log(s2)
}

function foo() {
  onStepOut().then(result => {
    console.log("log from foo");
  });
}

function doStepOut() {
  foo();
}

function onReturnObject() {
  console.log("onReturnObject");

  const result = {
    age: 10,
    name: "Joe",
  };

  debugger;
  return result;
}

console.log("debugging.js loaded");