
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
  function promptUserInput(promptMessage) {
    let userInput = null;
    while (userInput === null || isNaN(userInput)) {
      userInput = prompt(promptMessage);
      if (userInput === null) {
        return null;
      }
    }
    return parseFloat(userInput);
  }
  function calculateQuadraticEquation(a, b, c, ifInvalid) {
    if (a === 0) {
      ifInvalid();
      return null;
    }
    const d = b ** 2 - 4 * a * c;
    if (d >= 0) {
      const x1 = (-b + Math.sqrt(d)) / (2 * a);
      const x2 = (-b - Math.sqrt(d)) / (2 * a);
      return { d, x1, x2 };
    } else {
      return { d: -d, x1: null, x2: null };
    }
  }
  function solveQuadraticEquation() {
    console.log("Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0");
    const a = promptUserInput("Введіть a");
    const b = promptUserInput("Введіть b");
    const c = promptUserInput("Введіть c");
    if (a === null || b === null || c === null) {
      console.log("Скасовано користувачем");
      return;
    }
    const ifInvalid = () => {
      console.log("a = 0, функція не має рішень");
    };
    const result = calculateQuadraticEquation(a, b, c, ifInvalid);
    if (result !== null) {
      console.log("Результати:");
      console.log(`D = ${result.d}`);
      console.log(`x1 = ${result.x1}`);
      console.log(`x2 = ${result.x2}`);
    }
  }
   solveQuadraticEquation();