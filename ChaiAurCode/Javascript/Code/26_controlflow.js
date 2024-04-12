// node ChaiAurCode/Javascript/Code/26_controlflow.js
/*
if (2=="2") {
    console.log("Expression is true!");
}
*/
/*
if (2==="2") {
    console.log("Expression is true!");
} else {
    console.log("Expression is false!");
}
*/
/*
const balance = 1000;
if (balance > 500) console.log("Yes");
*/

/*
// Falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// "0", "false", " ", [], {}, function(){}
*/

/*
const myArr = [];
if (myArr.length === 0) {
    console.log("Array is empty");
}

const myobj = {};
if (Object.keys(myobj).length === 0) {
    console.log("object is empty");
}

console.log(false == 0);
console.log(false == '');
console.log('' == 0);
*/

// Nullish Coalescing Operator (??): (null or undefined will no execute only value)
/*
let val1,val2,val3,val4,val5,val6;

val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 10;
val4 = undefined ?? 20 ?? 10;
val5 = undefined ?? null ?? 1;
val6 = undefined ?? null;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
*/

/*
let myAge = 17;
console.log(myAge>=18?"You can drive":"Sorry, You can't drive");
*/