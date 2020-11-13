let employee2 = ["Chandler", "Bing", "Female"];
//let employee = ["Chandler", "Bing"];

let [fname1, lname1, gender1="Male"] = employee2; //destructuring this array

//the rest operator ... helps to have single variable that can contein group
//of elements

//let [, , gender] = employee;
console.log(fname1);
console.log(lname1);
console.log(gender1);

//take the individual elements in array and assign to individual elements