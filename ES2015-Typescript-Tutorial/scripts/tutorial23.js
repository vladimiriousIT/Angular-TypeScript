"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class Inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + " Person constructor");
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
//Inherit Person
//If there is no constructor in the derived class
//Will be used the constructor from the parent class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        //sub class constructor
        console.log(name + " Employee construcor");
        return _this;
    }
    Employee.prototype.getID = function () {
        return _super.prototype.getID.call(this);
    };
    return Employee;
}(Person));
var e = new Employee("Chandler");
console.log(e.getID()); //Because parent class have method getId 
//Employee has access to this method
//# sourceMappingURL=tutorial23.js.map