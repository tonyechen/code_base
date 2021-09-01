// template literals = another way of formatting output, can contain placeholders for formatting and inserting: strings/values/variables/etc.

//  ` backticks
//  ${} placeholder

//  can use multiple liens
//  embed expressions

let firstName = "Tony";
let lastName = "Chen";
let price = 10;
let taxRate = 0.05;
let total;

//console.log("Hello " + firstName + " " + lastName + "!");
console.log(`Helllo ${firstName} 
${lastName}!`); // can be on multiple line

console.log(`The price is: $${price}
tax rate: ${taxRate}
tax is: ${price * taxRate}
Total is: $${total = price + (price * taxRate)}`);