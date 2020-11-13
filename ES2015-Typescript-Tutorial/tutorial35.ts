let myMap3 = new WeakMap();
let obj2 = {};
myMap3.set(obj2,"Hello World");
console.log(myMap3.get(obj2));
obj2 = 0;