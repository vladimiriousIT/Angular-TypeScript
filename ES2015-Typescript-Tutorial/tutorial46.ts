let strArr1: string[] = ['Hello', 'world'];
let strArr2: Array<string> = ['Hello', 'world'];

let anyArr: any[] = ['Hello', 10, true];

//tuples

let myTuple: [string, number, number] = ["Hi", 15];

console.log(myTuple[0]);
console.log(myTuple[1]);

myTuple[2] = 100;
console.log(myTuple[2]);

