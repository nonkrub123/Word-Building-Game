function Person(name, age){
    this.name = name;
    this.age = age;

}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Subaru");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}.`;
    }
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe()); // This is a cup of lemon tea.

function Animal(species){
    this.species = species;

}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound.`;
}

let cat = new Animal("cat");
// console.log(cat.sound()); // Dog makes a sound.

function Drink(name){
    if(!new.target){
        throw new Error("Drink constructor must be called with new keyword.");
    }
    this.name = name;
}

let tea = new Drink("tea");
// let coffee = Drink("coffee"); // This will throw an error

function CreateCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}

const circle = new CreateCircle(5);

function manualNew(constructor, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    constructor.apply(obj, args);
    return obj;
  }

const circle2 = manualNew(CreateCircle, 10);
console.log(circle2); // CreateCircle { radius: 10, draw: [Function] }