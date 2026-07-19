Your first understanding is **very close**, but there's one important correction.

## Correction

You said:

> "When we call this function with a `new` keyword, then `this` points to the function itself."

❌ **Not exactly.**

It should be:

> **When we call a function using `new`, `this` points to the newly created object, not to the function itself.**

For example:

```javascript
function User(name) {
    this.name = name;
}

const user = new User("Aniket");
```

Internally, JavaScript roughly does this:

```javascript
const obj = {};
obj.__proto__ = User.prototype;

User.call(obj, "Aniket");

return obj;
```

So inside `User()`:

```javascript
this === obj
```

not

```javascript
this === User
```

This distinction is **very important**.

---

# Now let's dry-run your code exactly like the JavaScript engine.

```javascript
var x = 22;
let y = 21;

function HelloSum() {
    console.log(this);

    let a = 22;
    var b = 21212;

    let sum = a + b;

    return sum;
}

let sum = HelloSum();

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};

const user1 = new User("Aniket", 27);
```

We'll assume this is running in a browser (non-module script), since you've been using `window` in previous questions.

---

# Phase 1: Global Execution Context Creation

Whenever a JS file starts, the engine creates the **Global Execution Context (GEC)**.

The call stack is:

```
┌────────────────────┐
│ Global EC          │
└────────────────────┘
```

Before any line executes, JavaScript performs the **Memory Creation Phase**.

---

# Memory Phase

It scans the entire program.

### `var x`

Memory is reserved.

```
x → undefined
```

---

### `let y`

Memory is reserved too, but it is **uninitialized** (Temporal Dead Zone).

```
y → <uninitialized>
```

---

### `function HelloSum`

Entire function object is created.

```
HelloSum → function object
```

---

### `let sum`

Again

```
sum → <uninitialized>
```

---

### `function User`

```
User → function object
```

Also, when JavaScript creates a function object, it automatically creates a prototype object:

```
User
   │
   └──prototype────► {
                        constructor: User
                    }
```

---

`User.prototype.greet = ...`

Nothing happens yet.

That line hasn't executed.

---

`const user1`

```
user1 → <uninitialized>
```

---

At this point memory roughly looks like:

```
Global Memory

x --------> undefined

y --------> TDZ

sum ------> TDZ

user1 ----> TDZ

HelloSum -> function

User -----> function
               │
               ▼
          prototype
          {
             constructor: User
          }
```

Notice that `greet` is **not** on the prototype yet, because assignment statements run only during the execution phase.

---

# Phase 2: Execution Phase

Now JavaScript starts executing line by line.

---

## Line 1

```javascript
var x = 22;
```

```
x = 22
```

---

## Line 2

```javascript
let y = 21;
```

```
y = 21
```

---

## Line

```javascript
let sum = HelloSum();
```

Before assigning to `sum`,

JavaScript evaluates

```
HelloSum()
```

A new execution context is created.

---

# Call Stack

```
┌────────────────────┐
│ HelloSum EC        │
├────────────────────┤
│ Global EC          │
└────────────────────┘
```

---

# Memory Phase of HelloSum

Inside the function

```javascript
let a;
var b;
let sum;
```

Memory becomes

```
a -> TDZ

b -> undefined

sum -> TDZ
```

---

# Execution Phase of HelloSum

First statement

```javascript
console.log(this);
```

Since you called

```javascript
HelloSum();
```

without `new` and as a plain function:

```
this === window
```

(in a browser, non-strict mode).

Console prints

```
Window {...}
```

---

Next

```javascript
let a = 22;
```

```
a = 22
```

---

Next

```javascript
var b = 21212;
```

```
b = 21212
```

---

Next

```javascript
let sum = a + b;
```

```
sum = 21234
```

---

Return

```
21234
```

The `HelloSum` execution context is popped from the call stack.

```
┌────────────────────┐
│ Global EC          │
└────────────────────┘
```

Back in the global execution context:

```javascript
let sum = 21234;
```

So the global `sum` becomes:

```
sum = 21234
```

Notice there are **two different variables named `sum`**:

* Local to `HelloSum`
* Global

They are completely separate.

---

## Next line

```javascript
User.prototype.greet = function(){...}
```

Now the prototype object is updated.

It becomes

```
prototype

{
   constructor: User,

   greet : function(){}
}
```

---

## Next line

```javascript
const user1 = new User("Aniket",27);
```

This is where `new` changes everything.

---

### Step 1

JavaScript creates a brand-new empty object.

```
obj = {}
```

---

### Step 2

Prototype linkage is established.

```
obj.__proto__

↓

User.prototype
```

---

### Step 3

`User` is called with `this = obj`.

Conceptually:

```javascript
User.call(obj,"Aniket",27)
```

Now another execution context is pushed.

```
┌────────────────────┐
│ User EC            │
├────────────────────┤
│ Global EC          │
└────────────────────┘
```

Inside `User`:

```javascript
this.name = name;
```

becomes

```
obj.name = "Aniket"
```

---

Next

```javascript
this.age = age;
```

becomes

```
obj.age = 27
```

Now the object is

```
obj

{
   name: "Aniket",
   age: 27
}
```

---

The constructor doesn't explicitly return anything.

So `new` automatically returns `obj`.

Execution context is removed.

```
┌────────────────────┐
│ Global EC          │
└────────────────────┘
```

Finally

```javascript
user1 = obj
```

So memory becomes

```
user1

↓

{
   name: "Aniket",
   age: 27
}

       │
       ▼
User.prototype

{
    constructor: User,
    greet()
}
```

---

# Final Memory Diagram

```
Global EC

x --------> 22

y --------> 21

sum ------> 21234

HelloSum -> function

User -----> function
              │
              ▼
         prototype
         {
            constructor
            greet()
         }

user1 ---->

{
   name: "Aniket",
   age: 27
}

          │
          ▼
User.prototype
```

---

I think you're at the perfect stage to dive even deeper. The next topic that ties all of this together is **how `new` is implemented internally**. We can trace it almost line by line—showing exactly how the JavaScript engine allocates memory, creates the object, links the prototype, binds `this`, invokes the constructor, and decides what to return. Understanding those internal steps makes constructor functions, prototypes, and ES6 classes all click into place.
