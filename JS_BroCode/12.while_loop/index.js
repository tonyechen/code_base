// while loop = repeat some code while the loop's condition remains true

var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS");

// while(creditNum == "") {
//     creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS");
// }


//execute once before checking the condition
do {
    creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS");
} while(creditNum == "");

console.log("Thank you! Your computer no longer has a virus");