// node ChaiAurCode/Javascript/Code/11_strings.js

let str1 = "I";
let str2 = " Love ";
let str3 = 3000;

// console.log(str1 + str2 + str3);

let fname = "sukhmanjeet";
let lname = "singh"
// console.log(`Hi I am ${fname.toUpperCase() + lname.toLocaleUpperCase()} and name has ${(fname.toUpperCase() + lname.toLocaleUpperCase()).length} character`);

let myName = new String("SukhmanjeetSingh");
// console.log(myName);
// console.log(myName[0]);
// console.log(myName.length);
// console.log(myName.toLocaleUpperCase());
// console.log(myName.charAt(3));
// console.log(myName.indexOf("g"));

let newStr = myName.slice(-5);  
// console.log(newStr);

let newStr2 = myName.substring(11);
// console.log(newStr2);

let newStr3 = "                 S u k h m a n         "+"Singh";
// console.log(newStr3);
// console.log(newStr3.trim());

let newStr4 = "Jurassic Park!";
// console.log(newStr4.replace("Park","World"));
// console.log(newStr4.includes("World"));
// console.log(newStr4.includes("Park"));

console.log(newStr4.split(" "));
let newArr = Array.from(newStr4);
console.log(newArr);