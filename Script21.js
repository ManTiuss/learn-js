class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        if (person instanceof Person) {
            this.residents.push(person);
        } else {
            console.log("Error: Resident must be an instance of the Person class.");
        }
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            if (apartment instanceof Apartment) {
                this.apartments.push(apartment);
            } else {
                console.log("Error: Apartment must be an instance of the Apartment class.");
            }
        } else {
            console.log("Error: Maximum number of apartments reached.");
        }
    }
}

// Demonstration
let person1 = new Person("Alice", "Female");
let person2 = new Person("Bob", "Male");
let person3 = new Person("Charlie", "Male");

let apartment1 = new Apartment();
apartment1.addResident(person1);
apartment1.addResident(person2);

let apartment2 = new Apartment();
apartment2.addResident(person3);

let house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);

// Display output in console
console.log("House:");
console.log(house);

console.log("Apartments:");
house.apartments.forEach((apartment, index) => {
    console.log(`Apartment ${index + 1}:`);
    console.log(apartment);
});

console.log("Residents:");
house.apartments.forEach((apartment, index) => {
    console.log(`Residents in Apartment ${index + 1}:`);
    apartment.residents.forEach(resident => {
        console.log(resident);
    });
});
