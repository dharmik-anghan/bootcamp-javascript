// hello(leave);

// function hello(callback) {
//         console.log("Good morning!");
//         callback();
// }

// function goodbye() {
//     console.log("Good bye!");
// }

// function leave() {
//     console.log("Leave!");
// }

// function wait() {
//     console.log("Wait!");
// }

function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 4, 5)