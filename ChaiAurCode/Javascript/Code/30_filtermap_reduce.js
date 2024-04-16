// node ChaiAurCode/Javascript/Code/30_filtermap_reduce.js

const coding = ["C++", "PHP", "Javascript"];

// for each didn't return any value.
/*
coding.forEach( (value, key, myArr) => {
    console.log(`${key} => ${value} , ${myArr}`);
});
*/

// return filter array, filter()
/*
const myNum = [1,2,3,4,5,6,7,8,9,10];
const evenNo = myNum.filter((value) => {
            return (value%2==0)
        });
console.log(evenNo);
*/

/*
const myCoding = [
    {
        languageName : "Python",
        languageFileName : "Game Development",
    },
    {
        languageName : "C#",
        languageFileName : "Game Development",
    },
    {
        languageName : "Javascript",
        languageFileName : "Web Development",
    },
    {
        languageName : "Typescript",
        languageFileName : "Web Development",
    },
    {
        languageName : "PHP",
        languageFileName : "Web Development",
    },
    {
        languageName : "Java",
        languageFileName : "Web Development",
    },
    {
        languageName : "C++",
        languageFileName : "High Frequency Trading",
    }
];


const language_ = myCoding.filter((value)=>{
        return (value.languageFileName === "Web Development");
});

console.log(language_);
*/


const myNum_ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
const myNewArr = myNum_.map((value)=>{
    return value/10;
});

console.log(myNewArr);
*/

/*
myNum_.forEach((value)=>{
     console.log( value+10);
});
*/

/*
const myNewArr = myNum_
    .map((value) => value / 10)
    .map((value) => value + 1)
    .filter((value)=>value>1.5);

console.log(myNewArr);
*/

// Reduce
/*
const myArr = [1,2,3,4,5];
const initialise = 5;

const sumOfArrayIs = myArr.reduce((accumulator, currentvalue)=>{
    console.log(`acc: ${accumulator} , currV: ${currentvalue}`);
    return (accumulator * currentvalue)
},initialise);
console.log(sumOfArrayIs);
*/

const myCodingPurchase = [
    {
        languageName : "Python",
        languageFileName : "Game Development",
        coursePrice : 1
    },
    {
        languageName : "C#",
        languageFileName : "Game Development",
        coursePrice : 2
    },
    {
        languageName : "Javascript",
        languageFileName : "Web Development",
        coursePrice : 3
    },
    {
        languageName : "Typescript",
        languageFileName : "Web Development",
        coursePrice : 4
    },
    {
        languageName : "PHP",
        languageFileName : "Web Development",
        coursePrice : 5
    },
    {
        languageName : "Java",
        languageFileName : "Web Development",
        coursePrice : 6
    },
    {
        languageName : "C++",
        languageFileName : "High Frequency Trading",
        coursePrice : 7
    }
];


const totalCoursePrice = myCodingPurchase.reduce((accumulator,currentvalue)=>{
        return accumulator + currentvalue.coursePrice;
},0);

console.log(totalCoursePrice);








