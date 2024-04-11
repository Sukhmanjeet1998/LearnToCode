// node ChaiAurCode/Javascript/Code/18_objects3.js

// Object de-structure and JSON API intro

const course = {
    course : "JS in hindi",
    price : 999,
    courseInstructor : "John"
};

// New way to call object properties
// {} : de-Structure
const {courseInstructor: instructor} = course;
console.log(instructor);

// JOSN (keys are also string)
/*
{
    "fname": "John",
    "course": "JS in hindi",
    "price": 999,
}
*/