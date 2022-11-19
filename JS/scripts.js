const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const btnSubmit = document.getElementById("submit");
const errorMessage = document.getElementById("error_message");
const showPassword = document.getElementById("show-password");

const regx = /^[6-9]\d{9}$/;
const emailRegx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const reg = /^[A-Za-z]+$/;

const validateFirstName = () => {
  if (fname.value === "") {
    errorMessage.innerText = "Please enter your first name";
  } else if (!reg.test(fname.value)) {
    errorMessage.innerText = "First Name should be in alphabet only";
    fname.focus();
  }
};

const validateLastName = () => {
  if (lname.value === "") {
    errorMessage.innerText = "Please enter your last name";
  } else if (!reg.test(lname.value)) {
    errorMessage.innerText = "Last Name should be in alphabet only";
    lname.focus();
  }
};

const validatePhoneNumber = () => {
  if (!regx.test(phone.value)) {
    errorMessage.innerText = "Please enter a valid number";
  }
};
const validateEmail = () => {
  if (!emailRegx.test(email.value)) {
    errorMessage.innerText = "Please enter a valid email";
  }
};

const validatePassword = () => {
  if (!passwordRegx.test(pass.value)) {
    errorMessage.innerText = "Please enter a valid password";
  }
  // else{
  //   errorMessage.innerText = "";
  // }
};

const onFocusValidateConfirmPassword = () => {
  errorMessage.innerText = "";
};

const validateConfirmPassword = () => {
  if (cpass.value === "" || cpass.value !== pass.value) {
    errorMessage.innerText = "Password mismatch";
  }

  if (
    cpass.value !== "" &&
    cpass.value === pass.value &&
    fname.value !== "" &&
    lname.value !== "" &&
    email.value !== "" &&
    phone.value !== ""
  ) {
    alert("form successfully submitted");
  }
};

const toggleShowPassword = () => {
  console.log("toggle");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }

  if (cpass.type === "password") {
    cpass.type = "text";
  } else {
    cpass.type = "password";
  }
};

const onFocusValidateAll = () => {
  onFocusValidateConfirmPassword();
  validatePassword();
  validateEmail();
  validatePhoneNumber();
  validateLastName();
  validateFirstName();
};

const onClickValidate = () => {
  validateConfirmPassword();
  validatePassword();
  validateEmail();
  validatePhoneNumber();
  validateLastName();
  validateFirstName();
};

lname.addEventListener("focus", onFocusValidateAll);
phone.addEventListener("focus", onFocusValidateAll);
email.addEventListener("focus", onFocusValidateAll);
pass.addEventListener("focus", onFocusValidateAll);
cpass.addEventListener("focus", onFocusValidateAll);

const handleSubmit = () => {};

// phone.addEventListener("onkeypress", allowNumbers(e));

showPassword.addEventListener("click", toggleShowPassword);

btnSubmit.addEventListener("click", onClickValidate);


document.getElementById("signup").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".popup_signup").style.display = "block";
  document.querySelector(".popup_login").style.display = "none";
})
document.getElementById("signups").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".popup_signup").style.display = "block";
  document.querySelector(".popup_login").style.display = "none";
})


document.getElementById("login").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".popup_signup").style.display = "none";
  document.querySelector(".popup_login").style.display = "block";
})

var button = document.getElementById('menu'); // Assumes element with id='button'

button.onclick = function () {
  var div = document.getElementById('toggle_bar');
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
};

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".popup_signup").style.display = "none";
  document.querySelector(".popup_login").style.display = "none";
})
document.querySelector(".close_signup").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".popup_signup").style.display = "none";
  document.querySelector(".popup_login").style.display = "none";
})
