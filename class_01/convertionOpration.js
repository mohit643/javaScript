let scope = 33;
console.log(typeof(scope));
let intScope = String(scope);
console.log(typeof(intScope));
console.log(intScope);

/////////////////////////////////////

let accountName = "Mohit";
console.log(typeof(accountName));
let ScopeAccountName = Number(accountName);
console.log(typeof(ScopeAccountName));
console.log(ScopeAccountName);     // => NaN

////////////////////////////////////////

let accountCity = "";
console.log(typeof(accountCity));
let intAccountCity = Number(accountCity);
console.log(typeof(intAccountCity));
console.log(intAccountCity); ///  => 0