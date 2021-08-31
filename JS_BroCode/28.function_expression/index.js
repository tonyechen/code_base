// function expression =    A function can also be defined using an expression
//                          Function expression can be stored in a variable
//                          The variable can be used as a function.
//                          They can be invoked by adding ()
//
//                          1. Useful as closures
//                          2. Used in IIFE (Immediately Invoked Functions Expressions)
//                          3. Can be passed as arguments to other functions

// *********************
// function declaration
// *********************

sayHello();

function sayHello() {
    console.log("Hello");
}

// *********************
// function expression
// *********************


let greeting = function() {document.getElementById("myH1").innerHTML = "Hello"};

output(greeting);

function output(funct) {
    funct();
}

