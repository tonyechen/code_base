// Synchronous = code that runs in roder, top down
// asynchronous = code that runs in parallel with other code

setTimeout(sayHello, 3000);

function sayHello() {
    alert("HELLO!");
}

let begin = function() {
    console.log("BEGIN!");
}

let end = function() {
    console.log("END");
}

begin();
end();