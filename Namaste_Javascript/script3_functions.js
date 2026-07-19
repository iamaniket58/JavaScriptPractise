// var x=1;
// console.log("Start",x)
// a();
// b();
// function a(){
//     console.log('Inside function a');
//     console.log(x)
//     var x=10;
//     b()
//     console.log(x)

// }
// function b(){
//     console.log('Inside function b');
//     console.log(x)
//     var x=100;
//     console.log(x)
// }
// console.log("End",x)

//My Own Practise
var x = 1;
let y = 2
console.log("Start", x)
a();
b();
function a() {
    console.log('Inside function a');
    console.log(x)
    var x = 10;
    let y = 22
    b()
    console.log(x)

}
function b() {
    console.log('Inside function b');
    console.log(x)
    var x = 100;
    let y = 222;
    console.log(x)
}
console.log("End", x)