class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    getFullName() {
        if (this.lname != undefined)
            return `My Name is ${this.fname} ${this.lname}`
        return `MN: ${this.fname}`
    }
}

let p1=new Person("Aniket","Kumar");
console.log(p1.getFullName())

class px{
    
}
let k=new px();
console.log(k)

function Student(name, age) {
    this.name = name;
    this.age = age;
}
const s1 = new Student("A",20);
const s2 = new Student("B",21);
const s3 = new Student("C",19);