// node ChaiAurCode/Javascript/Code/29_highorderarray.js

/* Array specific loop */

// ["","",""],   
// [{},{},{},{}]

// Iterator : objects, array, string

// for of loop.............................
// Array iterate through for of loop
/*
const myArr = [1,2,3,4,5];
for (const value of myArr) {
    console.log(value);
}
*/

// String iterate through for of loop
/*
const greeting = "Hello Sir, Happy Birthday!";
for (const valueG of greeting) {
    console.log(valueG);
}
*/

// Maps (Object)  iterate through for of loop
/*
const map = new Map();  // access object
map.set("IN","INDIA");
map.set("USA","United State of America");
map.set("FR","FRANCE");
map.set("IN","INDIA");

console.log(map);

for (const [keyM,valueM] of map) {
   console.log(`${keyM} = ${valueM}`); 
}
*/

// Objects are not iterate through :  for of loop
/*
const myInfo = {
    fname : "John",
    lname : "Doe",
    age : 25
};


for (const [keyI,valueI] of myInfo) {
    console.log(`${keyI},${valueI}`);
}
*/

// FOR IN LOOP..............................
// Objects are  iterate through : for in loop
/*
const myInfo = {
    fname : "John",
    lname : "Doe",
    age : 25,
    workProfile : "Developer",
    salary : 25500.70
};

for (const key in myInfo) {
    console.log(`${key} => ${myInfo[key]}`);
}
*/

// Array also iterate through : for in loop
/*
const myArr = [1,2,3,4,5];
for (const key in myArr) {
    console.log(`${key} => ${myArr[key]}`);
}
*/

// String also iterate through : for in loop
/*
const myName = "John Doe";
for (const key in myName) {
    console.log(`${key} => ${myName[key]}`);
}
*/

// But Map are not iterate through :  for in loop  (Map are not iterable)
/*
const map = new Map();  // access object
map.set("IN","INDIA");
map.set("USA","United State of America");
map.set("FR","FRANCE");
map.set("IN","INDIA");

for (const [key,value] in map) {
    console.log(`${key} => ${value}`);
}
*/

// Reason for Map 
/*
The for...in loop in JavaScript is primarily used to iterate over the enumerable properties of an object. It's not designed to iterate over the elements of an array.

Array.prototype.map() is a higher-order function specifically designed for iterating over the elements of an array. It applies a callback function to each element of the array and returns a new array containing the results of calling the callback on each element.
*/

// For each loop...........................

// Array
/*
const coding = ["Javascript","C++","Java","Python","Scala","Ruby","C"];

coding.forEach((value, key)=>{
    console.log(`${key}=>${value}`);
});
*/

// Map
/*
const map = new Map();  // access object
map.set("IN","INDIA");
map.set("USA","United State of America");
map.set("FR","FRANCE");
map.set("IN","INDIA");

// console.log(map);

map.forEach((value, key)=>{
    console.log(`${key}=>${value}`);
});
*/

// Array with objects
/*
const myCoding = [
    {
        languageName : "Python",
        languageFileName : "Python Snake",
    },
    {
        languageName : "Jvascript",
        languageFileName : "Web Development",
    },
    {
        languageName : "C++",
        languageFileName : "High Frequency Trading",
    }
];

myCoding.forEach((values, keys)=>{
    console.log(values.languageFileName);
});
*/

// String (Not work)

// Object (Not work)


