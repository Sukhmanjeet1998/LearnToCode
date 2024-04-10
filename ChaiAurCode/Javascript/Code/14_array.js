// node ChaiAurCode/Javascript/Code/14_array.js

const myArr = [12,null,true,BigInt(999999999n),"John",Symbol("@"),undefined];
console.log(myArr);

// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr[4]);

const myArr2 = new Array("1",2);
// console.log(myArr2);

myArr2.push(3); // add element at last
// console.log(myArr2);

myArr2.pop(); // remove element from last
// console.log(myArr2);

myArr2.unshift(0); // add element at position 1st
// console.log(myArr2);

myArr2.shift(); // remove element from 1st
// console.log(myArr2);  

// console.log(myArr2);
// console.log(myArr2.includes("1"));
// console.log(myArr2.includes("7"));
// console.log(myArr2.indexOf("1"));
// console.log(myArr2.indexOf(1));

const myArr3 = myArr2.join();
// console.log(myArr2);
// console.log(myArr3);


const myA1 = myArr.slice(2,5);  // original array not manipualte
// console.log(myA1);

const myA2 = myArr.splice(2,5);  // original array manipualte
// console.log(myArr); 
// console.log(myA2); 



