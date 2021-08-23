var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;

// == equal to *automatically convert the datatype
// === 
// <= less than or equal to
// >= greater than or equal to

var age = 23;
var joesAge = "23";

if (age === joesAge) {
    console.log("'m the same age as Joe!");
} else {
    console.log("One of these is not like the other..");
}

if (nikeSBShoes <= myAccountBalance) {
    myAccountBalance -= nikeSBShoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes - coupon <= myAccountBalance){
        console.log("We just bought some dope shoes with a coupon!");
        myAccountBalance -= nikeSBShoes - coupon;
        console.log("Account Balance: " + myAccountBalance);
} else {
    console.log("You too broke for shoes bruh!")
}