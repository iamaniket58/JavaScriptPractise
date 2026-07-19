// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// User.prototype.greet = function () {
//     console.log(`Hello ${this.name}`);
// };

var x = 22;
let y = 21;
function HelloSum() {
    console.log(this);
    let a = 22;
    var b = 21212
    let sum = a + b;
    return sum;
}
let sum = HelloSum();
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};

class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const user1 = new User("Aniket", 27);
const user2 = new UserClass("Aniket", 27);
