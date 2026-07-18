Function.prototype.Describe = function () {
    console.log(`I am Decribe in function, called from ${this.name}`)
}
function Add(a, b) {
    console.log("llllll")
    return a + b;
}
Add.Describe()
// console.log(Array.prototype)
function fun1(x, y) {
    return x / y
}
function applyOperation(a, b, operation) {
    return operation(a, b);
}
let result = applyOperation(3, 4, fun1);

console.log(result);

function CreateCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
let res=CreateCounter()
console.log(res);