// class = A "blueprint" for creating objects
//          Define properties and/or methods

class Car {
    // constructor =    A special method for assigning propertiES. Automatically called when creating an object.
    constructor(make, model, year, color){
        // this = a reference to the object we are working with
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // dont need function key word
    drive() {
        console.log("You drive the", this.model);
    }
    brake() {
        console.log("You step on the", this.model, "'s brakes!");
    }
    whatIsThis(){
        return this;
    }
}

let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

console.log(car1.whatIsThis());
console.log(car2.whatIsThis());

car1.drive();
car2.drive();