const humbergur = document.querySelector(".humbergur");
const mobile_menu = document.querySelector(".header .navbar .nav-list ul");
const links = document.querySelector(".header .navbar .nav-list ul li");

if (humbergur) {
    humbergur.addEventListener("click", () => {
        humbergur.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });
}
var selector, elems, makeActive;

selector = '.header .navbar .nav-list ul li';

elems = document.querySelectorAll(selector);


// makeActive = function () {
//     for (var i = 0; i < elems.length; i++)
//         elems[i].classList.remove('active');

//     this.classList.add('active');
//     mobile_menu.classList.remove("active");

// };

// for (var i = 0; i < elems.length; i++)
//     elems[i].addEventListener('click', makeActive);
// linkActive = function () {
//     elems.forEach(l => l.classList.remove("active"));
//     this.classList.add("active");
// }

// elems.forEach(l => l.addEventListener("click", linkActive));


elems.forEach(l => l.addEventListener("click", function () {
    elems.forEach(elem => elem.classList.remove("active"));
    this.classList.add("active");
    mobile_menu.classList.remove("active");
}));



/**
 * 
 * Validation 
 */

const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");
const forgotPasswordForm = document.querySelector("#forgot-password");
const resetPasswordForm = document.querySelector("#reset-password");


if (registerForm) {

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        registerValidate();

    });
}
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        loginValidate();
    });
}

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault();
        forgotPasswordFormValidate();
    });
}

if (resetPasswordForm) {


    resetPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault();
        resetPasswordValidate();
    });
}
const SetErrorMsg = (input, msg) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector(".small");
    input.className = "has-errors";
    small.innerText = msg;
}
const SetSuccessMsg = (input) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector(".small");
    input.className = "no-errors";
    small.innerText = "";
}
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1)
        return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2)
        return false;
    if (dot === emailVal.length - 1)
        return false
    return true;
}
const registerValidate = () => {
    const fname = document.querySelector("#fname");
    const lname = document.querySelector("#lname");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const cpassword = document.querySelector("#cpassword");

    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    if (fnameVal === "" || fnameVal === null) {
        SetErrorMsg(fname, "Please Enter First Name");
    } else {
        SetSuccessMsg(fname);
    }

    if (lnameVal === "" || lnameVal === null) {
        SetErrorMsg(lname, "Please Enter Last Name");
    } else {
        SetSuccessMsg(lname);
    }

    if (usernameVal === "" || usernameVal === null) {
        SetErrorMsg(username, "Please Enter Username");
    } else if (usernameVal.length < 2) {
        SetErrorMsg(username, "Username name Should be min 3 character long ");
    } else {
        SetSuccessMsg(username);
    }

    if (emailVal === "" || emailVal === null) {
        SetErrorMsg(email, "Please Enter Email");
    } else if (!isEmail(emailVal)) {
        SetErrorMsg(email, "Please Enter valid email.");
    } else {
        SetSuccessMsg(email);
    }

    if (passwordVal === "" || passwordVal === null) {
        SetErrorMsg(password, "Please Enter Password");
    } else if (passwordVal.length < 2) {
        SetErrorMsg(password, "password must be minimum 3 character long ");
    } else {
        SetSuccessMsg(password);
    }

    if (cpasswordVal === "" || cpasswordVal === null) {
        SetErrorMsg(cpassword, "Please Enter Confirm Password");
    } else if (cpasswordVal.length !== passwordVal.length) {
        SetErrorMsg(cpassword, "Confirm Password doesn't  match ");
    } else {
        SetSuccessMsg(cpassword);
    }

}

const loginValidate = () => {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    if (passwordVal === "" || passwordVal === null) {
        SetErrorMsg(password, "Please Enter Password");
    } else if (passwordVal.length < 2) {
        SetErrorMsg(password, "password must be minimum 3 character long ");
    } else {
        SetSuccessMsg(password);
    }


    if (usernameVal === "" || usernameVal === null) {
        SetErrorMsg(username, "Please Enter Username");
    } else if (usernameVal.length < 2) {
        SetErrorMsg(username, "Username name Should be min 3 character long ");
    } else {
        SetSuccessMsg(username);
    }

    if (usernameVal === "suraj" && passwordVal === "suraj") {
        window.location.href = "index.html";
    } else if (usernameVal !== "" || usernameVal !== null && usernameVal !== "suraj") {
        SetErrorMsg(username, "Username is Wrong");
    } else if (passwordVal !== "suraj") {
        SetErrorMsg(password, "Password is Wrong");
    } else {
        SetSuccessMsg(username);
        SetSuccessMsg(password);
    }


}
const forgotPasswordFormValidate = () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const emailVal = email.value.trim();

    if (emailVal === "" || emailVal === null) {
        SetErrorMsg(email, "Please Enter Email");
    } else if (!isEmail(emailVal)) {
        SetErrorMsg(email, "Please Enter valid email.");
    } else {
        SetSuccessMsg(email);
    }

}


const resetPasswordValidate = () => {
    const cpassword = document.querySelector("#cpassword");
    const password = document.querySelector("#password");

    const cpasswordVal = cpassword.value.trim();
    const passwordVal = password.value.trim();

    if (passwordVal === "" || passwordVal === null) {
        SetErrorMsg(password, "Please Enter Password");
    } else if (passwordVal.length < 2) {
        SetErrorMsg(password, "password must be minimum 3 character long ");
    } else {
        SetSuccessMsg(password);
    }

    if (cpasswordVal === "" || cpasswordVal === null) {
        SetErrorMsg(cpassword, "Please Enter Confirm Password");
    } else if (cpasswordVal.length !== passwordVal.length) {
        SetErrorMsg(cpassword, "Confirm Password doesn't  match ");
    } else {
        SetSuccessMsg(cpassword);
    }


}