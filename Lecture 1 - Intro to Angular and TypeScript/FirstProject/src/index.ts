import * as express from 'express'
//const express = require('express');
import * as _ from 'underscore';
import {test} from './other';
import def from './other';

def(123);

interface IMyObj {
    name:string;
    age: number;
    data: boolean[];
    getInfo(text: string): void;
    getData(): {name: string, age: number} [];
}

interface IMyObj2 extends IMyObj {
    test: string[];
}
 
class User{
    // name: string;
    // age: number;
    // constructor(name: string, age: number){
    //     this.name = name;
    //     this.age = age;
    // }

    constructor(public name: string, public age: number){}
    //doSomething(obj: {name: string, age: number, data: boolean[] }) {
        doSomething(obj: IMyObj){
        //_.values()
        return _.range(0,10,1);
    }

    doSomethingElse<T extends IMyObj>(obj: T): T{
        return obj;
    }
}

class Employee extends User {
    constructor(name: string, age: number){
        super(name, age);
    }
}
const ivan = new User("Ivan", 18);

ivan.doSomething({
    name: 'Vladi',
    age: 20,
    data: [],
    getInfo(){},
    getData('Milen', 35);
});

const myObj: IMyObj2 = {
    name: 'Greti',
    age: 27,
    test: ['', ''],
    data: []
}
//ivan.doSomethingElse(myObj); = 
ivan.doSomethingElse<IMyObj>(myObj);

console.log(ivan.name);
