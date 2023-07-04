let result = "";
for(let i = 10; i <= 20; i++){
  result += i + ", ";
}

console.log(result);
for(let i = 10; i <= 20; i++){
    console.log(i*i);
}

for(let i = 1; i <= 10; i++){
    console.log("7 x " + i + " = " + 7*i);
}

let sum = 0;
for(let i = 1; i <= 15; i++){
    sum += i;
}
    console.log(sum);

let product = 1;
for(let i = 15; i <= 35; i++){
    product *= i;
}
    console.log(product);

let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
let average = sum / 500;
    console.log(average);

let sum2 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
    sum += i;
    }
}
    console.log(sum);

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
    console.log(i);
    }
}

let num = 24; // задане натуральне число
let divisors = [];

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisors.push(i);
  }
}

console.log(divisors); // виводимо всі дільники в консоль

let number = 24; // задане натуральне число
let count = 0;

for (let i = 1; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    count++;
  }
}
console.log(count); // виводимо кількість парних дільників в консоль

let number1 = 24; // задане натуральне число
let sum3 = 0;

for (let i = 1; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    sum += i;
  }
}
console.log(sum); // виводимо суму парних дільників в консоль

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
}




