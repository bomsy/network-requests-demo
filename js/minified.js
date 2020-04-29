/* See license.txt for terms of usage */

function onMinified1() {console.log("1");debugger; helper2();console.log("2");console.log("3");}
function helper2() {
  for (var i=0; i<3; i++) {
    console.log(i);
  }
  helper1();
} function helper1() { debugger; console.log("hello from helper1"); }
