// node ChaiAurCode/Javascript/Code/15_array2.js

const myArr = [1,2,3,4,5,6];
const marvel = ["thor","ironman","spiderman"];
const dc = ["batman","superman","flash"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][2]);

const newHeroes = marvel.concat(dc);
// console.log(newHeroes);

const all_new_heroes = [...marvel, ...dc];
// console.log(all_new_heroes);

const another_arr = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]];
const another_arr2 = another_arr.flat(Infinity);
// console.log(another_arr2);

let strMyName = "Sukhman";
let myNameArr = Array.from(strMyName);
// console.log(myNameArr);

let scr1 = 100;
let scr2 = 200;
let scr3 = 300;

let scoreArr = Array.of(scr1,scr2,scr3);
// console.log(scoreArr);
