let firstNumber;
let secondNumber;
let operator;

function add(firstNumber, secondNumber) {
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
    return operation(firstNumber, secondNumber);
}