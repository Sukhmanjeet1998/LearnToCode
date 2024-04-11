// node ChaiAurCode/Javascript/Code/17_objects2.js

// Singleton

// const helloApp = new Object();

// helloApp.id = "123abc";
// helloApp.fname = "sammy";
// helloApp.isLoggedIn = false;

// console.log(helloApp);

const regularUser = {
    email : "some@abc.com",
    fullname : {
        userfullname : {
            fname : "John",
            lname : "Doe"
        },
    },
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.fname);
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
};
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
};
const obj3 = {obj1,obj2};
// console.log(obj3);

// const obj5 = Object.assign(obj1,obj2);
// console.log(obj1);

const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);

const obj6 = {...obj1, ...obj2};  // (...) spread opr
// console.log(obj6);

// Arrays of Objects

const users = [
    {
        id : 1,
        email : "abc@1.com"
    },
    {
        id : 2,
        email : "def@2.com"
    },
    {
        id : 3,
        email : "ghi@3.com"
    }
];

// console.log(users[0]);
// console.log(users[0].id);
// console.log(users[2].email);