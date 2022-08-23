let display = document.getElementById('space');

let calculate=(number) =>{
    display.value+=number;
}

function clearField() {
    display.value = '';
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}