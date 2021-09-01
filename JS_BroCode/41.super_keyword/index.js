// super = Reference to the parent class (super class)
//         very similar to "this" keyword
//         Can use a super classes: constructor, methods

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log("Hello", this.name);
        console.log("You are", this.age, "yeards old");
    }
}

class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }

    hello() {
        super.welcome(); // doesn't have to be the smae name as the super method
        console.log("Tour GPA is", this.gpa);
    }
}

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age);
        this.classSize = classSize;
    }

    hello() {
        super.welcome();
        console.log("Your class size is", this.classSize);
    }
}

let student = new Student("Anthong Chen", 18, 4.0)
let teacher = new Teacher("Donald Mace", 43, 20);

console.log(student.name);
console.log(student.age);
console.log(student.gpa);

console.log(teacher.name);
console.log(teacher.age);
console.log(teacher.classSize);

student.hello();
teacher.hello();