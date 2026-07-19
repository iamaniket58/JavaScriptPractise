function Animal(name) {
    this.name = name;
}

Animal.prototype.sound = function () {
    console.log("Some sound");
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype.__proto__=Animal.prototype
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof");
};