// function *createGenerator(){
//     yield 1;
//     console.log("After 1st yiedl");
//     yield 2;
// }

// let myGen = createGenerator();
// console.log(myGen.next());

// console.log(myGen.next());
// console.log(myGen.next());

//when there are no more yields value is set to undefined and done to true

let person4 = {
    fname: "Chandler",
    lname: "Bing"
};

person4[Symbol.iterator] = function*(){
    let properties = Object.keys(person4);
    for(let t of properties){
        yield this[t];
    }
};
// for (let p of person4){
//     console.log(p);
    
// }