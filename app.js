document.addEventListener("DOMContentLoaded", () => {
  const nameInfo = document.getElementById("name");
  const emailInfo = document.getElementById("email");

  nameInfo.addEventListener("input", () => {
    const name = nameInfo.value.trim();
    const nameTest = /^[a-zA-Z!#$%&'*+\-/=?^_`{|}~\s]+$/;
    if (!nameTest.test(name)) {
      showError(nameInfo, "Please enter a valid name.");
    } else {
      hideError(nameInfo);
    }
  });

  emailInfo.addEventListener("input", () => {
    const email = emailInfo.value.trim();
    const emailTest = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailTest.test(email)) {
      showError(emailInfo, "Please enter a valid email address");
    } else {
      hideError(emailInfo);
    }
  });

  function showError(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    input.style.backgroundColor = "#ffebec";
  }

  function hideError(input) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
    input.style.backgroundColor = "#e2f2cc";
  }
});
