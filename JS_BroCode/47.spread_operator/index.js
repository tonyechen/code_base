// ES6 feature

// spread operator = ...
//                   Expands "spreads" an array or iterable into many arguments needed for a function

let sum = (a, b, c) => a + b + c;

let numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(...numbers);

let nums = [];
for(let i = 1; i <= 10; i++) {nums.push(i);}

console.log(Math.max(...nums));

