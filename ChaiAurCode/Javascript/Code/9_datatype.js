// node ChaiAurCode/Javascript/Code/9_datatype.js

console.log("DataTypes: {Primitive and Non-Primitive}");

// Primitive
// String, Symbol, Number, Null, Boolean, BigInt, Undefined

// Non Primtive
// Array, Objects, Function

// Javascript is dynamic type language {In dynamically-typed languages like JavaScript, variables can hold values of any type, and their types are determined at runtime based on the value assigned to them.}

// Primitive
/*
const name = "Sukhman";
const school_id = Symbol("1180");
const collage_id = Symbol("1180");
const age = 25;
const hasMoney = null;
const isMarried = false;
const phnNo = BigInt(9999999999);
const newPhnNo = 8888888888n;
let willMarry;

console.log(school_id === collage_id);  // false
console.log(phnNo);  // false
console.log(newPhnNo);  // false

console.table([typeof name,typeof school_id,typeof collage_id,typeof age,typeof hasMoney,typeof isMarried,typeof phnNo,typeof newPhnNo, typeof willMarry]);
*/

// Non Primtive
/*
const heros = ["shaktiman", "nnagraj", "dooga"]
let obj = {
    name: "john",
    age: 25
};
const message = function() {
    console.log("HI");
}
message();
console.log(heros);
console.log(obj);
console.table([typeof heros,typeof obj,typeof message]);
*/