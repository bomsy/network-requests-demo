/* See license.txt for terms of usage */

var id = Date.now();
console.log("Short live worker, 5 sec " + id);


function callback() {
  debugger;
  console.log("Done "+ id);
}


setTimeout(callback, 5000);