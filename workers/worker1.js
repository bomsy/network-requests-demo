/* See license.txt for terms of usage */

console.log("hello from the worker #1. Wait for 5 sec ...");

var id = Date.now();
var counter = 5;

function callback() {
  console.log("Worker #1 still alive! Wait for 5 sec ... " + counter + ", id: " + id);

  debugger;

  if (--counter > 0) {
    setTimeout(callback, 5000);
  } else {
    throw new Error ("End of a worker " + id);
  }

}


setTimeout(callback, 5000);