// node ChaiAurCode/Javascript/Code/6_DTconversionconfusion.js
console.log("DataType conversion confusion!"); 

let score = 33;
console.log(score, typeof(score));

let totalScore = 33 + "17";
console.log(totalScore, typeof(totalScore));

let total = 33 + Number("17");
console.log(total, typeof(total));

let isNumber = "123abc";
isNumber = Number(isNumber);
console.log(typeof(isNumber));
console.log(isNumber);