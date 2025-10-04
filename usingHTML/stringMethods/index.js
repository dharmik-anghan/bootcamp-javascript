// let userName = "   Dharmikk";

// console.log(userName.charAt(1));

// console.log(userName.indexOf("k"))
// console.log(userName.lastIndexOf("k"))
// console.log(userName.length)


// console.log(userName);
// userName = userName.trim();
// console.log(userName);


// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(2));
// console.log(userName.startsWith("A"));
// console.log(userName.startsWith("D"));
// console.log(userName.endsWith("D"));
// console.log(userName.includes("X"));


// let phoneNumber = "123-456-7553";

// phoneNumber = phoneNumber.replaceAll("-", "");
// phoneNumber = phoneNumber.padStart(15, "0");
// phoneNumber = phoneNumber.padEnd(15, "0");

// console.log(phoneNumber);


const fullName = "Dharmik Anghan";

// let firstName = fullName.slice(0, 7);
// let lastName = fullName.slice(8);
// console.log(firstName);
// console.log(lastName);

// let firstChar = fullName.slice(0,1)
// let lastChar = fullName.slice(-1)
// console.log(firstChar);
// console.log(lastChar);

// console.log(fullName[1]);

// let firstName = fullName.slice(0, fullName.indexOf(" "))
// let lastName = fullName.slice(fullName.indexOf(" ") + 1)
// console.log(firstName);
// console.log(lastName);

const email = "dharmikanghan09@gmail.com"

let userName = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)
console.log(userName);
console.log(extension);
