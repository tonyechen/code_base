// array = a special variable that can hold more than one value

// Each "space" is known as an element
// You can access elements in an array by reffering to the index number ex. [0]

var cars = ["Mustang", "Corvette", "Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Tesla"); // add an element
cars.pop();         // removes last element

var numberOfCars = cars.length;

// cars = cars.sort(); // sorts an array alphabetically/numerically
// cars = cars.reverse(); // revers-sorts an array

var lastCar = cars[cars.length-1];

console.log(cars);
console.log(numberOfCars);
console.log(lastCar);




