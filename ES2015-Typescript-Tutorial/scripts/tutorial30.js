"use strict";
var mySet2 = new Set();
var ob12 = {};
var ob22 = {};
mySet2.add("Hello");
mySet2.add(1); // set contains only unique values
mySet2.add(ob12);
mySet2.add(ob22);
console.log(mySet2.size);
var newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet.size);
var chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);
console.log(newSet.has(5));
console.log(newSet.delete(1));
console.log(newSet.size);
//# sourceMappingURL=tutorial30.js.map