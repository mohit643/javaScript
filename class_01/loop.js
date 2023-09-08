const card = [
    {
        firstName: "Mohit",
        price:300
    },
    {
        firstName: "Rohit",
        price:1100
    },
    {
        firstName: "Golu",
        price:1200
    },
    {
        firstName: "Solu",
        price:400
    }
]

const fun = card.forEach( (name) => {
   console.log(name.firstName); // Mohit Rohit Golu Solu
   
})   

const arr = [];
const func = card.filter( (name) => {
   arr.push(name.firstName)
})
      
console.log(arr);