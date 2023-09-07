//Object Literals

const Obj = {
    name:"Mohit",
    age:18,
    location:"FTP",
    email:"sahumohit643@gmail.com",
    islogedIn:false,
    lastLogInDays:["sunday","Tuesday"]
}
console.log(Obj.email);
console.log(Obj["email"]);
console.log(Obj["lastLogInDays"]);

Obj.email = "mohit@gamil.com";
console.log(Obj.email);

// Object.freeze(Obj) // Freeze means don't change object Values 
Obj.email = "rohit@gmail.com",
console.log(Obj.email);

Obj.Fun = function () {
    console.log("Hello Your Function Is Ready");
}

// console.log(Obj.Fun());



Obj.Fun_1 = function () {
    console.log(`Hello,${this.name} Are You Ok `);
}

// console.log(Obj.Fun_1());
// console.log("Object",Obj);

//++++++++++++++++++++++++OBJECT++++++++++++++++++++++++++++++

const tinderUser = new Object;
console.log(tinderUser); // {} 

const multiUser = {};
console.log(multiUser); // {}

multiUser.id = "23sa",
multiUser.name  = "Mohit",
multiUser.email = "sahumohit643@gmail.com",

console.log(multiUser); // {id: "23sa", name: "Mohit", email: "sahumohit643@gmail.com"}

const regularUser = {
    name: "Rahu",
    Id : "23ssa",
    fullName: {
        userName: {
            FirstName: "Mohit",
            LastName: "sahu",
        }
    }
}

console.log(regularUser.fullName.userName.FirstName);

const Obj_1 = {1: "A", 2: "B"};
const Obj_2 = {4:"C",3: "D"};

const Obj_final = {...Obj_1,...Obj_2};
console.log(Obj_final); // {1: "A", 2: "B",4:"C",3: "D"}