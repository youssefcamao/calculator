const inputbox_ID = "inputbox";
const calculate_button_ID = "calculate-button";
const key_class = "key";

const inputbox = document.getElementById(inputbox_ID);
const keys = document.getElementsByClassName(key_class);
const calculateButton = document.getElementById(calculate_button_ID);

for (const key of keys) {
  key.addEventListener("click", function (event) {
    let selectedsign = event.target.textContent;

    if (selectedsign === "=") {
      inputbox.value = result(inputbox.value);
    } else if (selectedsign === "AC") {
      inputbox.value = "";
    } else {
      inputbox.value += selectedsign;
    }
  });
}

function result(calculate) {
  let result = 0;

  if (calculate.includes("+")) {
    const operator = "+";
    const numbers = calculate.split(operator);
    const number1 = numbers[0];
    const number2 = numbers[1];

    result = plus(Number(number1), Number(number2));
  } 
  else if (calculate.includes("-")) {
    const operator = "";
    const numbers = calculate.split(operator);
    const number1 = numbers[0];
    const number2 = numbers[1];

    result = minus(Number(number1), Number(number2));
  }
  // else if(){

  // }
  return result;
}

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return
}
