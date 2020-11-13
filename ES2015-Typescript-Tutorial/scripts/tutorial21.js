"use strict";
//class
//let p2 = new Person(); 
// classes are similar to functions with the difference that they are not hoisted//
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.greet = function () { };
    return Person1;
}());
var p2 = new Person1();
console.log(p2.greet === Person1.prototype.greet);
// employee();
// function employee(){}
// employee();
// console.log(typeof Person); //function
//# sourceMappingURL=tutorial21.js.map