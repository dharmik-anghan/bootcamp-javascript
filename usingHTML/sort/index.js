// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => b - a);

// console.log(numbers);


// const people = [
//     {name: "Dharmik", age: 30, gpa: 3.0},
//     {name: "Patrick", age: 37, gpa: 1.5},
//     {name: "Squidward", age: 51, gpa: 2.5},
//     {name: "Sandy", age: 27, gpa: 4.0},
// ]

// people.sort((a, b) => a.name.localeCompare(b.name))

// console.log(people)

// people.sort(() => Math.random() - 0.5)

// console.log(people)

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

shuffle(cards)
console.log(cards)

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]
    }
}

// i = 12 -> 0.5 * 13 = 6.5 = 6 -> swap 6 and 12 = ['A', 2, 3, 4, 5, 6, 'K', 8, 9, 10, 'J', 'Q', 7]
// i = 11 -> 0.5 * 12 = 6 -> swap 6 and 11 = ['A', 2, 3, 4, 5, 6, 'Q', 8, 9, 10, 'J', 'K', 7]
// i = 10 -> 0.5 * 11 = 5.5 = 5 -> swap 5 and 10 = ['A', 2, 3, 4, 5, 'J', 'Q', 8, 9, 10, 6, 'K', 7]