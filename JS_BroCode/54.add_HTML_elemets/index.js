// create HTML elements
// h1.innerHTML (vulnerable to XSS attacks)
// h1.innterText (better)

const h1 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello World!";
h1.append(underline);
document.body.append(h1);

const h2 = document.createElement("h2");
const italic = document.createElement("i");
italic.innerText = "Sup?";
h2.append(italic);
document.body.append(h2);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "Bye...";
p.append(bold);
document.body.append(p);

