let firstNumber = '';
let secondNumber = '';
let operator = '';

const input1 = document.getElementById("input-number-1");
const input2 = document.getElementById("input-number-2");
const operationSymbol = document.getElementById("operation-symbol");
const resultContainer = document.getElementById("result-container");

function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case '+':
            return addition(firstNumber, secondNumber);
        case '-':
            return subtraction(firstNumber, secondNumber);
        case 'x':
            return multiplication(firstNumber, secondNumber);
        case '/':
            if (secondNumber === 0) {
                return "Dont you dare!";
            } else {
                return division(firstNumber, secondNumber);
            }
        default:
            return null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let inputNumber1 = '';
    let inputNumber2 = '';
    let operationSymbolValue = '';
    let currentInput = 'inputNumber1';
    let calculationDone = false;

    const updateDisplay = () => {
        input1.textContent = inputNumber1;
        input2.textContent = inputNumber2;
        operationSymbol.textContent = operationSymbolValue;
        if (calculationDone) {
            const result = operate(operationSymbolValue, parseFloat(inputNumber1), parseFloat(inputNumber2));
            resultContainer.textContent = ' = ' + (typeof result === 'number' ? result.toFixed(1).toString() : result);
        } else {
            resultContainer.textContent = '';
        }
    };


    const inputButtons = document.querySelectorAll('.input-button');
    const equalButton = document.getElementById('equal-button');

    const setButtonState = (state) => {
        inputButtons.forEach(button => {
            if (button.id !== 'equal-button') {
                button.disabled = state;
            }
        });
    };

    inputButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (calculationDone && value !== 'Del') {
                return;
            }
            if (!isNaN(value) || value === '.') {
                if (value === '.') {
                    if (currentInput === 'inputNumber1' && inputNumber1.includes('.')) {
                        return;
                    } else if (currentInput === 'inputNumber2' && inputNumber2.includes('.')) {
                        return;
                    }
                }
                if (currentInput === 'inputNumber1') {
                    inputNumber1 += value;
                } else {
                    inputNumber2 += value;
                }
            } else if (value === '=') {
                if (inputNumber1 !== '' && inputNumber2 !== '' && operationSymbolValue !== '') {
                    currentInput = 'inputNumber1';
                    calculationDone = true;
                    setButtonState(true);
                    equalButton.textContent = 'Del';
                    updateDisplay();
                }
            } else if (value === 'Del') {
                if (calculationDone) {
                    inputNumber1 = '';
                    inputNumber2 = '';
                    operationSymbolValue = '';
                    calculationDone = false;
                    setButtonState(false);
                    equalButton.textContent = '=';
                }
            } else {
                if (currentInput === 'inputNumber1' && inputNumber1 !== '') {
                    operationSymbolValue = value;
                    currentInput = 'inputNumber2';
                }
            }

            updateDisplay();
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if ((key <= 0 || key >= 0) || key === '.') {
            //handle the input
        } else if (key === '+') {
            //handle the input
        } else if (key === '-') {
            //handle the input
        } else if (key === 'x') {
            //handle the input
        } else if (key === '/') {
            //handle the input
        } else if (key === 'Enter') {
            //handle the input
        } else if (key === 'Backspace') {
            //handle the input
        }
    });

    updateDisplay();
});
