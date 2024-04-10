// node ChaiAurCode/Javascript/Code/10_stackandheap.js
console.log("Stack and Heap");

let learn = "Javascrit";
// console.log(learn);

let anotherlearn = learn;   // Stack :  Here we are just providing the value copy not reference
// console.log(anotherlearn);

anotherlearn = "NodeJS";

// console.log(anotherlearn);
// console.log(learn);


let user = {
    email: "hello@abc.com",
    upi: "abc@xyz"
};

let user2 = user;  // Heap: Here you are getting reference (address)

console.log(user);
console.log(user2);

user2.email = "newmail@def.com";  // Here you are changing the value in the store address, So It will change for all who are accessing the heap value.

console.log(user);
console.log(user2);