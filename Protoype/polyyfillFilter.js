let arr = [1, 2, 4, 21, 11, 31, 44, 32, 34];
let fil = arr.filter((x, i) => i % 2 == 0);
console.log(arr)
console.log(fil)

let fil2 = arr.filter((x, i) => {
    if (i % 2 == 0) return x;
})
console.log(fil2)

if (!Array.prototype.filter) {
    Array.prototype.myFilter = function (callbackFunction) {
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            if (callbackFunction(this[i], i)) arr.push(this[i])
        }
        return arr;
    }
}