for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
  }
  const exchangeRate = 27;
  for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} dollars = ${i * exchangeRate} hryvnias`);
  }
  const n = 50;
  for (let i = 1; i*i <= n && i <= 100; i++) {
    console.log(i*i);
  }
  
  let number = parseInt(prompt("Введіть ціле число: "));
  let divisorCount = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisorCount++;
    }
  }
  if (divisorCount === 2) {
    console.log(number + " є простим числом");
  } else {
    console.log(number + " не є простим числом");
  }
  
  function isPowerOfThree(n) {
    if (n === 0) {
      return false;
    }
    if (n === 1) {
      return true;
    }
    if (n % 3 !== 0) {
      return false;
    }
    return isPowerOfThree(n / 3);
  }
  console.log(isPowerOfThree(9)); // true
  console.log(isPowerOfThree(13)); // false