let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a, b)


const colors = ["red", "blue", "green", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

const person1 = {
    firstName : "Dharmik",
    lastName : "Anghan",
    age: 30,
    job: "AI/ML Developer",
}

const person2 = {
    firstName    : "Patrick",
    lastName : "Start",
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;


console.log(firstName, lastName, age, job);


function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1)
displayPerson(person2)