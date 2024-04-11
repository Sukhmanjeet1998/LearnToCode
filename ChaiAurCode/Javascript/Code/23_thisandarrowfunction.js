// node ChaiAurCode/Javascript/Code/23_thisandarrowfunction.js

// Arrow Function
/*
const sum = (num1,num2) => {
    return num1 + num2;
}
console.log(sum(1,2));
*/
/*
const implicit_return = (num1,num2) => (num1 + num2);
console.log(implicit_return(1,2));
*/
/*
const implicit_return_ = (num1,num2) => ({fname : "Sukh"});
console.log(implicit_return_(1,2));
*/
 // this (keyword) : current context (fname,lname,age) / current object

/*
const user = {
    fname : "John",
    lname : "Doe",
    age : 25,
    message : function(){
        console.log(`Hi I am ${this.fname + this.lname} my age is ${this.age}`);
        console.log(this);
    }
};
// user.message();
user.fname = "sam";  
// user.message();

console.log(this);  // global context in node is empty but in browser its window object
*/

/*
function one(){
    let username = "John";
    console.log(this.username);  // undefined
}

one();
*/

/*
const chai = function () {
    const username = "John";
    console.log(this.username);  // undefined
}

chai();
*/

/*
const chai_ = () => {
    let username = "Johmn";
    console.log(`Hi I am ${this}`);  // undefined
};

chai_();
*/