// node ChaiAurCode/Javascript/Code/13_dateandtime.js

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
let myCreatedDate2 = new Date(1998,8,6,13,0);
let myCreatedDate3 = new Date("2023-01-08");
let myCreatedDate4 = new Date("01-01-1999");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate2.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());
// console.log(myCreatedDate4.toLocaleString());
// console.log(myCreatedDate4);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));


let myTimeStamp = Date.now();
// console.log(myTimeStamp);

let newDate = new Date();
// console.log(newDate.getFullYear());
 
console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));