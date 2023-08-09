
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getInfo() {
      console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
  }
  class Car {
    constructor(brand, model, year, licensePlate) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licensePlate = licensePlate;
      this.owner = null;
    }
    setOwner(person) {
      if (person.age >= 18) {
        this.owner = person;
      } else {
        console.log("Власник повинен бути старше 18 років.");
      }
    }
    getInfo() {
      console.log(`Марка: ${this.brand}, Модель: ${this.model}`);
      console.log(`Рік виписку: ${this.year}, Номерний знак: ${this.licensePlate}`);
      if (this.owner) {
        console.log("Інформація про власника:");
        this.owner.getInfo();
      } else {
        console.log("Цей автомобіль не має власника.");
      }
    }
  }
  const person1 = new Person("Олег", 25);
  const person2 = new Person("Юлія", 30);
  const car1 = new Car("Audi", "A4", 2018, "ВС1234АА");
  const car2 = new Car("BMW", "X5", 2020, "ВС5678ВВ");
  car1.setOwner(person1);
  car2.setOwner(person2);
  car1.getInfo();
  console.log("------------------");
  car2.getInfo();