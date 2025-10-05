// const myBtn = document.getElementById("myBtn");
// const myH1 = document.getElementById("myH1");

// myBtn.classList.add("enabled");
// myBtn.classList.remove("enabled");

// myBtn.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })

// myBtn.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })

// myBtn.classList.add("enabled");
// myH1.classList.add("enabled")

// myBtn.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")){
//         event.target.textContent += "😣"
//     }

//     event.target.classList.replace("enabled", "disabled");
// })
// myH1.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")){
//         event.target.textContent += "😣"
//     }

//     event.target.classList.replace("enabled", "disabled");
// })

// ---------------------------------------------------------------

let buttons = document.querySelectorAll(".myBtns");

buttons.forEach(btn => {
    btn.classList.add("enabled");
});

buttons.forEach(btn => {
    btn.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(btn => {
    btn.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(btn => {
    btn.addEventListener("click", event => {
        if (event.target.classList.contains("disabled")){
            event.target.textContent += "🤬"
        }
        event.target.classList.replace("enabled", "disabled")
    })
});