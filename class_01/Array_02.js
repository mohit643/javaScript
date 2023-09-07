const user = {
    name: "Mohit",
    Price: 200,
    Wlc: function () {
        console.log(`${this.name},"HEllo sir"`);   // this keyword working only objects
    }
}

console.log(user.Wlc());