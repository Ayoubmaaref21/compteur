let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let count = document.querySelector("p");
let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");

btn1.addEventListener("click", add);
btn2.addEventListener("click", sub);
btn3.addEventListener("click", rst);

btn1.addEventListener("mouseover", func1);
btn1.addEventListener("mouseleave", func2);
btn2.addEventListener("mouseover", func11);
btn2.addEventListener("mouseleave", func22);
btn3.addEventListener("mouseover", func111);
btn3.addEventListener("mouseleave", func222);
function func1() {
  id1.style.visibility = "visible";
}
function func2() {
  id1.style.visibility = "hidden";
}
function func11() {
  id2.style.visibility = "visible";
}
function func22() {
  id2.style.visibility = "hidden";
}
function func111() {
  id3.style.visibility = "visible";
}
function func222() {
  id3.style.visibility = "hidden";
}

let counter = 0;
function add() {
  count.innerHTML = ++counter;
}

function sub() {
  if (counter == 0) {
    return window.alert("tu es deja a zero !!");
  }
  count.innerHTML = --counter;
}
function rst() {
  if (counter == 0) {
    return window.alert("tu es deja a zero !!");
  }
  counter = 0;
  count.innerHTML = counter;
}
