// function Add(num1, num2) {
//     let sum = num1 + num2;
//     console.log("Sum is", sum)
//     // console.log(this)
//     return sum;

// }
// Add(12, 15)

// let obj = {
//     name: "Aniket",
//     age: 27,
//     city: "Bangalore",
//     isPro: function () {
//         console.log("Yes PROO")
//         console.log(this)
//         console.log(this.age**this.age)
//     }
// }
// console.log(obj.isPro())

class person{
    Name;
    Age;
    constructor(name,age){
        this.Name=name;
        this.Age=age;
    }
    SQAGE(){
        console.log("This.Age is ",this.Age)
        let sq=this.Age**2;
        return sq;
    }
}
let p1=new person("Aniket",27)
console.log(p1)
console.log(p1.SQAGE())
