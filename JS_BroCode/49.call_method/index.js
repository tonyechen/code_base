// call() = predefined method that can call a method belonging to another object.

// whichever object you want to use that method with, pass that object as an argument within call()
// this = object passed in         

let employee = {
    name: "Spongebob",
    cook: function() {
        console.log(this.name, "is cooking");
    }
}

let supervisor = {
    name: "Squidward",
    cashier: function() {
        console.log(this.name, "is at the cash register");
    }
}

let boss = {
    name: "Mr.Krabs",
    beInCharge: function() {
        console.log(this.name, "is in charge");
    }
}

// employee.cook();
// supervisor.cashier();
// boss.beInCharge();

employee.cook.call(supervisor);
supervisor.cashier.call(boss);
boss.beInCharge.call(employee);