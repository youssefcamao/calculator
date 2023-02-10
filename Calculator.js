const inputbox = document.getElementById('inputbox');
const calculateButton = document.getElementById('calculate-button');
const keys = document.getElementsByClassName('key');

for (const key of keys) {
  key.addEventListener('click', handleKeyClick);
}

function handleKeyClick(event) {
  const selectedSign = event.target.textContent;

  switch (selectedSign) {
    case '=':
      inputbox.value = evaluateExpression(inputbox.value);
      break;
    case 'AC':
      inputbox.value = '';
      break;
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