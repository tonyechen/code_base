// try      = tests a block of code for errors
// catch    = handles the error
// throw    = creates custem errors. (throw exception)
// finally  = execute code after try and catch, regardless

try {
     
    let age = prompt("Enter your age: ");

    if(age == "") throw "You didn't enter in anything!";
    if(isNaN(age)) throw age + " isn't a number!";
    if(age < 18) throw "You need to be 18+ to sign up!";

    console.log("You are now signed up!");
}
catch(error) {

    console.log(error);

}
finally {
    console.log("Thanks for visiting!");
}
