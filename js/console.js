/* See license.txt for terms of usage */

function onGroup1() {
  console.group("Case 1");
  console.log("Honza");
  console.log("Bo");
  console.log("Kacka");
  console.log("Tom");
  console.log("Tedik");
  console.groupEnd();
}

function onCssError() {
  console.log("Using wrong CSS prop value:");
  document.body.style.length = 10;
}
