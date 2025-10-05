/*
NodeList = Sttic collection of HTML elements by (id, class, element)
           Can be created by using querySelectorAll()
           Similar to an array, but (map, filter, reduce)
           NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// buttons.forEach(btn => {
//     btn.style.backgroundColor = "green";
//     btn.textContent += " 🍾";
// });

// event listner

// buttons.forEach(btn => {
//     btn.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

// buttons.forEach(btn => {
//     btn.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// })

// buttons.forEach(btn => {
//     btn.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// })
// ------------------------------------------------------------------------
// const newBtn = document.createElement("button");
// newBtn.classList = "myButtons"
// newBtn.textContent = "Button 5";
// document.body.appendChild(newBtn)

// console.log(buttons);

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// ------------------------------------------------------------------------

buttons.forEach(btn => {
    btn.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})