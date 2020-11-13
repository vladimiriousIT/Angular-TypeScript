let employee3 = {
    fname: "Chandler",
    lname: "Bing",
    gender: "Male"
}
//destruct project 
let {fname: f, lname: l, gender: g} = employee3; //create alias

console.log(f);
console.log(l);
console.log(g);
//use the aliases