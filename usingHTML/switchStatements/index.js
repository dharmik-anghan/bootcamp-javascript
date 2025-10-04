// let day = 1;

// switch(day) {
//     case 1:
//         console.log("It is m");
//         break;
//     default:
//         console.log("Not a valid day");
//         break;
// }

let testScore = 51;
let letterGrade ;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);
