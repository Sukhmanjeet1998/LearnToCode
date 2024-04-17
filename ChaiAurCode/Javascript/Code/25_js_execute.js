// node ChaiAurCode/Javascript/Code/25_js_execute.js

// How does javascript execute code + call stack 

// JS Execution Context  @1
// 1) Global Execution Context by (this)
// 2) Function Execution Context
// 3) Eval Execution Context

// Memory Creation Phase
// Execution Phase

// console.log(this);

let val1 = 5;
let val2 = 6;
const mySum = (val1, val2)=>{
    return val1  + val2;
}

let result1 = (mySum(5,6));
let result2 = (mySum(1,2));

console.log(result1);
console.log(result2);

// 1. Global Execution Phase (this)  -> 2. Memory Phase (val1 (undefined), val2 (undefined), mySum (function defination) , result1(undefined) , result2(undefined)) -> 3. Execution Phase (val1 = 5, val2 = 6, mySum (Execution Context (everytime function call) {1. New Variable environment + Execution thread})) -> 4. Return value to Global Execution Context


// Call Stack  @2  (LIFO)



 










