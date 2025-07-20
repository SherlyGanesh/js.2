function getInputValues() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  return { num1, num2 };
}

function displayResult(value) {
  document.getElementById('result').textContent = value;
}

function add() {
  const { num1, num2 } = getInputValues();
  displayResult(num1 + num2);
}

function subtract() {
  const { num1, num2 } = getInputValues();
  displayResult(num1 - num2);
}

function multiply() {
  const { num1, num2 } = getInputValues();
  displayResult(num1 * num2);
}

function divide() {
  const { num1, num2 } = getInputValues();
  if (num2 === 0) {
    displayResult("Cannot divide by 0");
  } else {
    displayResult(num1 / num2);
  }
}

function square() {
  const num = parseFloat(document.getElementById('num1').value);
  displayResult(num * num);
}

function cube() {
  const num = parseFloat(document.getElementById('num1').value);
  displayResult(num * num * num);
}
