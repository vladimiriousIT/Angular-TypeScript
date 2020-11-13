let firstName = "Vladimir";
let lastName = "Stratievs";

let person1 = {
    firstName,
    lastName
};

function createPerson(firstName, lastName, age){
    let fullName = firstName + " " + lastName;
    return{ firstName, 
            lastName,
            fullName,
            isSenior:function(){
                return age > 60;
            }
        }
}

let p1 = createPerson("Ross", "Geller", 70);
console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.fullName);
console.log(p1.isSenior());
//console.log(person.firstName);
//console.log(person.lastName);