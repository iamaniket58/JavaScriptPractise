let obj1 = {
    fname: "Aniket",
    lname: "Kumar",
    getFullName: function () {
        if (this.lname) {
            return `My Full Name is ${this.fname} ${this.lname}`
        }
        return `My First Name is ${this.fname}`
    }
}

let obj2 = {
    fname: "Amit",
    lname: "singh"
}
obj2.__proto__ = obj1;
console.log(obj1.getFullName())
// let s1=obj1.toString();
// console.log(s1)
console.log(obj2.getFullName())

