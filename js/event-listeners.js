/* See license.txt for terms of usage */

function onAddDocumentClickListener() {
  document.addEventListener("click", event => {
    //console.log("Click on Document!", event);
  });
}

function onAddButtonClickListener(event) {
  event.target.addEventListener("click", event => {
    console.log("Click on Button!", event);
  });
}

window.addEventListener("click", event => {
  //onsole.log("Click on Window!", event);
});

window.document.addEventListener("click", event => {
  //console.log("Click on Body!", event);
}, false);

window.document.addEventListener("dblclick", event => {
  console.log("Double click on Document!", event);
});

window.addEventListener("dblclick", event => {
  console.log("Double click on Window!", event);
});

window.addEventListener("load", event => {
  document.body.addEventListener("dblclick", event => {
    console.log("Double click on Body!", event);
  });
});

/* Dynamic registration */

function onClickHoverMe() {
  console.log("click!");
}

function onMouseEnter(event) {
  let hoverMe = document.getElementById("hoverMe");
  hoverMe.addEventListener("click", onClickHoverMe);

  let hoverMeParent = document.getElementById("hoverMeParent");
  hoverMeParent.addEventListener("click", onClickHoverMe);

  console.log("click listener added!");
}

function onMouseLeave(event) {
  let hoverMe = document.getElementById("hoverMe");
  //hoverMe.removeEventListener("click", onClickHoverMe);

  let hoverMeParent = document.getElementById("hoverMeParent");
  hoverMeParent.removeEventListener("click", onClickHoverMe);

  console.log("click listener removed!");
}

/*
window.addEventListener("focus", event => {
  console.log("Focus on Window!", event);
});

window.addEventListener("blur", event => {
  console.log("Blur on Window!", event);
});

window.addEventListener("resize", event => {
  console.log("Resize on Window!", event);
});

window.addEventListener("scroll", event => {
  console.log("Scroll on Window!", event);
});

const timeOut = setTimeout(() => {
  console.log("simple timeout");
}, 1000);

clearTimeout(timeOut);

*/
