// why use getters and setters?

// a way to get/set the properties of an object
// Secures better data quality
// does extrathings behind-the-scenes

class User {
    
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    set first(value) {
        this.firstName = value.toUpperCase();
    }

    set last(value) {
        this.lastName = value.toUpperCase();
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let user1 = new User("Tony", "Chen");
let user2 = new User("Audrey", "Chen");

console.log(user1.fullName);
console.log(user2.fullName);

console.log(user1.firstName);