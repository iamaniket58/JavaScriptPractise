class A{
    functionA(){
        console.log("I am function Inside A")
    }
}
class B{
    functionB(){
        console.log("I am function Inside B")
    }
}

let p=new B();
p.__proto__.__proto__=A.prototype
console.log(p.functionB())
console.log("----------------")
console.log(p.functionA())
