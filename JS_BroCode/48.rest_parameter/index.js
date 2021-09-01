// rest parameter = ...name
//                  condenses an indefinte number of arguments into a type of array
//                  similar to spread operator, but used within a function's parameters

function sum(...args) {
    let total = 0;
    console.log(args);
    for(let i in args){
        total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6));


function checkOut(...items) {
    let total = 0;

    for(let i in items){
        total += items[i];
    }
    return total;
}
console.log(`the total is: $${checkOut(10, 20, 30)}`);


function displayName(first, last, ...middle) {
    console.log(first, middle.join(' '), last);
}

displayName("Smitty", "Jensen", "Werben", "Jager", "Man");