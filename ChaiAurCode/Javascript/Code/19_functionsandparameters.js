// node ChaiAurCode/Javascript/Code/19_functionsandparameters.js

/*
function sayMyName(){
    console.log("Hello John!");
}

// sayMyName // reference (address)

sayMyName(); // execution
*/

function sum(a,b){  // parameters (value)
    return a+b;
}

// console.log(sum(5,3));  // arguments (value)
// console.log(sum(5,"3"));
// console.log(sum(5,"a"));
// console.log(sum(5,null));
// console.log(sum(5,undefined));

/*
function toUpper(value = "sam"){  // set default value if no value pass
    console.log(typeof value);
    return value.toUpperCase();
}

let myName = "sukhman";
console.log(toUpper());
console.log(toUpper(myName));
*/



