// reduce () = Reduces an array to a single value
//              The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the call back function

let letters = ["H", "E", "L", "P"];

function combineLetters(accumulator, value, index, array) {
    console.log(index);
    console.log(array);
    return accumulator + value;

}

let word = letters.reduce(combineLetters);
word = letters.reduceRight(combineLetters); // reverse
console.log(word);