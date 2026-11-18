
// Get HTML Elements
const loginPanel = document.getElementById("login-panel");
const signupPanel = document.getElementById("signup-panel");

const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const password = document.getElementById("signup-password");
const confirmPassword = document.getElementById("confirm-password");

const message = document.getElementById("message");


// Switch to Sign Up
showSignup.addEventListener("click", function(event) {

    event.preventDefault();

    loginPanel.hidden = true;
    signupPanel.hidden = false;

    message.textContent = "";

});


// Switch to Login
showLogin.addEventListener("click", function(event) {

    event.preventDefault();

    signupPanel.hidden = true;
    loginPanel.hidden = false;

    message.textContent = "";

});


// Check Password Match
function checkPassword() {

    if (confirmPassword.value === "") {
        confirmPassword.setCustomValidity("");
    }

    else if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    }

    else {
        confirmPassword.setCustomValidity("");
    }

}

password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);


// Login Form
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    message.textContent =
        "Login form validated successfully. Demo only.";

});


// Sign Up Form
signupForm.addEventListener("submit", function(event) {

    checkPassword();

    event.preventDefault();

    message.textContent =
        "Registration form validated successfully. Demo only.";

});
