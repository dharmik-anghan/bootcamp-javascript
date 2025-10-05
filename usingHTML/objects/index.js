// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: () => {console.log("Hi! I am Spongebob")},
//     eat: () => console.log("I am eating a Krabby Patty"),
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => {console.log("Hey! I am Patrick...")},
//     eat: () => console.log("I am eating a roast bread, tomato"),
// }

// person1.eat();
// person2.eat();

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

// const person1 = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "123 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// console.log(person1.fullName);
// console.log(person1.age);
// console.log(person1.isStudent);
// console.log(person1.hobbies[2]);
// console.log(person1.address.street);
// console.log(person1.address.city);
// console.log(person1.address.country);

// for(const property in person1.address) {
//     console.log(person1.address[property]);
    
// }

// -----------------------------------------------------------------

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address)
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, 
//     "124 Conch St.", "Bikini Bottom", "Int. Water")

// const person2 = new Person("Patrick", 37, 
//     "125 Conch St.", "Bikini Bottom", "Int. Water"
// )

// const person3 = new Person("Squidward", 45, 
//     "126 Conch St.", "Bikini Bottom", "Int. Water"
// )

// console.log(person3.address.street);

// -------------------------ARRAYS OF OBJECTS----------------------------------------

const fruits = [
    {name: "apple", colors: "red", calories: 95},
    {name: "orange", colors: "orange", calories: 45},
    {name: "banana", colors: "yellow", calories: 105},
    {name: "coconut", colors: "white", calories: 87},
    {name: "pineapple", colors: "yellow", calories: 56},
]

fruits.push({name: "grapes", colors: "green", calories: 36})

// fruits.splice(1,2); remove index object at 1, 2

console.log(fruits);


fruits.forEach(fruit => console.log(fruit.name))

fruitNames = fruits.map(fruit => fruit.name)

console.log(fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.colors === "yellow")

console.log(yellowFruits);


const maxFruit = fruits.reduce((max, fruit) => 
    fruit.calories > max.calories ? fruit: max)

const minFruit = fruits.reduce((min, fruit) => 
    fruit.calories < min.calories ? fruit: min)

console.log(maxFruit);
console.log(MediaSessionFruit);

