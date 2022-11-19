const c_fname = document.getElementById("cfname");
const c_phone = document.getElementById("cphone");
const c_email = document.getElementById("cemail");
const c_tarea = document.getElementById("ctarea");
const c_errorMessage = document.getElementById("error_message_contact");
const c_btnSubmit = document.getElementById("contactSubmit");
error_message.style.color = "red";
const c_regx = /^[6-9]\d{9}$/;
const c_emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const c_reg = /^[a-zA-Z]+ [a-zA-Z]+$/;


const c_validateFirstName = () => {
    if (c_fname.value === "") {
      c_errorMessage.innerText = "**Please enter your first name";
    } else if (!c_reg.test(c_fname.value)) {
      c_errorMessage.innerText = "**Name should be in alphabet only";
      c_fname.focus();
    }
  };
  
  const c_validatePhoneNumber = () => {
    if (!c_regx.test(c_phone.value)) {
      c_errorMessage.innerText = "Please enter a valid phone number";
    }
  };
  const c_validateEmail = () => {
    if (!c_emailRegx.test(c_email.value)) {
      c_errorMessage.innerText = "Please enter a valid email";
    }
  };
  
  const c_validatetarea = () => {
    if (c_tarea.value === "") {
     c_errorMessage.innerText = "**Please enter a something in textarea";
    }
    // else{
    //   errorMessage.innerText = "";
    // }
  };
  
  const c_onFocusValidateAll = () => {
    c_validatetarea();
    c_validateEmail();
    c_validatePhoneNumber();
    c_validateFirstName();
  };
  
  const c_onClickValidate = () => {
    c_validatetarea();
    c_validateEmail();
    c_validatePhoneNumber();
    c_validateFirstName();
    if (
        c_fname.value !== "" &&
     c_phone.value !== "" &&
      c_tarea.value !== "" &&
      c_email.value !== ""
    ) {
      alert("Contact form successfully submitted");
    }
  };
  
  
  c_phone.addEventListener("focus", c_onFocusValidateAll);
  c_email.addEventListener("focus", c_onFocusValidateAll);
  c_tarea.addEventListener("focus", c_onFocusValidateAll);

  
  c_btnSubmit.addEventListener("click", c_onClickValidate);

  var map_parameters = { center: { lat: 12.9716, lng: 77.5946 }, zoom: 16 };
    var map = new google.maps.Map(document.getElementById('location'), map_parameters);

    var position1 = { position: { lat: 12.9716, lng: 77.5946 }, map: map }
    var marker = new google.maps.Marker(position1);
  