"use strict";
// let mySet = new Set();
// let key = {};
// mySet.add(key);
// console.log(mySet.size);
// key = null;
// console.log(mySet.size);
// key = [...mySet][0];
var set = new WeakSet();
var key = {};
set.add(key);
console.log(set.has(key));
//key=null;
//# sourceMappingURL=tutorial31.js.map