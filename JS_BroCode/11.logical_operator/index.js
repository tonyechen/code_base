// logical operators: 
// and: &&
// or: ||
// not: !

// &&
var temperature = 0; //Celsius

if(temperature > 30) {
    console.log("It's Hot outside!");
}
else if(temperature > 0 && temperature <= 30) {
    console.log("It's WARM outside!");
}
else {
    console.log("It's COLD outside!");
}

// ||
var hour = 20; // military time

if(hour < 6 || hour >= 20) {
    console.log("It's DARK outside!");
}
else {
    console.log("It's LIGHT outside!");
}

// !
var myName = window.prompt("Enter your name");

if (!(myName == "")) {
    console.log("Hello", myName);
}
else {
    console.log("You did not eneter your name!");
}