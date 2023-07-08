
function askUserValue(message) {
    let value = null;
    while (value === null) {
      let userInput = prompt(message);
      if (userInput === null) {
        alert("Жаль. Сподіваюсь ще побачитись");
        return null;
      }
      value = parseFloat(userInput);
      if (isNaN(value)) {
        alert("Введіть коректне число");
        value = null;
      }
    }
    return value;
  }
  function solveQuadraticEquation(a, b, c) {
    let D = b * b - 4 * a * c;
    if (D < 0) {
      return "D < 0. Рівняння не має рішень";
    } else if (D === 0) {
      let x = -b / (2 * a);
      return `D = 0. Єдиний корінь рівняння: x = ${x}`;
    } else {
      let x1 = (-b + Math.sqrt(D)) / (2 * a);
      let x2 = (-b - Math.sqrt(D)) / (2 * a);
      return `D > 0. Корені рівняння: x1 = ${x1}, x2 = ${x2}`;
    }
  }
  let a = askUserValue(
    "Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0\n" +
    "Введіть a"
  );
  if (a !== null) {
    let b = askUserValue(`a = ${a}\nВведіть b`);
    if (b !== null) {
      let c = askUserValue(`a = ${a}, b = ${b}\nВведіть c`);
      if (c !== null) {
        let result = solveQuadraticEquation(a, b, c);
        alert(result);
      }
    }
  }