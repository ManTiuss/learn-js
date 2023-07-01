// alert("Hello!");

// let answer = prompt("What's your name?", "");
// console. log(answer);

// let result = confirm("Hello, "+ answer +  "\nAre you feeling good?");
// if(result) {
//     alert("Great "+ answer +  "\nGlad to hear this!");
// } else {
//     alert("Ough! \nIt's sad to hear that. \nHopefully, it won't be for long!");
// }
// let num1 = prompt("Введіть перше число:");
// let num2 = prompt("Введіть друге число:");
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// let sum = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let quotient = num1 / num2;
// alert(num1 + "+" + num2 + "=" + sum + "\n" +
//       num1 + "-" + num2 + "=" + difference + "\n" +
//       num1 + "*" + num2 + "=" + product + "\n" +
//       num1 + "/" + num2 + "=" + quotient);

let birthYear = prompt("Введіть рік Вашого народження:");
let city = prompt("Введіть місто, в якому Ви проживаєте:");
let sport = prompt("Введіть Ваш улюблений вид спорту:");

if (birthYear && city && sport) {
  let age = new Date().getFullYear() - birthYear;
  let message = "Ваш вік: " + age + "\n";

  if (["Київ", "Вашингтон", "Лондон"].includes(city)) {
    message += "Ти живеш у столиці " + getCountryName(city) + "!";
  } else {
    message += "Ти живеш у місті " + city + "!";
  }

  alert(message);

  let sportChampions = {
    футбол: "Криштіану Роналду",
    теніс: "Рафаель Надаль",
    баскетбол: "Леброн Джеймс"
  };

  if (sportChampions.hasOwnProperty(sport)) {
    let message = "Круто! Хочеш стати " + sportChampions[sport] + "?";
    alert(message);
  }
} else {
  let missingFields = [];

  if (!birthYear) {
    missingFields.push("рік народження");
  }

  if (!city) {
    missingFields.push("місто");
  }

  if (!sport) {
    missingFields.push("вид спорту");
  }

  alert(
    "Шкода, що Ви не захотіли ввести свій(ю) " + missingFields.join(", ") + "."
  );
}

function getCountryName(city) {
  switch (city) {
    case "Київ":
      return "України";
    case "Вашингтон":
      return "США";
    case "Лондон":
      return "Великої Британії";
    default:
      return "";
  }
}