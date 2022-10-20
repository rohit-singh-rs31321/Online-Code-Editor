
function validatelogin() {
    var email = document.getElementById("emailid");
    var pass = document.getElementById("passfinal");
    const emailRegx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
    var error_message = document.getElementById("error_message_login");
    
  
    error_message.style.marginTop = "15px";
    error_message.style.color = "#FF5349";
    error_message.style.fontSize = ".76rem";
    // error_message.style.padding = "2px";
    // error_message.style.border  = "1px solid red";
    submit.style.marginTop = "5px";
  
    if (!emailRegx.test(emailid.value)) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    else {
        error_message.innerHTML = "";
    }
    if (!passwordRegx.test(passfinal.value)) {
        errorMessage.innerText = "Please enter a valid password";
        return false;
      }
  
    alert("login Successfully!");
    return true;
  }

  passfinal.addEventListener("focus", validatelogin);