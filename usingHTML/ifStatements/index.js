const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const resultElement = document.getElementById("resultElement")
let age = 0;

myBtn.onclick = function() {

    age = myText.value;
    age = Number(age)

    if (age >= 1000) {
        resultElement.textContent = `You are too old to enter to site`
    }
    else if (age == 0) {
        resultElement.textContent = `You cannot enter. You were just born`

    }
    else if (age >= 18){
        resultElement.textContent = `You are old enough to enter this site`
        
    }
    else if (age < 0 ) {
        resultElement.textContent = `You cant be below 0`

    }

    else {
        resultElement.textContent = `You must be 18+ to enter thiss site`

    }
}


/* --------------------------------------------------------------------- */

// let age = 13;

// if (age >= 18) {
//     console.log("You are old enough to enter this site");
// } 
// else {
//     console.log("You must be 18+ to enter this site");
// }

/* --------------------------------------------------------------------- */


// let time = 14;

// if (time < 12) {
//     console.log("Good morning")
// }
// else {
//     console.log("Good afternoon")
// }

/* --------------------------------------------------------------------- */

// let isStudent = false;

// if (isStudent) {
//     console.log("You are a student")
// }
// else {
//     console.log("You aren't a student")
// }

/* --------------------------------------------------------------------- */

// let age = 15;
// let hasLicense = true;

// if (age >= 16) {
//     console.log("you are old enough to drive");

//     if (hasLicense) {
//         console.log("You have your license!")
//     }
//     else {
//         console.log("You don't have your lincense yet!")
//     }
// }
// else {
//     console.log("you must be 16+ to have license")
// }

/* --------------------------------------------------------------------- */

// let age = 0;

// if (age >= 1000) {
//     console.log("You are too old to enter to site")
// }
// else if (age == 0) {
//     console.log("You cannot enter. You were just born")
// }
// else if (age >= 18){
//     console.log("You are old enough to enter this site")
// }
// else if (age < 0 ) {
//     console.log("You cant be below 0")
// }

// else {
//     console.log("You must be 18+ to enter thiss site")
// }