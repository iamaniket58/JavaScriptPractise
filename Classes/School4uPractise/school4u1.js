
let user1 = {
    name: "Aniket",
    age: 27,
    greet: function () {
        console.log(`Hello ${this.name} your age is ${this.age}`)
    }
}

function user(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            console.log(`Hello ${this.name} your age is ${this.age}`)
        }

    }
}
let u1=user("Aniket",27)
console.log(u1);
console.log(u1.greet());
let u2=user("Shakshi",29)
console.log(u2);
console.log(u2.greet());