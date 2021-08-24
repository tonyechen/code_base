/*
    A function is a block of code designed to perform a particular task/procedure. (subroutine)

    We invoke "call" whenever we want it to do somthing 
    We need to define what we want task to do

*/

function sayHello(name, age) {
    console.log("Hello", name);
    console.log("You are", age, "years old");
}

var myName = "Tony Chen";

sayHello(myName, 21);

function toCelsius(f) {
    var result = (f-32) * (5/9);
    return result;
}

function toFarenheit(c) {
    return c * (9/5) + 32
}

var myTemp = toCelsius(100);
console.log("My temp in C is " + myTemp + " degrees");

myTemp = toFarenheit(myTemp);
console.log("My temp in F is " + myTemp + " degrees");