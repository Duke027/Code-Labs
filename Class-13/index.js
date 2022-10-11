// classes
// Template for objects
//user class
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
        this.occupation = '';
    }
    // a method is a function defined in a class
    User.prototype.eat = function () {
        console.log("i am eating");
    };
    User.prototype.sayMyName = function () {
        console.log("Hiesenberg");
    };
    User.prototype.logMyDetails = function () {
        console.log("my name is " + this.name);
        console.log("my age is " + this.age);
        console.log("my occupation is " + this.occupation);
    };
    return User;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.legCount = 0;
        this.species = '';
        this.breed = '';
    }
    Animal.prototype.headlights = function () {
        console.log("i am standing in the middle of the road");
    };
    return Animal;
}());
var animal = new Animal();
animal.breed = "Snake";
animal.species = 'copperhead';
animal.legCount = 0;
animal.headlights();
console.log(animal);
// creating a user instance/object
var user = new User();
user.name = "john";
user.age = 20;
user.occupation = 'doctor';
console.log(user);
//execute method "eat"
user.eat();
user.sayMyName();
var zach = new User();
zach.age = 16;
zach.name = "zach";
zach.occupation = "student";
zach.logMyDetails();
