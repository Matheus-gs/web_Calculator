// 
var screenNumber;
var result;
function number(num) {
    screenNumber = document.calculator.screen.value += num;
}
// 
function deleteNumber() {
    let screen = document.getElementById('screen');
    screen.value = '';
}
// 
function calculate() {
    result = eval(screenNumber);
    document.calculator.screen.value = result;
}