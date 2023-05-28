const { isValidInput, validateCreditCard } = require("../src/app");

describe("Input validation tests", () => {
  test("isValidInput should return true for valid names", () => {
    const name = "John Doe"; // this is a valid name
    const nameRegex = /^[a-zA-Z!#$%&'*+\-/=?^_`{|}~\s]+$/;
    expect(isValidInput(name, nameRegex)).toBe(true);
  });

  test("isValidInput should return false for invalid names", () => {
    const name = "John123"; // this is not a valid name
    const nameRegex = /^[a-zA-Z!#$%&'*+\-/=?^_`{|}~\s]+$/;
    expect(isValidInput(name, nameRegex)).toBe(false);
  });

  test("isValidInput should return true for valid emails", () => {
    const email = "johndoe@example.com"; // this is a valid email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    expect(isValidInput(email, emailRegex)).toBe(true);
  });

  test("isValidInput should return false for invalid emails", () => {
    const email = "johndoe@example"; // this is not a valid email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    expect(isValidInput(email, emailRegex)).toBe(false);
  });
});

describe("Credit card validation tests", () => {
  test("validateCreditCard should return true for valid numbers", () => {
    const cardNumber = "5356740188685622"; // this is a valid test number
    expect(validateCreditCard(cardNumber)).toBe(true);
  });

  test("validateCreditCard should return false for invalid numbers", () => {
    const cardNumber = "1234567890123456"; // this is not a valid number
    expect(validateCreditCard(cardNumber)).toBe(false);
  });
});
