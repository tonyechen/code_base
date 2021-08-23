var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;

// == equal to *automatically convert the datatype
// === compare data, including the datatype
// <= less than or equal to
// >= greater than or equal to
// != not equal to

// var age = 23;
// var joesAge = "23";

// if (age === joesAge) {
//     console.log("'m the same age as Joe!");
// } else {
//     console.log("One of these is not like the other..");
// }

// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes;
//     console.log("We just bought some dope shoes!");
//     console.log("Account Balance: " + myAccountBalance);
// } else if (nikeSBShoes - coupon <= myAccountBalance){
//         console.log("We just bought some dope shoes with a coupon!");
//         myAccountBalance -= nikeSBShoes - coupon;
//         console.log("Account Balance: " + myAccountBalance);
// } else {
//     console.log("You too broke for shoes bruh!")
// }

if (1 === 1 && 2 === 1 || "joe" === "joe") {
    console.log("These are both true!");
}

if (true && true) {
    console.log("Thesea are the same!");
}

if (1 === 3 || "joe" === "joe") {

}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3disabledHandicap = true;

if (cat1 > cat2 && cat1 > cat3 && !cat3disabledHandicap) {
    console.log("Cat 1 is the cutest!");
} else if (cat2 > cat1 && cat2 > cat3 && !cat3disabledHandicap) {
    console.log("Cat 2 is the cutest!");
} else if (cat3 > cat1 && cat3 > cat2 || cat3disabledHandicap) {
    console.log("Cat 3 is the cutest");
}