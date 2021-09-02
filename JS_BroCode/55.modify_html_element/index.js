// modify HTML elements
// document.getElementById() (older)
// document.querySelector() (nwer, more powerful)

document.querySelector("#myButton").onclick = function() {

    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerText = "Bye World!";
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    console.log(p);
    p[0].innerText = "WHOAAAA";
    p.forEach(element => element.innerText = "WHOA!");

    const button = document.querySelector("button");
    button.remove();
}