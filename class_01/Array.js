const myArr = [2,3,1,4,6,7]
// myArr.push(0)
console.log(myArr);// [2,3,1,4,6,7,0]
myArr.pop() // [2,3,1,4,6]
console.log(myArr)
myArr.unshift(99)
console.log(myArr); // [99,2,3,1,4,6]
myArr.shift()
console.log(myArr);//[2,3,1,4,6]
const newArray =  myArr.join();
console.log(newArray);// 2,3,1,4,6

///   slice and splice

const newArr = [0,1,2,3,4,5]
const newOne = newArr.slice(0,3)
console.log("A",newOne);//[0,1,2]
const newSecond = newArr.splice(0,3); // its use to main array remove the items
console.log("B",newArr);