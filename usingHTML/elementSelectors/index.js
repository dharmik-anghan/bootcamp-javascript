/*
element selectors = Methods used to target and manipulate HTML elements
They allow you to select one or multiple HTML elements
from the DOM (DOcument Object Model)

1. document.getElementById() // ELEMENT OR NULL
2. document.getElementsClassName() // HTML COLLECTION
3. document.getElementByTagName() // HTML COLLECTION
4. document.querySelector() // ELEMENT OR NULL
5. document.querySelectorAll() // NODELIST
*/

// const myHeading = document.getElementById('my-heading')

// myHeading.style.backgroundColor = "yellow"
// myHeading.style.textAlign = "center"

// console.log(myHeading)

// const fruits = document.getElementsByClassName("fruits");


// for (let fruit of fruits) {
//     fruit.style.backgroundColor ="yellow";
// }

// fruits.forEach(); // Not Allowed

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow"
// })
// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "grey"
// }

// for (let liElement of liElements) {
//     liElement.style.backgroundColor = "lightgreen"

// }
// console.log(h4Elements);



const elemetn = document.querySelector("h4");

elemetn.style.backgroundColor = "yellow"

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = 'lightgreen'
})