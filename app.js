document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("information-form");
  const formErrors = document.getElementById("form-errors");

  const fields = [
    {
      element: document.getElementById("name"),
      regex: /^[a-zA-Z!#$%&'*+\-/=?^_`{|}~\s]+$/,
      errorMsg: "Please enter a valid name.",
    },
    {
      element: document.getElementById("email"),
      regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      errorMsg: "Please enter a valid email address",
    },
    {
      element: document.getElementById("card"),
      regex: /^[0-9]+$/,
      errorMsg: "Please enter a valid credit card number",
      extraValidation: validateCreditCard,
      extraErrorMsg: "Invalid credit card number",
    },
  ];

  fields.forEach((field) => {
    field.element.addEventListener("input", () => validateField(field));
  });

  function validateField(field) {
    const { element, regex, errorMsg, extraValidation, extraErrorMsg } = field;
    const value = element.value.trim();
    const isValid =
      regex.test(value) && (!extraValidation || extraValidation(value));
    element.dataset.valid = isValid ? "true" : "false";
    isValid ? hideError(element) : showError(element, errorMsg);
  }

  function showError(input, message) {
    input.parentNode.nextElementSibling.textContent = message;
    input.parentNode.nextElementSibling.style.display = "block";
    input.style.backgroundColor = "#ffebec";
  }

  function hideError(input) {
    input.parentNode.nextElementSibling.textContent = "";
    input.parentNode.nextElementSibling.style.display = "none";
    input.style.backgroundColor = "#e2f2cc";
  }

  function showFormError(message) {
    formErrors.textContent = message;
    formErrors.style.display = "block";
  }

  function hideFormError() {
    formErrors.textContent = "";
    formErrors.style.display = "none";
  }

  function validateCreditCard(cardNumber) {
    const digits = Array.from(cardNumber, Number);
    let oddSum = 0;
    let evenSum = 0;

    digits.forEach((digit, index) => {
      if ((digits.length - index) % 2 === 0) {
        let val = 2 * digit;
        if (val > 9) {
          val -= 9;
        }
        evenSum += val;
      } else {
        oddSum += digit;
      }
    });

    return (oddSum + evenSum) % 10 === 0;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const hasErrors = fields.some(
      (field) => field.element.dataset.valid === "false"
    );
    if (hasErrors) {
      showFormError("Please correct the errors in the form before submitting.");
      return;
    }

    hideFormError();
    const { name, email, card } = form.elements;
    const payload = { name: name.value, email: email.value, card: card.value };

    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        form.reset(); // Clear the form after successful submission
        fields.forEach(({ element }) => {
          element.style.backgroundColor = "#fff";
        });
        showFormError("Thank you! Your card details have been submitted.");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
