// function birthdaySong(username, age) {
//     console.log(`Happy birthday buddy ${username}. You just turned ${age}`);
// }

// birthdaySong("dharmik", 24);
// birthdaySong("john", 100)


function add(x, y) {
    return x + y;
}

result = add(2, 6)

console.log(result)

function isEven(number) {
    return number % 2 === 0
}

console.log(isEven(2));


function isValidEmail(email) {
    if (email.includes("@")){
        return true;
    }
    return false
}

console.log(isValidEmail("dharmikanghan09@gmail.com"));
