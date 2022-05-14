//get all inputs
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("re-password");

//prevent defualt submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

//validate form
function validateForm() {
  //username
  if (username.value.trim() == "") {
    setError(username, "Name can not be empty");
  } else if (
    username.value.trim().length < 5 ||
    username.value.trim().length > 15
  ) {
    setError(username, "Name must be min 5 and max 15 charecters");
  } else {
    setSuccess(username);
  }

  //email
  if (email.value.trim() == "") {
    setError(email, "Provide email address");
  } else if (isEmailValid(email.value)) {
    setSuccess(email);
  } else {
    setError(email, "Provide a valid email address");
  }

  //address
  if (address.value.trim() == "") {
    setError(address, "Provide a valid address");
  } else {
    setSuccess(address);
  }

  //phone
  if (phone.value.trim() == "") {
    setError(phone, "Provide a phone number");
  } else if (validatePhoneNumber(phone.value)) {
    setSuccess(phone);
  } else {
    setError(phone, "Provide a valid phone number");
  }

  //email
  if (email.value.trim() == "") {
    setError(email, "Provide email address");
  } else if (isEmailValid(email.value)) {
    setSuccess(email);
  } else {
    setError(email, "Provide a valid email address");
  }

  //password
  if (password.value.trim() == "") {
    setError(password, "Password can not be empty");
  } else if (
    password.value.trim().length < 6 ||
    password.value.trim().length > 20
  ) {
    setError(password, "Password min 6 max 20 charecters");
  } else {
    setSuccess(password);
  }

  //confirm password
  if (repassword.value.trim() == "") {
    setError(repassword, "Password can not be empty");
  } else if (repassword.value !== password.value) {
    setError(repassword, "Password does not match");
  } else {
    setSuccess(repassword);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  const span = parent.querySelector("span");
  if (span.classList.contains("success")) {
    span.classList.remove("success");
  }
  span.classList.add("error");
  span.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  const span = parent.querySelector("span");
  if (span.classList.contains("error")) {
    span.classList.remove("error");
  }
  span.classList.add("success");
}

function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
}

function validatePhoneNumber(number) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(number);
}
