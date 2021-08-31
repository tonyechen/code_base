// nested functions =   Functions inside other functions
//                      Outer functions have access to inner functions.
//                      Inner functions are hidden from outside the scope
//                      used in closrues (future video topic)    

function login() {

    let userName = "Tony Chen";
    let userInbox = 0;

    function displayUserName() {
        console.log("Hello", userName);
    }

    function displayUserInbox() {
        console.log("You have", userInbox, "new messages");
    }

    displayUserName();
    displayUserInbox();
}

login();
