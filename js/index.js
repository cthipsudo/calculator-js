console.log("Hello World");

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const operate = (op, num1, num2) => {
  switch (op) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    default:
      break;
  }
};
