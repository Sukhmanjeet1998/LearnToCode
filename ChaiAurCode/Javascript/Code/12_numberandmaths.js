// node ChaiAurCode/Javascript/Code/12_numberandmaths.js

/* Number */

const score = 400;
// console.log(score);
const balance = new Number(12);
// console.log(balance);

// console.log(typeof(balance.toString()), balance.toString(), balance.toString().length);
// console.log(balance.toFixed(2));

const newNum = 23.886;

// console.log(newNum.toPrecision(1));
// console.log(newNum.toPrecision(2));
// console.log(newNum.toPrecision(3));

const newNum2 = 1123.886;

// console.log(newNum2.toPrecision(1));
// console.log(newNum2.toPrecision(2));
// console.log(newNum2.toPrecision(3));

const newNum3 = 1000000;

// console.log(newNum3.toLocaleString('en-IN'));

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

/* Maths */

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-55));  // -ve to +ve
// console.log(Math.round(4.235));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.1));
// console.log(Math.min(4,3,8,1,0));
// console.log(Math.max(4,3,8,1,0));
// console.log(Math.random());  // between 0 & 1  (but not 1)
// console.log(Math.random()*10);  // between 0 & 10 (but not 10)
// console.log((Math.random()*10)+1);  // between 1 & 11 (but not 11)

const min = 10;
const max = 20;

console.log((Math.floor((Math.random()*(max-min)))+1)+min); // 1 to 10






