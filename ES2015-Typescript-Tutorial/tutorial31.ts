// let mySet = new Set();
// let key = {};
// mySet.add(key);
// console.log(mySet.size);
// key = null;
// console.log(mySet.size);
// key = [...mySet][0];

let set = new WeakSet();
let key = {};
set.add(key);
console.log(set.has(key));
//key=null;

