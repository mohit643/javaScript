const user = {
    name: "Mohit",
    Price: 200,
    Wlc: function () {
        console.log(`${this.name},"HEllo sir"`);   // this keyword working only objects
    }
};

    //  console.log(user.Wlc());


    ( (name) => {
        console.log(`"hey", ${name}`);
    } )('Mohit')

  //  falsy Values 

  const email = "sahumohit643@gmail.com";
  if (email) {
    console.log("You are Enter");
  }
  else{
    console.log("you are not enter");
  }

  // You are Enter  [its working on truthy values]

// falsy value  [false,0,-0,BigInt 0n,"",null,undefiend,NaN]

// Nullish coalescing Oprator (??):null undefined

let val1 = 1 ?? 2;
console.log(val1); // 1
val1 = null ?? 3;
console.log(val1); //3
val1 = null ?? undefined ?? 4
console.log(val1); // 4

// Ternary Oprater 

// condition ? true : false
