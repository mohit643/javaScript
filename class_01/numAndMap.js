const score = 100;
console.log(score); // 100
const balance = new Number(400)
console.log(balance); // [Number: 400]
console.log(balance.toFixed(2));//400.00
const rupes = 1020000;
console.log(rupes.toLocaleString('en-IN')); // 10,20,000
console.log(rupes.toLocaleString()); // 1,020,000

//+++++++++++++++++++++++ maths +++++++++++++++++++++

console.log(Math.abs(-90)); //90
console.log(Math.round(2.6));//3
console.log(Math.ceil(2.2)); // 3
console.log(Math.floor(2.2)); //2
console.log(Math.min(1,4,2,4,9));//1
console.log(Math.max(0,6,8,8)); //8
console.log(Math.floor((Math.random())*10)); 
