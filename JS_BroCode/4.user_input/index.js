// easy way, not practical
// var myName = window.prompt("What is your name?");

// document refers to the document object model of the html document
document.getElementById("myButton").onclick = function() {
    var myName = document.getElementById("myText").value;
    console.log("Hello " + myName);
}
