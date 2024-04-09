// What we are going to learn!
/*
Javascript is prototype language.
Javascript and classes

OOP 
Object (collection of properties and methods)

Why use OOP
Easier to understand code

Parts of OOP
Object literals, Contructor function, prototypes,classes, Instances (new, this)
Abstraction, Polymorphism, Inheritance, Encapsulation.
*/

// Prototypes is basically methods in objects and other are properties.
// this keyword means current context(Object)
/*
const user = {
    fname : "John",
    lname: "Doe",
    age: 25,
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(this); // get user object 
        return `Hi I am ${this.fname+this.lname} and my age is ${this.age} and its ${this.signedIn} I SignedIn!`
    }
};

// Not to repeat objects again of same properties and method we use constructor.

console.log(user);
console.log(user.fname);
console.log(user.getUserDetails());
console.log(this);  // get window object

*/

function User_(username, loginCount, isLoggedIn){
    //myvariable = value passed
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;
    this.greeting = function(){
        console.log(`Welcome ${this.username}!`);
    }
    return this;
}

// new : constructor function (Make new instance).
const user1 =  new User_("John",8, true);
const user2 =  new User_("Johnny",12, false);
console.log(user1);
console.log(user2);
console.log(user1.isLoggedIn);
console.log(user2.isLoggedIn);
console.log(user1.greeting());
console.log(user2.greeting());
console.log(user1.constructor());


// new -> empty object create (new instance) -> constructor function called because of new keyword with arguments passed -> return this;



