const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const submitButton = document.getElementById("submitButton");

    emailInput.addEventListener("input", () => {
      const emailValue = emailInput.value;
      if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
        emailError.textContent = " ";
        emailError.className = "success-message";
      } else {
        emailError.textContent = "Make sure email is more than 3 characters and has @ and .";
        emailError.className = "error-message";
      }
    });

    passwordInput.addEventListener("input", () => {
      const passwordValue = passwordInput.value;
      if (passwordValue.length > 8) {
        passwordError.textContent = "All good to go!";
        passwordError.className = "success-message";
      } else {
        passwordError.textContent = "Make sure password is more than 8 characters.";
        passwordError.className = "error-message";
      }
    });

    submitButton.addEventListener("click", () => {
      const isEmailValid =
        emailInput.value.length > 3 &&
        emailInput.value.includes("@") &&
        emailInput.value.includes(".");
      const isPasswordValid = passwordInput.value.length > 8;

      if (isEmailValid && isPasswordValid) {
        if (confirm("Are you sure you want to sign up?")) {
          alert("Successful signup!");
        } else {
          emailInput.value = "";
          passwordInput.value = "";
          emailError.textContent = "";
          passwordError.textContent = "";
        }
      } else {
        alert("Please fix the errors before submitting the form.");
      }
    });