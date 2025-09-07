// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle")

// radius = Number(radius)

// circumference = 2 * PI * radius

// console.log(circumference)

const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value
    radius = Number(radius)
    circumference = radius * 2 * PI;

    document.getElementById("myH3").textContent = circumference.toFixed(2) + "cm";
}