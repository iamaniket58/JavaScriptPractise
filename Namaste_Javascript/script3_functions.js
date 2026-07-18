var x=1;
console.log("Start",x)
a();
b();
function a(){
    console.log('Inside function a');
    console.log(x)
    var x=10;
    console.log(x)
}
function b(){
    console.log('Inside function b');
    console.log(x)
    var x=100;
    console.log(x)
}
console.log("End",x)