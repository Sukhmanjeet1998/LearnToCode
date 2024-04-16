// node ChaiAurCode/Javascript/Code/27_loop.js

// Iterations

/*
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element === 5) {
        console.log(`${element} is best number!`);
    }
    console.log(index);
}
*/

/*
In JavaScript, variables declared with const are block-scoped, meaning their scope is limited to the block in which they are defined. In your code snippet, the const element declaration is within the scope of the for loop block. Therefore, a new element variable is created and initialized with the value of index in each iteration of the loop.

Even though the value of index changes with each iteration, the const declaration ensures that a new element variable is created and scoped to each iteration of the loop, and it retains its value for the duration of that iteration. This behavior is consistent with how block-scoped variables work in JavaScript.
*/

/*
for (let index = 1; index <= 10; index++) {
    // console.log(`........Table of ${index}!`);
    for (let jndex = 1; jndex <= 10; jndex++) {
        // console.log(`${index} X ${jndex} = ${index*jndex}`);
    }
}
*/

/*
const myArr = ["flash", "batman", "superman"];
for (let index = 0; index < myArr.length; index++) {
    console.log(`${index} => ${myArr[index]}`);
}
*/

// Break and Continue

/*
const myArr = [1,2,3,4,5,6,undefined,8,9,10,11,undefined,13,14,undefined,16];
const newArr = [];

for (let index = 0; index < myArr.length; index++) {
    newArr[index] = myArr[index];
    // console.log(`${index} = ${newArr[index]}`);
    if (myArr[index] === undefined) {
        newArr[index] = index+1;
    }
    else if(myArr[index] >= 10){
        break;
    }
}

console.log(newArr);
*/