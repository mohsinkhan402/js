const accountId = 76544
let accountEmail = "mohsinsk402@gmail.com"
var accountPassword ="000000"
accountCity = "Delhi";

// accountId = 2 // not allowed

accountEmail = "mohsin@gmail.com"
accountPassword ="12345"
accountCity = "Aligarh"

/*
Prefer not to use var because of 
issue of block and functional scope
*/
console.log(accountId);

console.table([accountEmail,accountPassword,accountCity])