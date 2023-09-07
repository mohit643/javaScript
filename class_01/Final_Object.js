const My_Data = {
    name: "Mohit",
    age: 20,
    location: "FTP",
    email:"sahumohit643@gmail.com"
}

console.log(My_Data.email); // sahumohit643@gmail.com

const {email} = My_Data;
// console.log(email); // sahumohit643@gmail.com
const {email: ID} = My_Data // Its called dstrachure 
console.log(ID); // sahumohit643@gmail.com