let numbers = [3, 14, 1, 2, 5];

// numbers.sort(); // ASCII character order

// numbers.sort(function(x, y){
//     return x - y;  
// })

// numbers.sort((x, y) => y - x);

numbers.sort((x, y) => -1);

console.log(numbers);