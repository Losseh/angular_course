"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var x1 = 5;
if (x1 > 10) {
    console.log('x1 is bigger than 10');
}
else {
    console.log('x1 is not bigger than 10');
}
var numbers = [1, 2, 3, 10];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) { // for each element in array
    var n = numbers_1[_i];
    console.log(n);
}
// for (let n IN numbers) -> would be indexes of elements of array - do not do this!
// ENUMs
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["Standard"] = 0] = "Standard";
    CustomerType[CustomerType["Premium"] = 7] = "Premium";
    CustomerType[CustomerType["VIP"] = 8] = "VIP";
})(CustomerType || (CustomerType = {}));
function welcome_cust(name, type) {
    if (type === CustomerType.VIP) {
        console.log("Welcome " + name);
    }
}
welcome_cust('Adrian', CustomerType.Standard);
welcome_cust('Łukasz', CustomerType.VIP);
console.log(CustomerType.VIP); // yields 8
console.log(CustomerType[CustomerType.Premium]);
var jan = new customer_1.Customerr('Jan', 123, 'Some Advisor');
console.log(jan.welcome());
