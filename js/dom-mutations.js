/* See license.txt for terms of usage */

function onAppendChild() {
  let content = document.getElementById("myList");
  let item = document.createElement("li");
  item.textContent = "Item " + (content.children.length + 1);
  content.appendChild(item);
}

function onRemoveChild() {
  let content = document.getElementById("myList");
  if (content.children.length) {
    content.children[0].remove();
  }
}

function onAppendAttr() {
  let content = document.getElementById("myList");

  let name = "attr";
  let counter = 1;
  while (content.hasAttribute(name + counter)) {
    counter++;
  }
  content.setAttribute(name + counter, "test value");
}

function onRemoveAttr() {
  let content = document.getElementById("myList");

  let names = content.getAttributeNames();
  if (names.length <= 1) {
    return;
  }

  content.removeAttribute(names[1]);
}
