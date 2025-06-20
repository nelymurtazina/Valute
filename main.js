function getValue() {
  const input = document.getElementById('numberInput');
  const number = parseFloat(input.value)
  if (isNaN(number)) {
    document.getElementById('result').textContent = 'Пожалуйста, введите число!';
    return;
  }

  const dollar = '78.40';
  const resuolt = (number * dollar).toFixed(2);

  document.getElementById('result').textContent = `Результат: ${resuolt}`;
}

function getValueEvro() {
  const input = document.getElementById('numberInputEvro');
  const number = parseFloat(input.value);
  if (isNaN(number)) {
    document.getElementById('result').textContent = 'Пожалуйста, введите число!';
    return;
  }
  const evro = 90.14;
  const resultEvro = (number * evro).toFixed(2);
  document.getElementById('evro').textContent = `${resultEvro}`
}