// node ChaiAurCode/Javascript/Code/16_objects.js

// singleton (make object with constructor)

// Object Literals
const mysingnature = Symbol();
const myInfo = {
    fname : "John",
    lname : "Doe",
    age : 25,
    isMarried : false,
    hasMoney : null,
    willMarry : undefined,
    phnNo : BigInt(8888888888),
    signature : Symbol("@@@"),
    [mysingnature]: "###",
    friends : ["Alex","Harry","Ron"],
    message : function(){
        console.log(`Hi I am ${this.fname + this.lname}, Welcome!`);
    }
};

// Access the method and property of objects
// console.log(myInfo);
// console.log(myInfo.isMarried);
// console.log(myInfo.signature, typeof myInfo.signature);
// console.log(myInfo["phnNo"]);
// myInfo.message();
myInfo.friends.push("Snap");

// console.log(myInfo);

// freeze object (can't change any Value of the object)
// Object.freeze(myInfo);

myInfo.isMarried = true;
// console.log(myInfo);
// console.log(myInfo[mysingnature]);

myInfo.greeting = function(){
    console.log(`Hello All`);
}

myInfo.greeting2 = function(){
    console.log(`Hello All I am ${this.fname}`);
}

// console.log(myInfo);
console.log(myInfo.greeting);
myInfo.greeting();
myInfo.greeting2();
