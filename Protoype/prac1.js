let arr = [1, 2, 4, 21, 11, 12, 21, 34, 32];
// let newArray=arr.map(function (x,i,array){
//     return x**2;
// })
console.log(arr);
// console.log(newArray);
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callbackFunction) {
        let arr = this;
        let transformed = [];
        for (let i = 0; i < arr.length; i++) {
            let x = callbackFunction(arr[i], i, arr);
            transformed.push(x);
        }
        return transformed;
    }
}
let nr = arr.myMap((x) => {
    let a = 22;
    let b = 22 - 2;
    return x ** (a - b);
});
console.log(nr)