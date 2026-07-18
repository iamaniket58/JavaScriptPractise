let arr = [1, 2, 12, 32, 22, 24, 11, 21];

//Way:1
let newArray1=arr.map(x=>x*22)

//Way:2
let newArray2 = arr.map((x, i, array) => x + i)

// Way:3
let newArray3 = arr.map((x, i, array) => {
    let a = array[0];
    let b = 234
    return x + a + b;
})

//Way:4
let newArray4 = arr.map(function (x, i, array) {
    if (x % 2 == 0) return x * 1
    else return x * 0.1;
})


//Way:5
function fun1(x){
    return x+2;
}
let newArray=arr.map(fun1)
console.log(arr)
console.log(newArray)