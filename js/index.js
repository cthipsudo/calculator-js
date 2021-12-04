let displayValue = "";
let input1;
let input2;
let operator;
let displayEle = document.querySelector('#screen-content');

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

const attachListeners = () => {
  // Num Buttons 
  const numButtons = document.querySelectorAll('.calc-num');
  numButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.remove('pressed');
      displayValue = button.textContent;
      displayEle.textContent = displayValue;
    });
    button.addEventListener('mousedown', () => {
      button.classList.add('pressed');
    })
  });
  //Op Buttons
  const opButtons = document.querySelectorAll('.calc-op');
  opButtons.forEach(button => {
    button.addEventListener('click', ()=>{
      button.classList.remove('pressed');
      let num = displayEle.textContent;
      if(input1){
        input2 = num;
      } else {
        input1 = num;
      }
      operator = button.textContent;
    })
    button.addEventListener('mousedown', () => {
      button.classList.add('pressed');
    })
  }); 
  //Equals
  const equalButton = document.querySelector('.calc-equals');
  equalButton.addEventListener('click', () => {
    console.log(`${input1} | ${input2} | ${operator}`);
  });
}

const main = () => {
  attachListeners();
}

main();