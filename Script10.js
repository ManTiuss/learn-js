// Створення масиву з введеними користувачем довжиною та елементами
const length = parseInt(prompt("Введіть довжину масиву:"));
const array = [];

for (let i = 0; i < length; i++) {
  const element = parseInt(prompt(`Введіть елемент ${i + 1}:`));
  array.push(element);
}

// Сортування масиву за зростанням
array.sort((a, b) => a - b);

// Виведення вмісту масиву на сторінку
const output = document.getElementById("output");
output.innerText = `Масив: ${array.join(", ")}`;

// Видалення елементів з 2 по 4
array.splice(1, 4);

// Оновлення виведення вмісту масиву на сторінку
output.innerText = `Масив після видалення елементів з 2 по 4: ${array.join(", ")}`;