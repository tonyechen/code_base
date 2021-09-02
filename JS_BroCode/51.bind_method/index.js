// bind() = Borrows a function, & creates a copy.
//          "this" keyword replaced with the object passed in as an argument

let dog = {
    name: "dog",
    bark: function() {
        console.log(this.name, "is barking")
    }
}

let parrot = {
    name: "parrot",
    bark: function() {
        console.log(this.name, "is chirping")
    }
}

let speak = dog.bark.bind(parrot);
speak();