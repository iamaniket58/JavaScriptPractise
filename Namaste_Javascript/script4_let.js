var a = 22;
let b = 111111111123;
console.log(a);
console.log(b);
console.log(window.a);
console.log(window.b);
console.log(this.a);
console.log(this.b);
Mertian()
function Mertian() {
    console.log("Inside Function")
    var x = 2323;
    let y = 11;
    console.log(x);
    console.log(y);
    console.log(window.x);
    console.log(window.y);
    console.log(this.x);
    console.log(this.y);
}

// Global Execution Context
// │
// ├── Global Object (window)
// │     └── a → 10   (var)
// │
// └── Global Lexical Environment
//       ├── b → 20   (let)
//       └── c → 30   (const)