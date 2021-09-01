// static = a method or property that belongs to a class and not any one object

class Car {

    static numberOfCars = 0;
    static beginRace() {
        console.log("The race has begun!");
    }

    constructor(model) {
        this.model = model;
        Car.numberOfCars++;
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Challenger");

console.log(Car.numberOfCars);
Car.beginRace();

