// method overriding = a child class will use methods with the same name that are most closely associated with it

class Vehicle {
    drive() {
        console.log("You drive the vehicle");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("You drive the car");
    }
}

class RaceCar extends Car {
    drive() {
        console.log("You drive the race car");
    }
}

let car = new Car();
car.drive();

let raceCar = new RaceCar();
raceCar.drive();