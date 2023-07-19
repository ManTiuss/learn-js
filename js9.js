const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів
let sum = 0;
let positiveCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
    positiveCount++;
  }
}

console.log("Сума позитивних елементів:", sum);
console.log("Кількість позитивних елементів:", positiveCount);

// Знайти мінімальний елемент масиву та його порядковий номер
let minElement = array[0];
let minIndex = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] < minElement) {
    minElement = array[i];
    minIndex = i;
  }
}

console.log("Мінімальний елемент:", minElement);
console.log("Порядковий номер мінімального елемента:", minIndex);

// Знайти максимальний елемент масиву та його порядковий номер
let maxElement = array[0];
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] > maxElement) {
    maxElement = array[i];
    maxIndex = i;
  }
}

console.log("Максимальний елемент:", maxElement);
console.log("Порядковий номер максимального елемента:", maxIndex);

// Визначити кількість негативних елементів
let negativeCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeCount++;
  }
}

console.log("Кількість негативних елементів:", negativeCount);

// Знайти кількість непарних позитивних елементів
let oddPositiveCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    oddPositiveCount++;
  }
}

console.log("Кількість непарних позитивних елементів:", oddPositiveCount);

// Знайти кількість парних позитивних елементів
let evenPositiveCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    evenPositiveCount++;
  }
}

console.log("Кількість парних позитивних елементів:", evenPositiveCount);

// Знайти суму парних позитивних елементів
let evenPositiveSum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 === 0) {
    evenPositiveSum += array[i];
  }
}

console.log("Сума парних позитивних елементів:", evenPositiveSum);

// Знайти суму непарних позитивних елементів
let oddPositiveSum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] % 2 !== 0) {
    oddPositiveSum += array[i];
  }
}

console.log("Сума непарних позитивних елементів:", oddPositiveSum);

// Знайти добуток позитивних елементів
let positiveProduct = 1;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    positiveProduct *= array[i];
  }
}

console.log("Добуток позитивних елементів:", positiveProduct);

// Знайти найбільший серед елементів масиву, інші обнулити
let maxElement2 = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > maxElement2) {
    maxElement2 = array[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] !== maxElement2) {
    array[i] = 0;
  }
}

console.log("Максимальний елемент:", maxElement2);
console.log("Масив з обнуленими елементами, крім найбільшого:", array);