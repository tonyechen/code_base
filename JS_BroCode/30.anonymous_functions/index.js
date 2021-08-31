// anonymous function = Function w/p a name
//                      Often not accessible after its initial creation.

// benefits =   Doesn't clutter global namespace
//              Useable once
//              Can be passed as arguments

//******************************* */
// IIFE =   a JS function that runs as soon as it is defiend
// grouping operator = ()

(function() {
    document.getElementById("myH1").innerHTML = "hey! Hello there!";
})();

// setTimeout(function, milliseconds);

setTimeout((function() {document.getElementById("myH1").innerHTML = "sup?";}), 10000);