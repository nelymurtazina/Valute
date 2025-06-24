const ValuteConst = {
  dollar: 78.40,
  evro: 90.14, 
  uan: 10.91,
  lira:1.98,
};

const allValute = document.getElementById('allValute');
const VvodInput = document.getElementById('GetInput');
const GetButton = document.getElementById('GetButton');
const resultElement = document.getElementById('result');

GetButton.addEventListener('click', () => {
  const valueSelect = allValute.value;
  const parseValue = parseFloat(VvodInput.value);

  if(!isNaN(parseValue) && parseValue > 0) {
    const konst = ValuteConst[valueSelect];
    const convertValute = parseValue * konst;

    resultElement.textContent = `Результат: ${parseValue} ${valueSelect.toUpperCase()} = ${convertValute.toFixed(2)} RUB`;
  } else {
    resultElement.textContent = 'Ошибка: Неверная валюта!'
  }
})