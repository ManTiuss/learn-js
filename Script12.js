function pow(num, degree) {
    if (degree === 0) {
      return 1;
    } else if (degree > 0) {
      return num * pow(num, degree - 1);
    } else {
      return 1 / pow(num, -degree);
    }
  }
  
  console.log(pow(2, 3)); // 8
  console.log(pow(5, -2)); // 0.04