async function f() {
  let p = Promise.resolve(43);
  await p;
  console.log("after await");
}

function onCaseOver1() {
  Promise.resolve(42).then(forty_two => {
  console.log("interrupting microtask");
  });

  f().then(v => {
  console.log("promise of f's value resolved: " + v);
  });
}


/*async function f(n) {
  console.log(`entering f(${n})`);
  let p = Promise.resolve(43);
  await p;
  console.log(`leaving f(${n})`);
}

function onCaseOver1() {
  f("first").then(v => {
  console.log("promise of first call to f resolved: " + v);
  });
  f("second").then(v => {
  console.log("promise of second call to f resolved: " + v);
  });
}*/


/* See license.txt for terms of usage */

function onCase1() {
}

function onCase2() {
}

function onCase3() {
}

async function sleep3(n) {
  //await new Promise(r => setTimeout(r, n));
  debugger;  // step out from here
  await new Promise(r => setTimeout(r, n));
  debugger;  // step out from here
  return new Promise(r => setTimeout(r, n));
}

async function foo3() {
  const s = sleep3(1000);
  s.then(callback); // Pause here
}

function callback() {
  console.log("callback")
}

/*async function onCaseOver1() {
  await wait(100);
  debugger;
  const p = wait(500).then(result => {
    console.log("promise resolved");
  });
  console.log("done");
}

async function wait(n) {
  return new Promise(r => setTimeout(r, n));
}*/


/*
  Step twice over wait
  async function onCaseOver1() {
  const i = 100;
  debugger;
  const p = wait(2000);
  console.log("done");
}*/


function onStepIn1() {
  debugger;
  foo10();
}

function foo10() {
  console.log("foo10");
}





