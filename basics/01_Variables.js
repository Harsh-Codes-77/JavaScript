const accountID = 12345
let accountEmail = "pharshpathak703@gmail.com0"
var accountPassword = "102034"
accountCity = "Jaunpur"

/*
Preferred not to use var
because of issue in block scope and functional scope
*/

accountEmail = "Harsh@gmail.com"
accountPassword = "12345"
accountCity = "Jaunpur"

console.table([accountEmail, accountPassword, accountCity])