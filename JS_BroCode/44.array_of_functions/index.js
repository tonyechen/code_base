// array of functions

function jump() {
    console.log("You jumped");
}

function punch() {
    console.log("You punched");
}

function kick() {
    console.log("You kicked");
}

function block() {
    console.log("You blocked");
}

let actions = [];

actions = [jump, punch, kick, block];

/* for(let i = 0; i < actions.length; i++) {

    actions[i]();
} */

actions.forEach(func => func());

