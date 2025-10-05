/*
1. Create Element
2. Add Attributes/Properties
3. Append Element To DOM
4. Remove HTML Element
*/

// 1. Create Element
const newH1 = document.createElement("h1");

// 2. Add Attributes/Properties
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// 3. Append Element To DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1)
// document.getElementById("box1").prepend(newH1)

// const box4 = document.getElementById("box4");
// document.body.insertBefore(newH1, box4);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);


// 4. Remove HTML Element
document.getElementById("box1").removeChild(newH1)
