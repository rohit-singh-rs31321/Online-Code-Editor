const fname = document.getElementById("fname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const tarea = document.getElementById("tarea");
const errorMessage = document.getElementById("error_message");
const btnSubmit = document.getElementById("contactSubmit");

const regx = /^[6-9]\d{9}$/;
const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const reg = /^[a-zA-Z]+ [a-zA-Z]+$/;


const validateFirstName = () => {
    if (fname.value === "") {
      errorMessage.innerText = "**Please enter your first name";
    } else if (!reg.test(fname.value)) {
      errorMessage.innerText = "**Name should be in alphabet only";
      fname.focus();
    }
  };
  
  const validatePhoneNumber = () => {
    if (!regx.test(phone.value)) {
      errorMessage.innerText = "Please enter a valid phone number";
    }
  };
  const validateEmail = () => {
    if (!emailRegx.test(email.value)) {
      errorMessage.innerText = "Please enter a valid email";
    }
  };
  
  const validatetarea = () => {
    if (tarea.value === "") {
      errorMessage.innerText = "**Please enter a something in textarea";
    }
    // else{
    //   errorMessage.innerText = "";
    // }
  };
  
  const onFocusValidateAll = () => {
    validatetarea();
    validateEmail();
    validatePhoneNumber();
    validateFirstName();
  };
  
  const onClickValidate = () => {
    validatetarea();
    validateEmail();
    validatePhoneNumber();
    validateFirstName();
    if (
        fname.value !== "" &&
      phone.value !== "" &&
      tarea.value !== "" &&
      email.value !== ""
    ) {
      alert("Contact form successfully submitted");
    }
  };
  
  
  phone.addEventListener("focus", onFocusValidateAll);
  email.addEventListener("focus", onFocusValidateAll);
  tarea.addEventListener("focus", onFocusValidateAll);

  
  btnSubmit.addEventListener("click", onClickValidate);
  