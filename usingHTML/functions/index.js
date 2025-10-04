// function birthdaySong(username, age) {
//     console.log(`Happy birthday buddy ${username}. You just turned ${age}`);
// }

// birthdaySong("dharmik", 24);
// birthdaySong("john", 100)

// //  -----------------------------------------------------

// function add(x, y) {
//     return x + y;
// }

// result = add(2, 6)

// console.log(result)

// function isEven(number) {
//     return number % 2 === 0
// }

// console.log(isEven(2));


// function isValidEmail(email) {
//     if (email.includes("@")){
//         return true;
//     }
//     return false
// }

// console.log(isValidEmail("dharmikanghan09@gmail.com"));

//  -----------------------------------------------------


// function declaration vs expressions
// Usefull in callbacks, higher -order function, closures, event listeners

// const hello = function() {
//     console.log("Hello");
// }

// setTimeout(function(){
//     console.log("Hi!")
// }, 1);


// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });
// const cubes = numbers.map(function(element){
//     return Math.pow(element, 3);
// });
// console.log(squares);
// console.log(cubes);

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });
// console.log(`Even: ${evenNums}`);

// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0;
// });
// console.log(`Odd: ${oddNums}`);


// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// });
// console.log(`Total: ${total}`);

//  -----------------------------------------------------

// Arrow Functions = a concise wau to write a function (parameteres) => some code

// const hello = (name, age) => {console.log(`Hello ${name}`);
// console.log(`You are ${age} years old`);
// };
// hello("Dharmik", 25);

// setTimeout(() => console.log("Hello!!"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3))
console.log(cubes);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);
