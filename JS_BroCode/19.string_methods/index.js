// useful string properties & methods

var myName = "Tony Edward Chen";
var myStreet = "123 Fake St";
var myCity = "Nowhere XY 12039";
var myPhone = "123-345-789";

console.log(myName.length);
console.log(myName.charAt(5));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("n"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// var firstName = myName.slice(0, 3);
var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

var lastName = myName.slice(myName.lastIndexOf(" ") + 1); 
console.log(lastName); 

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-", "");
console.log(myPhone);
