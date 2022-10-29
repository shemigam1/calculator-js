class Calculator {
  constructor(prevOpText, currentOpText) {
    this.prevOpText = prevOpText;
    this.currentOpText = currentOpText;
  }

  clear() {
    (this.currentOp = ""), (this.prevOp = ""), (this.operation = undefined);
  }

  delete() {}

  append() {}

  chooseOperation(operation) {}
  compute() {}

  updateDisplay() {
    this.currentOpText.innerText = this.currentOp;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const prevOpText = document.querySelector("[data-prev-op]");
const currentOpText = document.querySelector("[data-current-op]");

const calculator = new Calculator(prevOpText, currentOpText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
