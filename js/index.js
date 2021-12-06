let displayValue = "";
let input1;
let input2;
let operator;
let displayEle = document.querySelector("#screen-content");

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const divide = (num1, num2) => {
  
  return num2 === 0 ? 'Cannot divide by zero' : num1 / num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const operate = (op, num1, num2) => {
  //console.log(op);
  switch (op) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    default:
      console.log("Error has occured");
      break;
  }
};

const attachListeners = () => {
  // Num Buttons
  const numButtons = document.querySelectorAll(".calc-num");
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.remove("pressed");
      displayValue += button.textContent;
      displayEle.textContent = displayValue;
    });
    button.addEventListener("mousedown", () => {
      button.classList.add("pressed");
    });
  });

  //Op Buttons
  const opButtons = document.querySelectorAll(".calc-op");
  opButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //console.log(`${input1} | ${operator} | ${input2} `);
      button.classList.remove("pressed");
      let num = displayEle.textContent;

      if(!input1){ // If input1 is empty
        input1 = num;
      }
      //operator = button.textContent;
      
      // Figure out chain operators
      //If op is exists
      //do the op and return values
      if (operator) {
        //console.log(`${input1} | ${operator} | ${num}`);
        const quickOp = operate(operator, +input1, +num);
        displayEle.textContent = quickOp;
        input1 = quickOp;
        operator = button.textContent;
      } else {
        operator = button.textContent;
      }

      // "clear" it
      //displayEle.textContent = operator;
      displayValue = "";
    });
    button.addEventListener("mousedown", () => {
      button.classList.add("pressed");
    });
  });

  //Equals
  const equalButton = document.querySelector(".calc-equals");
  equalButton.addEventListener("click", () => {
    //Grab input 2;
    input2 = displayEle.textContent;
    //console.log(`${input1} | ${operator} | ${input2} `);
    if (input1 && input2 && operator) {
      // Call operator func and input parameters
      console.log(operate(operator, +input1, +input2));
      displayEle.textContent = operate(operator, +input1, +input2);
    }

    // Clear inputs and op variable;
    operator = null;
  });

  //Clear
  const clearButton = document.querySelector(".calc-clear");
  clearButton.addEventListener("click", () => {
    // Reset Display Elements
    displayEle.textContent = "";
    displayValue = "";

    // Reset inputs and op
    input1 = null;
    input2 = null;
    operator = null;
  });

  //Backspace 
  const backButton = document.querySelector(".calc-back");
  backButton.addEventListener('click', () => {
    let temp = displayEle.textContent.split('');
    temp.pop();
    displayEle.textContent = temp.join('');
    displayValue = temp.join('');
  })
};

const main = () => {
  attachListeners();
};

main();
