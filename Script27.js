// Створюємо об'єкт зі значеннями смайлів та лічильником голосів
const options = {
    "😊": 0,
    "😄": 0,
    "😐": 0,
    "😞": 0,
    "😢": 0
  };

  // Функція для оновлення лічильників та відображення результатів
  function updateResults() {
    // Отримуємо DOM-елемент, де будемо відображати результати
    const resultsElement = document.getElementById("results");

    // Очищаємо попередні результати
    resultsElement.innerHTML = "";

    // Перебираємо всі варіанти відповіді
    for (const option in options) {
      // Створюємо DOM-елемент для смайла
      const emojiElement = document.createElement("span");
      emojiElement.textContent = option;

      // Створюємо DOM-елемент для лічильника
      const countElement = document.createElement("span");
      countElement.textContent = options[option];

      // Додаємо смайл та лічильник до DOM-елемента результатів
      resultsElement.appendChild(emojiElement);
      resultsElement.appendChild(countElement);
    }
  }

  // Функція для обробки кліку на смайл
  function handleEmojiClick(emoji) {
    // Збільшуємо значення лічильника для вибраного смайла
    options[emoji]++;

    // Оновлюємо результати
    updateResults();
  }

  // Викликаємо функцію оновлення результатів для початкового відображення
  updateResults();

  // Отримуємо DOM-елемент, де будемо відображати смайлики для голосування
  const emojisElement = document.getElementById("emojis");

  // Перебираємо всі варіанти відповіді
  for (const option in options) {
    // Створюємо DOM-елемент для смайла
    const emojiElement = document.createElement("button");
    emojiElement.textContent = option;
    emojiElement.onclick = () => handleEmojiClick(option);

    // Додаємо смайл до DOM-елемента з смайликами для голосування
    emojisElement.appendChild(emojiElement);
  }