//nav menu
const body = document.querySelector("body");
const overly = document.querySelector(".overlay");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
let isOpen = false;

//add event to menuIcon
menuIcon.addEventListener("click", () => {
  if (!isOpen) {
    menuIcon.classList.add("open");
    mobileMenu.style.display = "block";
    overly.style.display = "block";
    body.classList.add("noscroll");
    isOpen = true;
  } else {
    menuIcon.classList.remove("open");
    mobileMenu.style.display = "none";
    overly.style.display = "none";
    body.classList.remove("noscroll");
    isOpen = false;
  }
});

//get all inputs
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const genderRadios = document.getElementsByName("gender");
const password = document.getElementById("password");
const repassword = document.getElementById("re-password");

//prevent defualt submission
form.addEventListener("submit", (event) => {
  validateForm();
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const spans = form.querySelectorAll("span");
  let result = true;
  spans.forEach((span) => {
    if (span.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

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

  //gender
  if (genderRadios[0].checked || genderRadios[1].checked) {
    setSuccess(genderRadios[0] || genderRadios[1]);
  } else {
    setError(genderRadios[0] || genderRadios[1], "Please select a gender");
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

// set error message
function setError(element, errorMessage) {
  const parent = element.parentElement;
  const span = parent.querySelector("span");
  if (span.classList.contains("success")) {
    span.classList.remove("success");
  }
  span.classList.add("error");
  span.textContent = errorMessage;
}

// set success message
function setSuccess(element) {
  const parent = element.parentElement;
  const span = parent.querySelector("span");
  if (span.classList.contains("error")) {
    span.classList.remove("error");
  }
  span.classList.add("success");
}

//verify email
function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
}

//validate phone number
function validatePhoneNumber(number) {
  var re = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(number);
}

//get password eye
const viewPassword = document.querySelectorAll(".far");
const allPassword = document.querySelectorAll(".password");

//get index and call toggle function
for (let index = 0; index < viewPassword.length; index++) {
  if (index == 0) {
    toggleView(viewPassword, allPassword, index);
  } else {
    toggleView(viewPassword, allPassword, index);
  }
}

//toggle type and icon class based
function toggleView(eventElement, inputValue, index) {
  eventElement[index].addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      inputValue[index].getAttribute("type") === "password"
        ? "text"
        : "password";
    inputValue[index].setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
  });
}
