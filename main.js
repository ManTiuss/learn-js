// alert("Hello!");

// let answer = prompt("What's your name?", "");
// console. log(answer);

// let result = confirm("Hello, "+ answer +  "\nAre you feeling good?");
// if(result) {
//     alert("Great "+ answer +  "\nGlad to hear this!");
// } else {
//     alert("Ough! \nIt's sad to hear that. \nHopefully, it won't be for long!");
// }
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
alert(num1 + "+" + num2 + "=" + sum + "\n" +
      num1 + "-" + num2 + "=" + difference + "\n" +
      num1 + "*" + num2 + "=" + product + "\n" +
      num1 + "/" + num2 + "=" + quotient);