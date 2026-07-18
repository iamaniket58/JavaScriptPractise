//Block scope
console.log(x)
var x = 10;
console.log("X on top " + x);
{
    console.log(x)
    var x = 22;
    console.log(`X in Block scope ${x}`);
}
console.log(`X at the end ${x}`);
console.log("------------------Function Scope-------------------")
//Function Scope
    console.log(y)
    var y = 10;
    console.log("Y on top " + y);
    function sum()
    {
        console.log(y)
         var y = 22; // y=22 //Understand this
        y=232
        console.log(`Y in Block scope ${y}`);
    }
    sum()
    console.log(`Y at the end ${y}`);