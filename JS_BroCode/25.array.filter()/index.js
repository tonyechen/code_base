// filter() = Returns the elements of an array that meets a condition specified in a function
//            You can either return elements or return a boolean value

let students = [16, 17, 18, 19, 20];

function checkAge(age, index, array) {
    return age >= 18;
}

let adultStudents = students.filter(checkAge); // filter method automayically pass in value, index, arrary

console.log(adultStudents);

console.log(adultStudents);
