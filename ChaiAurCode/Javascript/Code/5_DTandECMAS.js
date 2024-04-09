// node ChaiAurCode/Javascript/Code/5_DTandECMAS.js

"use strict";  // Treat all JS code as newer version
console.log("DataTypes and ECMAScript!");

// Primitive Datatype : NNBBSSU
let myName = "John";
let mySign = Symbol("john@hi"); // for make specific thing unique
let hasMoney = null;  // null is a object
let age = 25;
let phnNo = BigInt(9999999999);
let isMarried = false;
let willMarry;

console.table([myName, mySign, age, hasMoney, isMarried, phnNo, willMarry]);

// ECMAScript : Standard has been setup to write JS under a set protocol.