let mySet2= new Set();

let ob12 = {};
let ob22= {};

mySet2.add("Hello");
mySet2.add(1); // set contains only unique values
mySet2.add(ob12);
mySet2.add(ob22);
console.log(mySet2.size);

let newSet = new Set([1,2,3,4,4,4]);
console.log(newSet.size);

let chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);

console.log(newSet.has(5));
console.log(newSet.delete(1));
console.log(newSet.size);



