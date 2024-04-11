// node ChaiAurCode/Javascript/Code/20_functionswithobjects.js

// Reat (Pass multiple value in functions) and spread operator (...)

function calPrice(num1, num2, num3, ...numN){
    return numN;
}

console.log(calPrice(1,2,3,4,5,6,7,8,9));  // passing multiple value


const user = {
    fname : "john",
    price : 55
};

function handleObj(anyObj){
    console.log(`Username is ${anyObj.fname} and Course price is ${anyObj.price}`);
}
handleObj(user)
handleObj({
    fname : "johnSena",
    price : 555
})


function getValuefromArray(arr_){
    return arr_[3];
}

console.log(getValuefromArray([1,2,3,4,5,6,7,8,9,0]));