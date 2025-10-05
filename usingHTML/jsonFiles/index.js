// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`
// const jsonPerson = `{
//     "name" : "Dharmik",
//     "age" : 23,
//     "isEmployed" : true,
//     "hobbies" : ["cricket", "music", "tv"]
// }`
// const jsonPeople = `[
//    {
//        "name" : "Dharmik",
//        "age" : 23,
//        "isEmployed" : true
//    },
//    {
//        "name" : "Patrick",
//        "age" : 34,
//        "isEmployed" : false
//    },
//    {
//        "name" : "Squidward",
//        "age" : 50,
//        "isEmployed" : true
//    },
//    {
//        "name" : "Sandy",
//        "age" : 27,
//        "isEmployed" : false
//    }
// ]`

// // const jsonString = JSON.stringify(people);
// console.log(jsonPeople);

// const parsedData = JSON.parse(jsonPeople)
// console.log(parsedData);



fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error))