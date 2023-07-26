function createSum() {
    let sum = 0; // змінна-акумулятор для збереження суми
  
    // Внутрішня функція, яка отримує значення і додає його до суми
    function add(number) {
      sum += number;
      return sum;
    }
  
    // Повертаємо внутрішню функцію, яка зберігає доступ до змінної sum
    return add;
  }
  
  // Створюємо екземпляр функції createSum
  const sum = createSum();
  
  // Викликаємо функцію sum з різними аргументами
  console.log(sum(3)); // 3
  console.log(sum(5)); // 8
  console.log(sum(20)); // 28