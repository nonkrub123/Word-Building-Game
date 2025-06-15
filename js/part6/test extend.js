class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails(){
      return `Make: ${make}, Model: ${model}.`;
  }
}

class Car extends Vehicle{
    startEngine(){
        return "Engine started.";
    }
}
