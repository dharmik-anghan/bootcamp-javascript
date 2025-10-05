// Date(year, month, day, hour, second, ms)

// const date = new Date(2024, 1, 1, 2, 3, 4, 5);
// const date = new Date("2024-01-02T12:00:00Z");
// const date = new Date(1700000000000);
const date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getUTCHours());


date.setFullYear(2024);
console.log(date);


const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1){
    console.log("New Year");    
}