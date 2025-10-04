// let number = [1,2,3,4,5]
// let maximum = Math.max(...number)
// let min = Math.min(...number)

// console.log(maximum);
// console.log(min);
// console.log(...number);

// let username = "dharmik";
// let letters = [...username].join("-");

// console.log(letters);

// let fruits = ["apple", "orange", "banana"]
// let vegetables = ["carrots", "celery", "potatoes"]

// let foods = [...fruits, ...vegetables, "milk"];

// console.log(foods);

// --------------------- Rest Parameters

// Opposite of the spreadOperators

// function openFridge(...foods) {
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizaa";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);
// openFridge(food1, food2, food3, food4, food5);


// _----------------------

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result
}
function average(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}


const total = sum(1,3,4);
const avg = average(1,3,4, 10, 10, 10, 10);

console.log(`Your total is ${total}`);
console.log(`Your avg is ${avg}`);


function combineStrings(...strings) {
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Dharmik", "Anaghan")
console.log(fullName);
