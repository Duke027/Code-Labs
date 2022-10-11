// classes

// Template for objects
//user class

class User{
 name: string = '';
 age: number = 0;
 occupation: string = '';
 // a method is a function defined in a class
 eat(){
    console.log("i am eating")
 }
 sayMyName(){
    console.log("Hiesenberg")
}
logMyDetails(){
    console.log("my name is " + this.name)
    console.log("my age is " + this.age)
    console.log("my occupation is " + this.occupation)
}

}


class Animal{
    legCount:number = 0;
    species:string = '';
    breed:string = '';
headlights(){
 console.log("i am standing in the middle of the road")
}
}

let animal = new Animal();
animal.breed = "Snake";
animal.species = 'copperhead'
animal.legCount = 0;
animal.headlights();
console.log(animal);
// creating a user instance/object
let user:User = new User();
user.name = "john";
user.age = 20;
user.occupation = 'doctor'

console.log(user)
//execute method "eat"
user.eat();
user.sayMyName();

let zach:User = new User();
zach.age = 16;
zach.name = "zach"
zach.occupation = "student";
zach.logMyDetails();