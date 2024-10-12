function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPassword(password) {
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /\d/g;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return (
    password.length >= minLength &&
    uppercaseRegex.test(password) &&
    (password.match(digitRegex) || []).length >= 3 &&
    specialCharRegex.test(password)
  );
}

function showError(inputElement, message) {
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  inputElement.parentNode.appendChild(errorElement);
  inputElement.classList.add("error");
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
}

function validateLoginForm(event) {
  event.preventDefault();
  clearErrors();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let isValid = true;

  if (!email.value) {
    showError(email, "Please enter an email");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Invalid email formart");
    isValid = false;
  }
  if (!password.value) {
    showError(password, "Please enter your password");
    isValid = false;
  }
  if (isValid) {
    window.location.href = "../Assignment2/index.html";
  }
}
function validateSignupForm(event) {
  event.preventDefault();
  clearErrors();
  const firstName = document.getElementById("fName");
  const lastName = document.getElementById("lName");
  const email = document.getElementById("email1");
  const password = document.getElementById("password1");
  const confirmPassword = document.getElementById("confirmPassword");
  let isValid = true;

  if (!firstName.value) {
    showError(firstName, "First name is required");
    isValid = false;
  }
  if (!lastName.value) {
    showError(lastName, "Last name is required");
    isValid = false;
  }
  if (!email.value) {
    showError(email, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Invalid email format");
    isValid = false;
  }
  if (!password.value) {
    showError(password, "Password is required");
    isValid = false;
  } else if (!isValidPassword(password.value)) {
    showError(
      password,
      "password must be at least 8 characters long and contain at least one uppercase letter, three digits, and one special character"
    );
    isValid = false;
  }

  if (!confirmPassword.value) {
    showError(confirmPassword, "Confirm password is required");
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }
  if (isValid) {
    Swal.fire({
        title: "You have Signed up",
        text: "Proceed to log in!",
        icon: "success"
      });
      loginActive()
  }
}
document
  .querySelector(".login-page form")
  .addEventListener("submit", validateLoginForm);
document
  .querySelector(".signup-page form")
  .addEventListener("submit", validateSignupForm);
