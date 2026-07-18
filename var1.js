    //Block Scope
    // console.log(x); //undefined
    // var x=22;
    // console.log(x); //22
    // //Block Scope
    // {
    //     console.log(x); //22
    //     x=234;
    //     console.log(x); //234
    // }
    // console.log(x) //234

//Functional Scope
console.log(y); //undefined
var y = 56;
console.log(y); //56
function print() {
    console.log(y); //56
    y=225; 
    console.log(y) //225
}
print();
console.log(y) //225

console.log("--------------------------------------------------")
console.log(z); //undefined
var z = 56;
console.log(z); //56
function print() {
    console.log(z); //undefined
    var z=225; 
    console.log(z) //225
}
print();
console.log(z) //56
