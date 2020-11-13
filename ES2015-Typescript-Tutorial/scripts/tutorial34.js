"use strict";
/*
var numbers = [2,4,6,8];
numbers.forEach(arrayFunction);
function arrayFunction(element,index,array){
  console.log("arr["+index+"]= "+element);
};
*/
/*
let myMap3 = new Map([["fname","Chandler"],
                     ["lname","Bing"]]);
myMap3.forEach(mapFunction);
function mapFunction(value,key,callingMap){
  console.log(key+" "+value);
  console.log(myMap3 === callingMap);
}
*/
var mySet = new Set([1, 2, 3]);
mySet.forEach(setFunction);
function setFunction(value, key, callingSet) {
    console.log(key + " " + value);
    console.log(mySet === callingSet);
}
//# sourceMappingURL=tutorial34.js.map