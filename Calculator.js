// Get the HTML elements for the input box and buttons
const inputbox = document.getElementById('inputbox');
const calculateButton = document.getElementById('calculate-button');
const keys = document.getElementsByClassName('key');

// Add a click event listener to each button
for (const key of keys) {
  key.addEventListener('click', handleKeyClick);
}

// Handle a button click event
function handleKeyClick(event) {
  const selectedSign = event.target.textContent;

  // Check which button was clicked
  switch (selectedSign) {
    // If the "=" button was clicked, evaluate the expression in the input box
    case '=':
      if (inputbox.value !== "")
        inputbox.value = evaluateExpression(inputbox.value);
      break;
    // If the "AC" button was clicked, clear the input box
    case 'AC':
      inputbox.value = '';
      break;
    // Otherwise, add the clicked button's text to the input box
    default:
      inputbox.value += selectedSign;
      break;
  }
}

function evaluateExpression(expression) {
  let result;

  if (expression.includes('+')) {
    result = performAddition(expression);
  } else if (expression.includes('-')) {
    result = performSubtraction(expression);
  }

  // If the expression doesn't include either sign, return the expression as it is
  if (!result) {
    result = expression
  }
  return result;
}

function performAddition(expression) {
  const [a, b] = expression.split('+').map(Number);
  return a + b;
}

function performSubtraction(expression) {
  const [a, b] = expression.split('-').map(Number);
  return a - b;
}