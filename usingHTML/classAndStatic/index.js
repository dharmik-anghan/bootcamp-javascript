// class Product{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax)
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct()
// product2.displayProduct()
// product3.displayProduct()

// const total = product2.calculateTotal(salesTax);

// console.log(`Total price with tax: ${total.toFixed(2)}`);


// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2;
//     }
//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// };

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));


// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`)
//     }

//     sayHello() {
//         console.log(`Hello, my username is ${this.username}`);
        
//     }
// }

// const user1 = new User("Dharmik");
// const user2 = new User("Patrick");
// const user3 = new User("John");


// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// console.log(User.userCount);
// User.getUserCount();

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// ----------------------- INHERITANCE --------------------------------------

// class Animal{
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`);
 
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
 
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit"

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{
//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal{
//     name = "hawk"

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.alive = false
// console.log(rabbit.alive);

// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();


// ----------------------- SUPER Keywords --------------------------------------

// super = the parent, this = this object

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);

    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);

    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawl = new Hawk("hawk", 3, 50);

console.log(hawl.name)
console.log(hawl.age)
console.log(hawl.flySpeed)

rabbit.run();
hawl.fly();
fish.swim();
