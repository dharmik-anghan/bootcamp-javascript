const readline = require('readline');

const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

read.question("Enter Radius: ", (r) => {
    const a = 3.14*r*r
    console.log(`Area of circle is, ${a.toFixed(2)}, "having the radius ${r}`);
    read.close();
})



