/* See license.txt for terms of usage */

async function first() {
  console.log((new Error).stack);
}

function second(ms) {
  setTimeout(function callback() {
    first();
  }, ms);
}

async function fetchNumber() {
  var response = await fetch("data/number.json");
  first();
}

// JSTerm should reveal getters
// https://bugzilla.mozilla.org/show_bug.cgi?id=1460530#c1
var customer = {
  get age() { return 40; },
  get name() { return "John"; },
  address: "Hawaii",
}

var store = {
  cust1: customer,
  get cust2() { return customer; },
}



a = {
    sameName: () => {
        return 1; /* After refresh breakpoint is now set on this line instead. */
    }
}
b = {
    sameName: () => {
        return 42; /* Set breakpoint here and refresh.*/
    }
}

function formatTime(time) {
  // Return milliseconds
  if (time < 1000) {
    return (time + " ms");
  }

  // Return seconds
  if (time < 60 * 1000) {
    return ((time / 1000) + " s");
  }

  // Return minutes + seconds
  if (time < (60 * 60 * 1000)) {
    var minutes = time / (60 * 1000);
    var seconds = time % (60 * 1000);
    var result = minutes + " min ";
    result += seconds + " s";
    return result;
  }

  // Return hours + minutes + seconds
  if (time < 24 * 60 * 60 * 1000) {
    var hours = time / (60 * 60 * 1000);
    var minutes = time % (60 * 60 * 1000);
    var seconds = minutes % (60 * 1000);
    var result = hours + " h ";
    result += minutes + " min ";
    result += seconds + " s";
    return result;
  }

  var days = time / (24 * 60 * 60 * 1000);
  var hours = time / (4 * 60 * 60 * 1000);
  var minutes = hours % (60 * 60 * 1000);
  var seconds = minutes % (60 * 1000);
  var result = days + " d ";
  result += hours + " h ";
  result += minutes + " min ";
  result += seconds + " s";
  return result;
}

var startTime = Date.now();
window.addEventListener("click", event => {
  //console.log(formatTime(Date.now() - startTime));
});


window.addEventListener("load", event => {
  var arr = document.querySelectorAll("button");
  console.log(arr);
});

function onChangeInput() {
  console.log("break here");
}

function Person(name) {
  this.name = name;
}
Person.prototype = {
  hello(message) {
    return message + " " + this.name;
  }
}

// test
function myTest() {
  var person = new Person("Honza");
  var message = person.hello("Hello");
  console.log(message);
}

/*
(function() {
  var p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      foo555();
      resolve('hello!');
    }, 5000)
  });
})();
*/

(function() {
  var p = new Promise(function(resolve, reject) {
    //fooddd();
    resolve('hello!');
  }).then(
    function() {},
    function(err) {
      console.log('caught', err);
    }
  );
})();
