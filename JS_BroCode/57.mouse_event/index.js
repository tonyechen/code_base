// Mouse events
// element.addEventListener(type, fuction);

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

// div.addEventListener("click", e => {
//     console.log("You click the mouse");
//     div.style.backgroundColor = "yellow";
// });

// div.addEventListener("mousedown", e => {
//     console.log("You are holding the mouse down!");
//     div.style.backgroundColor = "red";
// });

// div.addEventListener("mouseup", e => {
//     console.log("You let go of the mouse!");
//     div.style.backgroundColor = "grey";
// });

// div.addEventListener("dblclick", e => {
//     console.log("You double clicked");
//     div.style.backgroundColor = "purple";
// });

// div.addEventListener("contextmenu", e => {
//     console.log("You opened the context menu!");
//     div.style.backgroundColor = "green";
// });

// div.addEventListener("mouseover", e => {
//     console.log("You entered the area!");
//     div.style.backgroundColor = "blue";
// });

// div.addEventListener("mouseleave", e => {
//     console.log("You left area!");
//     div.style.backgroundColor = "grey";
// });

div.addEventListener("mousemove", e => {
    console.log("You are within the squre!");
    div.style.backgroundColor = "blue";
})