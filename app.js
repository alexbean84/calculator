let display = document.getElementById('space');

let calculate=(number) =>{
    display.value+=number;
}

function clearField() {
    location.reload();
}

function removeItem() {
    let display = document.getElementById('space').value;
    document.getElementById('space').value=display.substring(0,display.length-1);
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

function operate() {
    let result = 0;
}
