// arrow function =>
// shortcut for a function expression
// similar to lambda in python

let hello;
let x = "Yo";
let y = "Tony Chen";
// function expression

hello = function(x, y) {
    console.log(x);
    console.log(y);
}
hello(x, y);

// arrow function
hello = (x, y) => {
    console.log(x);
    console.log(y);
};

hello(x, y);

// useful in map(), filter(), reduce() when you use a callbackfn

// map()

let storeUSD = [5, 10, 7, 24, 9];

let storeEUR = storeUSD.map(value => value *= 0.85);
for(let item in storeEUR){console.log(storeEUR[item]);}

// filter

let students = [16, 17, 18, 19, 20];
let adultStudents = students.filter(age => age >= 18);
for(let s in adultStudents){console.log(adultStudents[s]);}

// reduce()


