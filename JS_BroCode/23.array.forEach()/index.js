// forEach = Performs a function for each element in an array

let total = 0;
let cart = [5, 6, 7, 8, 9];

function checkOut(e) {

    total += e;
}

cart.forEach(checkOut); // callbackfn = do not need to provide element or index of an array, it is provided for us

console.log("Your total is: $" + total);
console.log(cart);