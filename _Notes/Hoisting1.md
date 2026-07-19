Excellent observation. This is actually one of the **biggest differences** between function declarations and class declarations. You're noticing something that many JavaScript developers don't realize.

Let's compare them.

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;
}
```

vs

```javascript
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}
```

They look similar, but they are **not treated exactly the same during the creation phase**.

---

# Memory Creation Phase

When the engine starts executing your script, it scans the entire file.

It finds:

```javascript
var x
```

Memory:

```
x → undefined
```

---

It finds

```javascript
let y
```

Memory:

```
y → <uninitialized>
```

(TDZ)

---

It finds

```javascript
function HelloSum(){...}
```

Function declarations are **fully hoisted**.

Memory:

```
HelloSum → function object
```

If this is a browser script, you'll also see:

```
window.HelloSum === HelloSum   // true
```

because **function declarations behave like `var` at the global level**.

---

Next it finds

```javascript
function User(){...}
```

Again:

```
User → function object
```

and

```
window.User === User   // true
```

---

Now it finds

```javascript
class UserClass { ... }
```

This is where things change.

A **class declaration is hoisted**, but **not initialized**.

Its behavior is like `let` and `const`.

So during memory creation:

```
UserClass → <uninitialized>
```

It is in the **Temporal Dead Zone (TDZ)** until execution reaches the class declaration.

That's why if you do:

```javascript
console.log(UserClass);

class UserClass {}
```

you get

```
ReferenceError
```

Whereas

```javascript
console.log(User);

function User() {}
```

works perfectly because functions are initialized during the creation phase.

---

# Why doesn't `UserClass` become a property of `window`?

This is by design.

Consider this:

```javascript
function User() {}
```

In a browser (non-module script):

```javascript
window.User
```

exists.

But

```javascript
class UserClass {}
```

does **not** create

```javascript
window.UserClass
```

Instead, it's stored in the **global lexical environment**, just like `let` and `const`.

So:

```javascript
window.UserClass
```

is

```
undefined
```

while

```javascript
UserClass
```

works perfectly after its declaration.

---

# Why did JavaScript designers do this?

Classes were introduced in ES6.

By then, JavaScript already had the problems of `var`:

* accidental global properties
* variable redeclaration
* confusing hoisting behavior

The designers wanted classes to behave like modern declarations (`let`/`const`), not like `var`.

So they intentionally made:

* block-scoped
* TDZ-protected
* not attached to `window`

This makes classes safer.

---

# Another interesting difference

Try this:

```javascript
User("Aniket", 27);
```

In sloppy mode, this executes (although it causes unintended behavior by setting properties on the global object). In strict mode, it throws because `this` is `undefined`.

Now try:

```javascript
UserClass("Aniket", 27);
```

You'll get:

```
TypeError:
Class constructor UserClass cannot be invoked without 'new'
```

Classes **must** be called with `new`.

---

# Internally, is a class still a function?

Yes.

Try:

```javascript
console.log(typeof User);
console.log(typeof UserClass);
```

Output:

```
function
function
```

Even a class is internally represented as a function object.

---

# Does the prototype still exist?

Absolutely.

```javascript
console.log(UserClass.prototype);
```

You'll see something like:

```
{
    constructor: UserClass,
    greet()
}
```

And when you write:

```javascript
const user = new UserClass("Aniket", 27);
```

the prototype chain is still:

```
user
   │
   ▼
UserClass.prototype
   │
   ▼
Object.prototype
```

Exactly the same prototype mechanism is used.

---

# Summary

| Feature                              | Function Declaration                            | Class Declaration                 |
| ------------------------------------ | ----------------------------------------------- | --------------------------------- |
| Hoisted                              | ✅ Fully initialized                             | ✅ Hoisted but uninitialized (TDZ) |
| Can use before declaration           | ✅ Yes                                           | ❌ No                              |
| Attached to `window` (global script) | ✅ Yes                                           | ❌ No                              |
| Behaves like                         | `var`                                           | `let` / `const`                   |
| Can call without `new`               | ✅ Yes (though not appropriate for constructors) | ❌ No, throws `TypeError`          |
| Has prototype                        | ✅ Yes                                           | ✅ Yes                             |

---

### One more clarification about what you saw in DevTools

You mentioned:

> "I saw that the user function is getting attached to the global object, but the class is getting attached to the script."

That's exactly right.

The browser maintains **two parts** of the global execution context:

1. **Object Environment Record** (backed by the global object, `window`)

   * `var`
   * function declarations

2. **Declarative (Lexical) Environment Record**

   * `let`
   * `const`
   * `class`

So in DevTools, you'll often see something like:

```
Global
├── Global Object (window)
│   ├── x
│   ├── HelloSum
│   └── User
│
└── Script (Lexical Environment)
    ├── y
    ├── sum
    ├── user1
    ├── user2
    └── UserClass
```

This isn't just a DevTools display choice—it reflects how the ECMAScript specification models the global environment. That's why `User` appears on `window`, while `UserClass` behaves like a lexical binding similar to `let` and `const`.
