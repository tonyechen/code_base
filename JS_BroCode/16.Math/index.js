// Math =   An object that provides basic mathematics functionality and constants.

var myNum;

// myNum = Math.round(3.5);
// myNum = Math.floor(3.9);
// myNum = Math.ceil(3.1);
// myNum = Math.pow(3, 3);
// myNum = Math.sqrt(64);
// myNum = Math.abs(-1);
// myNum = Math.min(1, 5, 2, 4, 3);
// myNum = Math.max(1, 5, 2, 4, 3);
// myNum = Math.PI;
// myNum = Math.E;
// myNum = Math.log(Math.E);

// console.log(myNum);

// solve for hypotenuse of a right triangle

var a = window.prompt("Enter side a");
var b = window.prompt("Enter side b");
var c;

c = Math.sqrt(((Math.pow(a, 2) + Math.pow(b, 2))));

console.log(c);