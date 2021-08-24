// object = a container for properties/methods

// property = value/variables that describe waht an object has
// methods = function functions that describe what an object can do

var human1 = {
    name: "Tony",
    age: 18,

    eat : function() {
        console.log("Tony is eating food");
    },

    drink : function() {
        console.log("tony is drinking alcohol *burp*");
    },

    sleep : function() {
        console.log("Tony has passed out");
    }
};

var human2 = {
    name: "Audrey",
    age: 21,

    eat : function() {
        console.log("Audrey is always eating food");
    },

    drink : function() {
        console.log("Audrey is drinking water");
    },

    sleep : function() {
        console.log("Audrey is asleep");
    }
};

human1.name // dot notation
human1['name'] // bracket notation

console.log(human1.name);
console.log(human1['age']);
human1.eat();
human1.drink();
human1.sleep();

human2.name // dot notation
human2['name'] // bracket notation

console.log(human2.name);
console.log(human2['age']);
human2.eat();
human2.drink();
human2.sleep();