// for in loop =    loops through the elements in an array or the properties of an Object, less syntax to write, but less flexible

let letter = ["H", "E", "L", "P"]
let Car = {
    make: "Chevy",
    model: "Corvette",
    year: 2022,
    color: "blue"
}

for(let i = 0; i < letter.length; i++) {
    console.log(letter[i]);
}

for(let i in letter) {
    console.log(letter[i]);
}

for(let property in Car) {
    console.log(Car[property]);
}