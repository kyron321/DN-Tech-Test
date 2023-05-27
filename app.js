document.addEventListener("DOMContentLoaded", () => {
  const nameInfo = document.getElementById("name");

  nameInfo.addEventListener("input", () => {
    const name = nameInfo.value.trim();
    const nameTest = /^[a-zA-Z!#$%&'*+\-/=?^_`{|}~\s]+$/;
    if (!nameTest.test(name)) {
      showError(nameInfo, "Please enter a valid name.");
    } else {
      hideError(nameInfo);
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
