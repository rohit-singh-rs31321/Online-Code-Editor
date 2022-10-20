function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])$/;
  return re.test(str);
}

function validate() {
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("cpass").value;
  var error_message = document.getElementById("error_message");
  var submit = document.getElementById("submit");

  error_message.style.marginTop = "15px";
  error_message.style.color = "#FF5349";
  error_message.style.fontSize = ".76rem";

  submit.style.marginTop = "5px";

  var text;
  if (fName == "") {
    document.getElementById("error_message").innerHTML =
      "**Fill the first name please!";
    return false;
  } else if (fName.length < 3 || fName.length > 9) {
    text = "Please Enter valid First Name";
    error_message.innerHTML = text;
    return false;
  }
  if (lName == "") {
    document.getElementById("error_message").innerHTML =
      "**Fill the last name please!";
    return false;
  } else if (lName.length < 3 || lName.length > 9) {
    text = "Please Enter valid  Last Name";
    error_message.innerHTML = text;
    return false;
  } else true;
  var regx = /^[6-9]\d{9}$/;

  if (phone == "") {
    document.getElementById("error_message").innerHTML =
      "**Fill the Phone number please!";
    return false;
  } 
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  } else if (!regx.test(phone)) {
    text = "**Phone no. should start with (6,7,8,9)!";
    error_message.innerHTML = text;
    return false;
  }

  if (email == "") {
    document.getElementById("error_message").innerHTML =
      "**Fill the email please!";
    return false;
  }
  var re = /\S+@\S+\.\[a-zA-Z]{3}$/;
  if (!re.test(email)) {
    document.getElementById("error_message").innerHTML =
      "**Enter a correct email please!";
    return false;
  }

  // if (email.indexOf("@") == -1 || email.length < 6) {
  //   text = "Please Enter valid Email";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  // const isWhitespace = /^(?=.*\s)/;
  // if (isWhitespace.test(pass)) {
  //   text = "Password must not contain Whitespaces.";
  //   error_message.innerHTML = text;
  // }

  // const isContainsUppercase = /^(?=.*[A-Z])/;
  // if (!isContainsUppercase.test(pass)) {
  //   return "Password must have at least one Uppercase Character.";
  // }

  // const isContainsLowercase = /^(?=.*[a-z])/;
  // if (!isContainsLowercase.test(pass)) {
  //   return "Password must have at least one Lowercase Character.";
  // }

  // const isContainsNumber = /^(?=.*[0-9])/;
  // if (!isContainsNumber.test(pass)) {
  //   return "Password must contain at least one Digit.";
  // }

  // const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
  // if (!isContainsSymbol.test(pass)) {
  //   return "Password must contain at least one Special Symbol.";
  // }

  // const isValidLength = /^.{10,16}$/;
  // if (!isValidLength.test(pass)) {
  //   return "Password must be 10-16 Characters Long.";
  // }
 if (pass == ""){
  document.getElementById("error_message").innerHTML =
      "**Fill the Password  please";
    return false;
 }
 if (cpass == ""){
  document.getElementById("error_message").innerHTML =
      "**Fill the  Confirm Password  please";
    return false;
 }

  if (pass.length < 8 && pass.length > 15) {
    document.getElementById("error_message").innerHTML =
      "**Password length must be between 8-15 characters long";
    return false;
  }

  //maximum length of password validation
  // if (pass.length > 15) {
  //   document.getElementById("error_message").innerHTML =
  //     "**Password length must not exceed 15 characters";
  //   return false;
  // }

  if(!checkPassword(pass)){
    document.getElementById("error_message").innerHTML =
      "**Password length must be between 8-15 characters long, must contain a symbol, a lowercase, a uppercase";
  }
  else if (cpass != pass) {
    text = "Password mismatch";
    error_message.innerHTML = text;
    return false;
  }
  if(checkPassword(pass))
  {
    alert("Form Submitted Successfully!");
    return true;
  }
  }
  

function validatelogin() {
  var email = document.getElementById("emailid").value;
  var pass = document.getElementById("passfinal").value;

  var error_message = document.getElementById("error_message_log");
  var submit = document.getElementById("submit");

  error_message.style.marginTop = "15px";
  error_message.style.color = "#FF5349";
  error_message.style.fontSize = ".76rem";
  // error_message.style.padding = "2px";
  // error_message.style.border  = "1px solid red";
  submit.style.marginTop = "5px";

  if (email == "") {
    document.getElementById("error_message_log").innerHTML =
      "**Fill the email please!";
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (pass == "") {
    document.getElementById("error_message_log").innerHTML =
      "**Fill the password please!";
    return false;
  }

  if (pass.length < 8) {
    document.getElementById("error_message_log").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }

  //maximum length of password validation
  if (pass.length > 15) {
    document.getElementById("error_message_log").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  }

  alert("login Successfully!");
  return true;
}
