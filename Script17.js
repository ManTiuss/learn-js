function validatePhoneNumber(input) {
    // Видаляємо всі символи, крім цифр, "+" та "-"
    const strippedNumber = input.replace(/[^0-9+-]/g, '');
  
    // Перевіряємо, чи є валідним номером телефону
    const phoneNumberRegex = /^(?:\+?380|0)(?:\d{2}(?:\d{2})?){4}$/;
    if (!phoneNumberRegex.test(strippedNumber)) {
      return null;
    }
  
    // Форматуємо номер телефону у локалізований формат
    const formattedNumber = strippedNumber.replace(/^\+?380/, '0').replace(/\D/g, '');
  
    // Повертаємо локалізований номер телефону
    return formattedNumber;
  }
  
  console.log(validatePhoneNumber("+380 44 364 83 65"));    // 0443648365
  console.log(validatePhoneNumber("380-44-364-83-65"));   // 0443648365
  console.log(validatePhoneNumber("+38 044 364 83 65"));  // null