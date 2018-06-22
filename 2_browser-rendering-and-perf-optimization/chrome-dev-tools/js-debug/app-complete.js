function displayResult() {
  if (exceptionHandlers()) return;
  resultText.innerHTML = getNumber1() + " + " + getNumber2() + " = " + sumNumbers();
  return updateInput();
}
function sumNumbers() {
  return parseInt(getNumber1()) + parseInt(getNumber2());
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
function updateInput() {
  inputs[0].value = '';
  inputs[1].value = '';
}
function exceptionHandlers() {
  if (getNumber1() === '' || getNumber2() === '') {
    resultText.innerHTML = "Put!! the numbers in input boxes.";
    return true;
  }
  return false;
}

var inputs = document.querySelectorAll('input');
var sumBtn = document.getElementById('sumBtn');
var resultText = document.querySelector('blockquote');
sumBtn.addEventListener('click', displayResult);
