var x = 10;

function outer() {
    var x = 20;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();

console.log(x);