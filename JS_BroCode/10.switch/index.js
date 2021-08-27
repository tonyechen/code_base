// switch = statement taht evaluates a value/expression, matches the value to many case clauses more efficient than many "else if" statements

var grade = "Pizza";

switch(grade) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You... did not do taht well!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default:
    console.log(grade, "is not a letter grade");
}