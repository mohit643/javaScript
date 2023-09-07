function addTwoNumber(num1, num2) {
    console.log(num1+num2);
}
//console.log(addTwoNumber(2,3)); // 5

const finalFun = addTwoNumber(1,0)
console.log("result",finalFun); // undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++//
function addTwoNumber(num1, num2) {
    let result = num1+num2;
    return result;
}

const final = addTwoNumber(3,8)
console.log(final); // 11

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//+++++++++++++++++++++++++++++++++++++++++++++++++++
function logInCondidate(userName) {
    
    console.log(`Hello ${userName}`);
}

console.log(logInCondidate("Mohit")); // Hello Mohit

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function logInCondidate(userName) {
    
    console.log(`Hello ${userName}`);
}

console.log(logInCondidate("")); // Hello 

//+++++++++++++++++++++++++++++++++++++++++++++++======

function logInCondidate(userName) {
    
    console.log(`Hello ${userName}`);
}

console.log(logInCondidate()); // Hello undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

function logInCondidate(userName) {
    if(userName === undefined){
        console.log("Plese Enter User Name");
        return
    }
    console.log(`Hello ${userName}`);
}

console.log(logInCondidate()); // Hello undefined



function addNumber(...num) {
    return num
}

console.log(addNumber(2,4,3,2,5,0));// [2,4,3,2,5,0]

const user = {
    name:"Mohit",
    Price:200
}
function handleObject(anyObject) {
    console.log(`Hello ${anyObject.name} and Your Price is ${anyObject.Price}`);
}

handleObject(user)