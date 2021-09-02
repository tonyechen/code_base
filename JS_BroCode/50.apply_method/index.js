// apply() = Borrow an object's functions
//          similar to call(), but pass an array in place of extra individual arguments

let classRoom = {
    takeAttendence: function(students) {
        console.log(this.name, "is taking attendance");
        for(let i in students) {
            console.log(students[i]);
        }
    }
}
let teacher = {
    name: "Mrs.Puff"
}

let students = ["Spongebob", "Patrick", "Sandy", "me"];
students.push("Someone");
classRoom.takeAttendence.apply(teacher, [students]);