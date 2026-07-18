var x = 22;
console.log("X before function", x)
function add(num1, num2) {
    var x = num1 + num2;
    console.log("X inside function", x)
}
add(11, 121)
console.log("X after function", x)

let y= 123;
console.log("Y before function", y)
function adda(num1, num2) {
    let y = num1 + num2;
    console.log("Y inside function", y)
}
adda(11, 1421)
console.log("Y after function", y)