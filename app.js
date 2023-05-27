document.addEventListener("DOMContentLoaded", () => {
  const nameInfo = document.getElementById("name");
  const emailInfo = document.getElementById("email");
  const cardInfo = document.getElementById("card");

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

  cardInfo.addEventListener("input", () => {
    const card = cardInfo.value.trim();
    const numericTest = /^[0-9]+$/;
    if (!numericTest.test(card)) {
      showError(cardInfo, "Please enter a valid credit card number");
    } else if (!validateCreditCard(card)) {
      showError(cardInfo, "Invalid credit card number");
    } else {
      hideError(cardInfo);
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

  function validateCreditCard(cardNumber) {
    let digits = cardNumber.split("").map(Number);
    let oddSum = 0;
    let evenSum = 0;
    let len = digits.length;

    for (let i = 0; i < len; i++) {
      if ((len - i) % 2 === 0) {
        let val = 2 * digits[i];
        if (val > 9) {
          val -= 9;
        }
        evenSum += val;
      } else {
        oddSum += digits[i];
      }
    }

    return (oddSum + evenSum) % 10 === 0;
  }
});
