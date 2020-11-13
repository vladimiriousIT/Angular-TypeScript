"use strict";
var mySet1 = Object.create(null);
mySet1.id = true;
if (mySet1.id) {
    console.log("id exists");
}
var myMap2 = Object.create(null);
myMap2.name = "Chandler";
var val = myMap2.name;
console.log(val);
myMap1[100] = "Hello";
console.log(myMap1["100"]);
var ob11 = {};
var ob21 = {};
myMap2[1] = "World";
console.log(myMap2[2]);
console.log(ob11.toString());
console.log(ob21.toString());
//# sourceMappingURL=tutorial29.js.map