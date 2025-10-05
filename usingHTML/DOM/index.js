/* 
DOM = DOCUMENT OBJECT MODEL

Obhect{} that reperesents the page you see in the web broweser
and provides you with an API to interact with it.

Web Browser constructs the DOM when it loads an HTML document,
and structures all the elements in a tree-like representation,

Javascripts can access the DOM to dynamically
change the content, structure, and style of a web page.
*/

/*
DOM Navigation = The process of navigating through the structure of an HTML
document using JavaScript.

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/

// -----------------------------.firstElementChile----------------------------

// const element = document.getElementById("fruits");
// const element = document.getElementById("desserts");
// const element = document.getElementById("vegetables");

// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })

// -----------------------------.lastElementChile----------------------------

// const element = document.getElementById("vegetables");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "lightgreen"

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "lightgreen";
// })

// -----------------------------.nextElementSibling----------------------------

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightblue"

// -----------------------------.previousElementSibling----------------------------

// const element = document.getElementById("icecream");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "lightblue"

// -----------------------------.parentElement----------------------------

// const element = document.getElementById("carrots");
// const parentElement = element.parentElement;
// parentElement.style.backgroundColor = "lightblue"


// -----------------------------.children----------------------------

const element = document.getElementById("vegetables");
const children = element.children;

console.log(children);

Array.from(children).forEach(child => {
    child.style.backgroundColor = "orange"
});