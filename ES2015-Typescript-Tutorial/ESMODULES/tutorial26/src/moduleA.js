console.log('Module a log 1');
import {fname as f, lname as l} from './moduleB' //module B is hoisted
//imports are read-only

console.log('Module A log 2');
console.log(`${f} ${l}`);