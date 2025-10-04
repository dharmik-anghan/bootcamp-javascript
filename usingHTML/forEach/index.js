// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function display(element) {
//     console.log(element);
    
// }

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2)
// }

// function cube(element, index, array) {
//     array[index] = Math.pow(element, 3)
// }

// function triple(element, index, array) {
//     array[index] = element * 3;
// }


// - -------------------

let fruits = ["apple", "orange", "banana", "coconut"]

x = fruits.forEach(upperCase)
fruits.forEach(display)

fruits.forEach(lowerCase)
fruits.forEach(display)

fruits.forEach(capitalize)
fruits.forEach(display)

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
    return array;
}

function display(element) {
    console.log(element);
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}