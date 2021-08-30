// method chaining = calling one method after another, in one continuous line of code

// example: capitalization

let user = "tonychen";
// let firstLetter = user.charAt(0);
// firstLetter = firstLetter.toUpperCase();
// user = firstLetter + user.slice(1);

user = user.charAt(0).toUpperCase() + user.slice(1);

console.log(user);