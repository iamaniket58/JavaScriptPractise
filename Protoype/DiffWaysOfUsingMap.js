// ===============================================
// JavaScript Array.map() - Different Ways of Using
// ===============================================

let arr = [1, 2, 12, 32, 22, 24, 11, 21];

console.log("Original Array:");
console.log(arr);

// =====================================================
// Way 1: Simple Arrow Function
// =====================================================

let newArray1 = arr.map(x => x * 22);

console.log("\nWay 1: Multiply each element by 22");
console.log(newArray1);

// =====================================================
// Way 2: Multiple Parameter
// =====================================================

let newArray2 = arr.map((x, i) => x + i);

console.log("\nWay 2: Add current index to each element");
console.log(newArray2);

// =====================================================
// Way 3: Using {} and return 
// =====================================================

let newArray3 = arr.map((x, i, array) => {
    let firstElement = array[0];
    let constant = 234;

    return x + firstElement + constant;
});

console.log("\nWay 3: Using original array");
console.log(newArray3);

// =====================================================
// Way 4: Original Function Syntax
// =====================================================

let newArray4 = arr.map(function (x) {
    if (x % 2 === 0)
        return x;
    else
        return x * 0.1;
});

console.log("\nWay 4: Even numbers unchanged, odd numbers become 10%");
console.log(newArray4);

// =====================================================
// Way 5: Passing a Named Function
// =====================================================

function addTwo(x) {
    return x + 2;
}

let newArray5 = arr.map(addTwo);

console.log("\nWay 5: Passing a function");
console.log(newArray5);

// =====================================================
// Way 6: Returning Objects
// =====================================================

let newArray6 = arr.map(x => {
    return {
        original: x,
        square: x * x
    };
});

console.log("\nWay 6: Return objects");
console.log(newArray6);

// =====================================================
// Way 7: Convert Numbers to Strings
// =====================================================

let newArray7 = arr.map(String);

console.log("\nWay 7: Convert numbers to strings");
console.log(newArray7);

// =====================================================
// Way 8: Chaining map()
// =====================================================

let newArray8 = arr
    .map(x => x * 2)
    .map(x => x + 5);

console.log("\nWay 8: Chaining map()");
console.log(newArray8);

// =====================================================
// Way 9: filter() + map()
// =====================================================

let newArray9 = arr
    .filter(x => x % 2 === 0)
    .map(x => x * 100);

console.log("\nWay 9: filter() followed by map()");
console.log(newArray9);

// =====================================================
// Way 10: Using Ternary Operator
// =====================================================

let newArray10 = arr.map(x => x % 2 === 0 ? "Even" : "Odd");

console.log("\nWay 10: Even or Odd");
console.log(newArray10);

// =====================================================
// Way 11: Returning Arrays
// =====================================================

let newArray11 = arr.map(x => [x, x * 10]);

console.log("\nWay 11: Return arrays");
console.log(newArray11);

// =====================================================
// Way 12: Callback Without Return
// =====================================================

let newArray12 = arr.map(x => {
    console.log("Current Element:", x);
});

console.log("\nWay 12: No return statement");
console.log(newArray12);

// =====================================================
// Way 13: Using Math Functions
// =====================================================

let newArray13 = arr.map(Math.sqrt);

console.log("\nWay 13: Square root");
console.log(newArray13);

// =====================================================
// Way 14: Using parseInt Correctly
// =====================================================

let stringNumbers = ["10", "20", "30", "40"];

let newArray14 = stringNumbers.map(str => parseInt(str));

console.log("\nWay 14: parseInt");
console.log(newArray14);

// =====================================================
// Way 15: Access Previous Element
// =====================================================

let newArray15 = arr.map((x, i, array) => {
    if (i === 0)
        return x;

    return x + array[i - 1];
});

console.log("\nWay 15: Add previous element");
console.log(newArray15);

// =====================================================
// Original Array Check
// =====================================================

console.log("\nOriginal Array (Still Unchanged)");
console.log(arr);