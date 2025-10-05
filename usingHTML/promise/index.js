/*
Promise = An object that manages asynchronous operations.
Wrap a Promise Object around {asynchronous code}
"I promise to return a value"
PENDING -> RESOLVED or REJECTED
new Promise((resolve, reject) => {asynchronous, code})
*/

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = false;

            if (dogwalked) {
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You DIDN'T walk the dog")
            }
        }, 1500);
    });
}

function clearnKitchen() {
    
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                const kitchenCleaned = true;

                if (kitchenCleaned) {
                    resolve("You clean the kitchen 🧑‍🍳");
                }
                else{
                    reject("you DIDN'T cleaned the kitchen")
                }
            }, 2500);
    })
}

function takeOutTrash() {
    
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const trashTakenOut = true;

            if (trashTakenOut){
                resolve("You take out the trash 🗑️");
            }
            else{
                reject("you DIDN'T take out trash")
            }
        }, 2500);
    })
}

// walkDog(() => {
//     clearnKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finshed all the chores!");
            
//         });
//     });
// })

walkDog().then(value => {
    console.log(value); 
    return clearnKitchen()
}).then(value => {
    console.log(value)
    return takeOutTrash();
}).then(value => {
    console.log(value);
    console.log("You finshed all the chores!");
    
}).catch(error => console.error(error)
);