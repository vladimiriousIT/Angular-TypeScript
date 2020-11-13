//class Inheritance
class Person{
    constructor(name){
        console.log( name + " Person constructor");
    }
    getID(){
        return 10;
    }
}
//Inherit Person
//If there is no constructor in the derived class
//Will be used the constructor from the parent class
class Employee extends Person{
    constructor(name){
        super(name); //Invoke the constructor of the parent class The parrent class constructor needs to be called before the 
        //sub class constructor
        console.log(name + " Employee construcor");
    }
    getID(){
        return super.getID();
    }
}

let e = new Employee("Chandler");
console.log(e.getID()); //Because parent class have method getId 
//Employee has access to this method
