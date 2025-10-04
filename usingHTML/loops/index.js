// let username = "";

// while (username === "" || username === null) {
//     username = window.prompt("enter ur name");

// }

// console.log(`Hello ${username}`);


// do {
//     username = window.prompt("usernname");
// } while (username === "" || username === null)

// console.log(username);

// let loggedIn = true;
// let username;
// let password;

// while (!loggedIn){
//     username = window.prompt("username");
//     password = window.prompt("password");

//     if (username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in.");
//     }
//     else {
//         console.log("Try again");
        
//     }
// }

// do{
//     username = window.prompt("username");
//     password = window.prompt("password");

//     if (username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in.");
//     }
//     else {
//         console.log("Try again");
        
//     }
// }while (!loggedIn)


for (let i = 10; i >= 0; i--) {
    
    if (i == 5) {
        continue;
    }
    if (i == 8){
        break;
    }
    console.log(i)
}