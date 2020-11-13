"use strict";
var firstName = "Vladimir";
var lastName = "Stratievs";
var person1 = {
    firstName: firstName,
    lastName: lastName
};
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return { firstName: firstName,
        lastName: lastName,
        fullName: fullName, isSenior: function () {
            return age > 60;
        } };
}
var p1 = createPerson("Ross", "Geller", 70);
console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.fullName);
console.log(p1.isSenior());
//console.log(person.firstName);
//console.log(person.lastName);
//# sourceMappingURL=tutorial15.js.map